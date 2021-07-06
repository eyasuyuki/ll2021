#!/usr/bin/ruby -Ku

require 'cgi'
require 'uri'
require 'net/http'
require 'rexml/document'
require 'erb'

SLASHDOT = 'http://slashdot.jp/slashdot.rdf'

class RSSViewer
   def initialize( proxy = ENV['HTTP_PROXY'] )
      if proxy then
         @proxy_host, @proxy_port = proxy.split( /:/, 2 )
      end
   end

   def get_rss( uri )
      Net::HTTP::Proxy( @proxy_host, @proxy_port ).get( URI::parse( uri ) )
   end

   def rss2html( rss, tmpl )
      doc = REXML::Document::new( rss ).root
      @channels = doc.elements.to_a( '//channel' )
      @items = {}
      doc.elements.to_a( '//item' ).each do |item|
         @items[item.attributes['rdf:about']] =
            [item.elements['title'].text, item.elements['link'].text]
      end
      ERB::new( tmpl, nil, '%' ).result( binding )
   end

private
   def each_channel
      @channels.each do |ch|
         yield ch.elements['title'].text,
            ch.elements['link'].text,
            ch.elements['items'].elements['rdf:Seq'].elements.to_a( 'rdf:li' )
      end
   end

   def each_item( items )
      items.each do |item|
         res = item.attributes['rdf:resource']
         yield @items[res]
      end
   end
end

if __FILE__ == $0
   cgi = CGI::new
   print cgi.header( 'charset' => 'UTF-8' )

   viewer = RSSViewer::new()
   uri = cgi.params['uri'][0] || SLASHDOT
   rss = viewer.get_rss( uri )
   print viewer.rss2html( rss, DATA.read )
end

__END__
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="ja-JP">
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <title>RSSViewer</title>
</head>
<body>
<h1>RSS-Viewer</h1>

<form method='get' action='rssview.rb'><div>
   URI: <input size="60" name="uri" value="<%=SLASHDOT%>">
   <input type="submit" value="OK">
</div></form>
<hr>
% each_channel do |title, uri, items|
     <h2><a href="http://ll.jus.or.jp/lls2003/document/&lt;%=uri%&gt;"><%=title%></a></h2>
     <ul>
%    each_item( items ) do |title, uri|
        <li><a href="http://ll.jus.or.jp/lls2003/document/&lt;%=uri%&gt;"><%=title%></a></li>
%    end
     </ul>
% end
</body>
</html>
