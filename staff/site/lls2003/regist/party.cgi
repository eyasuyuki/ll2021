#!/usr/bin/perl

#
#  $Id: party.cgi,v 1.1 2004/03/24 04:00:50 ryuchi Exp $
#
use strict;
use CGI;
use DBI;
use Template;
use Jcode;

use party;

my ($q, $kanji, $stage, $error, $count);

my $query = new CGI;
my $ll = ll_config->open($query, 'party', 100);
$kanji = $ll->{'kanji'};
$q->{$_} = html_esc(Jcode->new($query->param($_), $kanji)->h2z->euc)
    foreach($query->param());

$count = $ll->count();

$stage = '1';
$stage = '2' if ($q->{stage} eq 'post');
$stage = '3' if ($q->{stage} eq 'confirm');
$stage = '1' if ($q->{reedit});
$stage = '4' if ($count >= 86);
$stage = '0' if (not chk_date());

$stage = '4';

if ($stage eq '1') {
} elsif ($stage eq '2') {
    $error = $ll->check();
    $stage = '1' if (scalar @$error > 0);
    $q->{recpt} ||= html_esc(Jcode->new($query->param('name'), $kanji)->euc());
} elsif ($stage eq '3') {
    $error = $ll->regist();
    $ll->send_mail() if (scalar @$error == 0);
    $stage = '1' if (scalar @$error > 0);
} elsif ($stage eq '4') {
}

$ll->close();

my $template_name = sprintf "party_%s.txt", $stage;
my $template = Template->new({INCLUDE_PATH => 'templates'});
my $html;
$template->process(
    $template_name,
    {  
	query => $q,
	stage => $stage,
        error => $error,
        count => $count,
    }, \$html
) || print $template->error();

print Jcode->new($html, 'euc')->sjis();

# print "$_ => $ENV{$_}<br>\n" foreach(sort keys %ENV);

sub chk_date {

    my $today = sprintf "%02d%02d", (localtime())[4,3];
    $today += 0;
    $today = 901 if ($ENV{'SERVER_ADDR'} eq '219.165.126.202');
    return ($today > 603);
}

sub html_esc {

    my $line = shift;

    $line =~ s/&/&amp;/g;
    $line =~ s/</&lt;/g;
    $line =~ s/>/&gt;/g;
    $line =~ s/"/&quot;/g;

    $line;
}
