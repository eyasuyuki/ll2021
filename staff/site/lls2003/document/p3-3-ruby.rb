#! /usr/bin/env ruby

require 'socket'

def usage
	puts "usage: #$0 server server_port local local_port"
	exit
end
usage if ARGV.size != 4

module Janken
	CHAMPION = '100'
	WIN = '110'
	LOSE = '120'
	DRAW = '130'
	HANDS = ['PAPER', 'SCISSORS', 'ROCK']
	RESULT_MSG = {
		CHAMPION => 'Champion',
		WIN => 'Win',
		LOSE => 'Lose',
		DRAW => 'Draw',
	}

	class Client
		def initialize(ui, s_ip, s_port, c_ip, c_port)
			@server = [s_ip, s_port]
			@client = [c_ip, c_port]
			@ui = ui
			@socket = TCPServer.new(*@client)
		end

		def run
			start
			call_open rescue false
			cleanup
		end

	private
		def cleanup
			@socket.close
		end

		def start
			begin
				TCPSocket.open(*@server) do |s|
					s.print "#{@client.join(':')}\r\n"
				end
			rescue => error
				STDERR.puts error
				usage
			end
			sentinel(Thread.current)
		end

		def call_open
			while true
				s = @socket.accept
				while l = s.gets
					if /\ACALL\r\n\z/ === l
						s.print "#{@ui.get_hand}\r\n"
					end
				end
				s.close
			end
		end

		def sentinel(thread)
			Thread.start(UDPSocket.new) do |s|
				s.bind(*@client)
				while l = s.gets
					result = l[/\A\d{3}/]
					@ui.show_result(result)
					break if result == CHAMPION or result == LOSE
				end
				s.close
				thread.raise("yame-")
			end
		end
	end
end

class RandomUI
	def get_hand
		hand = Janken::HANDS[rand(Janken::HANDS.size)]
		STDERR.puts hand
		hand
	end

	def show_result(result)
		STDERR.puts Janken::RESULT_MSG[result]
	end
end

while true
	Janken::Client.new(RandomUI.new, *ARGV).run
end
# vim: ts=3
