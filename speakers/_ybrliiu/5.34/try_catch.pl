use Test::More;
use feature qw( try say );
no warnings 'experimental::try';

try {
  die 'hogehoge';
}
catch ($e) {
  like $e, qr/hogehoge/;
}

my $val = do {
  try {
    'try';
  }
  catch ($e) {
    ...
  }
};
is $val, 'try';

$val = do {
  try {
    die;
  }
  catch ($e) {
    'catch';
  }
};
is $val, 'catch';

done_testing;
