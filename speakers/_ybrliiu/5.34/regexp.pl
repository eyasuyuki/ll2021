use Test::More;

like 'abbbbc', qr/b{,3}/;
like 'abbbc', qr/b{,3}/;
like 'ac', qr/b{,3}/;

done_testing;
