#!perl
# jyanken.pl
#  for ll-saturday at 030809
#   by keiichi@tokyo.pm.org
#
use IO::Socket;
use IO::Select;
use strict;

sub notice();

my $remote        = '172.31.1.3';
my $remote_port    = 2003;
my $local_udp_port = 2004;
my $local_tcp_port = 2004;
my @hand           = ("PAPER\r\n","SCISSORS\r\n","ROCK\r\n");
my $sel_r          = new IO::Select;
my $sel_w          = new IO::Select;
my ($poll,$notify,$status);

## ポーリングを受けるための設定
#
$poll = IO::Socket::INET->new(
  Proto     => 'tcp',
  LocalPort => $local_tcp_port,
  Listen    => SOMAXCONN,
  Reuse     => 1
) or die "can't setup tcp server";
$sel_r->add($poll);

## 勝ち負けを知るための設定
#
$status = IO::Socket::INET->new(
  Proto     => 'udp',
  LocalPort => $local_udp_port,
  Reuse     => 1
) or die "can't setup udp server";
$sel_r->add($status);

## 使っているポート番号を通知するための設定
#
notice();

while(my @ready = IO::Select::select($sel_r,$sel_w,undef)){
  ## じゃんけんサーバからのアクセス
  #
  if($ready[0]){
    for my $fh (@{$ready[0]}){
      ## じゃんけんサーバからTCPでアクセス
      #
      if($fh == $poll){
        my $new = $poll->accept;
        $sel_r->add($new);
      ## じゃんけんサーバからUDPでアクセス
      #
      }elsif($fh == $status){
        $_ = <$fh>;
        if (/100/){
          notice();
          print "決定\n";
        }elsif(/110/){
          print "まだまだ\n";
        }elsif(/120/){
          notice();
          print "負けた\n";
        }elsif(/130/){
          print "あいこ\n";
        }
      ## じゃんけんサーバが'CALL'発行
      #
      }else{
        $_ = <$fh>;
        if (/CALL/){
          my $hand = $hand[int(rand(3))];
          print $fh $hand;
          print $hand;
        }
        $sel_r->remove($fh);
        $fh->close;
      }
    }
  }
  ## じゃんけんサーバへのアクセス
  #
  if ($ready[1]){
    for my $fh (@{$ready[1]}){
      ## IPアドレスとポート番号を通知
      #
      if($fh == $notify){
        ## じゃんけんサーバへ投げるメッセージ
        ## 本番時にはipアドレスでなくて，perl
        ## という名前を投げた
        #
        my $message = 
#          $notify->sockhost . ':' . $local_tcp_port . "\r\n";
          'perl' . ':' . $local_tcp_port . "\r\n";
        print $notify $message;
        $sel_w->remove($fh);
        $fh->close;
      ## 想定外
      #
      }else{
        die "ouch!";
      }
    }
  }
}

## 使っているポート番号を通知するための設定
#
sub notice()
{
  $notify = IO::Socket::INET->new(
    Proto    => 'tcp',
    PeerAddr =>  $remote,
    PeerPort =>  $remote_port
  ) or die "can't connect to port $remote_port on $remote: $!";
  $sel_w->add($notify);
}
