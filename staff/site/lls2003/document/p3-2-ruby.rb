#!/usr/bin/env ruby

class AccessLog
  include Enumerable
  attr_accessor :ip_addr

  LogFormat  = /\A(\S+) \S+ \S+ \[([^\]]+)\].*\Z/
  DateFormat = %r!\A(\d\d)/([A-Z][a-z][a-z])/(\d\d\d\d):(\d\d):(\d\d):(\d\d)!
  Month      = %w(Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec)

  def initialize(f)
    @logfile = f
    @ip_addr = ''
  end
  
  def parse_time(time)
    m = DateFormat.match(time)
    Time.local(m[3].to_i, Month.index(m[2])+1, m[1].to_i, m[4].to_i, m[5].to_i, m[6].to_i)
  end

  def each
    @logfile.each do |line|
      m = LogFormat.match(line)
      yield parse_time(m[2]) if m and m[1] == @ip_addr
   end
  end
end

module Report
  INTERVAL = 5 * 60
  
  def output_log(start_time, end_time, count)
    e = end_time - start_time
    puts "#{start_time} -> #{end_time} #{'%3d' % e} sec (#{count})"
    e
  end
    
  def report(log)
    visits = count = elapsed_time = 0
    first_time = previous_time = log.first
    
    log.each do |current_time|
      if current_time - previous_time > INTERVAL
        elapsed_time += output_log(first_time, previous_time, count)
        first_time = previous_time = current_time
        visits += 1
        count = 1
      else
        count += 1
        previous_time = current_time
      end
    end
    if first_time == previous_time or count > 1
      visits += 1
      elapsed_time += output_log(first_time, previous_time, count)
    end
    
    puts <<EOS
total: #{elapsed_time.to_i} sec
visits: #{visits}
average: #{"%.2f" % (elapsed_time/[visits, 1].max)} sec
EOS
  end
end

if __FILE__ == $0
  include Report
  ip_addr            = ARGV.shift
  access_log         = AccessLog.new(ARGF)
  access_log.ip_addr = ip_addr
  report(access_log.sort)
end
