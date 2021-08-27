use Test::More;
use strict;
use warnings;
use feature qw( say isa );
no warnings 'experimental::isa';

package A {
  sub new {
    my ($class, %args) = @_;
    return bless \%args, $class;
  }
}

package B {
  use parent -norequire, 'A';
}

my $obj = A->new;
ok $obj isa A;
ok not $obj isa B;

$obj = B->new;
ok $obj isa A;
ok $obj isa B;

# isaメソッドの問題

## UNIVERSAL::isa はパッケージ文字列からも使えてしまう
ok 'A'->isa('A');

## 次のような場合で例外が発生する
eval { undef->isa('A') };
like $@, qr/Can't call method "isa" on an undefined value/;

eval { ''->isa('A') };
like $@, qr/Can't call method "isa" without a package or object reference/;

## workaround
use Scalar::Util qw( blessed );
ok blessed($obj) && $obj->isa('A');

ok UNIVERSAL::isa($obj, 'A');

done_testing;
