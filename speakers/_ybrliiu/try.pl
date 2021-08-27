use warnings;
use feature 'try';
no warnings 'experimental::try';
try {
  die 'Oops!';
}
catch ($e) {
  warn $e;
}
