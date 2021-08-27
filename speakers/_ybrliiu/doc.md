# Perl

## Perl7でデフォルトでONにすることを提案されていた機能群

```perl
use utf8;
use strict;
use warnings;
use open qw(:std :utf8);
no feature qw(indirect);
use feature qw(signatures);
no warnings qw(experimental::signatures);
```

## try-catch

```perl:eval-if
eval {
  die 'Oops!';
};
if ($@) {
  warn $@;
}
```

```perl:try-catch
use experimental 'try';
try {
  die 'Oops!';
}
catch ($e) {
  warn $e;
}
```

## no bareword filehandles

```perl
no feature 'bareword_filehandles';
open FH, '<', 'tmp.txt'; # Bareword filehandle "FH" not allowed under 'no feature "bareword_filehandles"'
my @lines = <FH>;
close FH;
```

## no multidimensional

```perl
no feature 'multidimensional';
my %foo;
$foo{qw( a b )}; # Multidimensional hash lookup is disabled
# = $foo{join($;, 'a', 'b')}
```


## Object::Pad

```perl:コアの機能のみ
package Point;
use strict;
use warnings;
use Carp qw( croak );

sub new {
    my ($class, %args) = @_;
    for my $key (qw[ x y ]) {
        croak "Required parameter '$key' is missing" unless exists $args{$key};
    }
    return bless +{ x => $args{x}, y => $args{y} }, $class;
}

sub x { return shift->{x} }
sub y { return shift->{y} }

sub move {
    my ($self, $dx, $dy) = @_;
    $self->{x} += $dx;
    $self->{y} += $dy;
}

 my $point = Point->new(x => 1, y => 2);
 $point->move(2, 1);
```

```perl:Moose
package Point;
use Moose;

has x => (
    is => 'ro',
    required => 1,
);

has y => (
    is => 'ro',
    required => 1,
);

sub move {
    my ($self, $dx, $dy) = @_;
    $self->{x} += $dx;
    $self->{y} += $dy;
}

__PACKAGE__->meta->make_immutable;

 my $point = Point->new(x => 1, y => 2);
 $point->move(2, 1);
```

```perl:Object;;Pad
 use Object::Pad;
 
 class Point {
     has $x :param :reader;
     has $y :param :reader;
 
     method move($dx, $dy) {
         $x += $dx;
         $y += $dy;
     }
 }
 
 my $point = Point->new(x => 1, y => 2);
 $point->move(2, 1);
```


