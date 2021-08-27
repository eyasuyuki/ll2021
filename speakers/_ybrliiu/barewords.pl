no feature 'bareword_filehandles';
open FH, '<', 'tmp.txt';
my @lines = <FH>;
close FH;

