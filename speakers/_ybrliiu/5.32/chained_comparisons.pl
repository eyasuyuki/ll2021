use Test::More;
use strict;
use warnings;

{
  my ($x, $y, $z) = (0, 1, 2);
  ok( ($x < $y && $y <= $z) == ($x < $y <= $z) );
}

{
  my ($x, $y, $z) = (1, 1, 1);
  ok( ($x == $y && $y == $z) == ($x == $y == $z) );
}

done_testing;
