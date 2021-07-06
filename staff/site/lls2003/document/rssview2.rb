#!/home/sho/bin/ruby18 -Ku
require 'cgi'
require 'net/http'
require 'rss/parser'
require 'rss/1.0'
require 'erb'
txt = Net::HTTP::get( URI::parse( 'http://slashdot.jp/slashdot.rdf' ) )
rss = RSS::Parser.parse( txt, false )
print CGI::new.header( 'charset' => 'UTF-8' )
print ERB::new( DATA.read, nil, '%' ).result( binding )
__END__
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>RSSViewer</title>
</head>
<body>
<h1>RSS-Viewer</h1>
<h2><a href="http://ll.jus.or.jp/lls2003/document/&lt;%=&#32;rss.channel.link&#32;%&gt;"><%= rss.channel.title %></a></h2>
<ul>
% rss.items.each do |item|
	<li><a href="http://ll.jus.or.jp/lls2003/document/&lt;%=&#32;item.link&#32;%&gt;"><%= item.title %></a></li>
% end
</ul>
</body>
</html>
