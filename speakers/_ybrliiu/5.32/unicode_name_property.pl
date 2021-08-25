use Test::More;
use strict;
use warnings;

my $name = "NINJA";
# like '🥷', qr/\N{$name}/; # Unknown charname '$name'
like '🥷', qr/\p{name=$name}/; # \p{name=NINJA} として解釈される

done_testing;
