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

## �|�[�����O���󂯂邽�߂̐ݒ�
#
$poll = IO::Socket::INET->new(
  Proto     => 'tcp',
  LocalPort => $local_tcp_port,
  Listen    => SOMAXCONN,
  Reuse     => 1
) or die "can't setup tcp server";
$sel_r->add($poll);

## ����������m�邽�߂̐ݒ�
#
$status = IO::Socket::INET->new(
  Proto     => 'udp',
  LocalPort => $local_udp_port,
  Reuse     => 1
) or die "can't setup udp server";
$sel_r->add($status);

## �g���Ă���|�[�g�ԍ���ʒm���邽�߂̐ݒ�
#
notice();

while(my @ready = IO::Select::select($sel_r,$sel_w,undef)){
  ## ����񂯂�T�[�o����̃A�N�Z�X
  #
  if($ready[0]){
    for my $fh (@{$ready[0]}){
      ## ����񂯂�T�[�o����TCP�ŃA�N�Z�X
      #
      if($fh == $poll){
        my $new = $poll->accept;
        $sel_r->add($new);
      ## ����񂯂�T�[�o����UDP�ŃA�N�Z�X
      #
      }elsif($fh == $status){
        $_ = <$fh>;
        if (/100/){
          notice();
          print "����\n";
        }elsif(/110/){
          print "�܂��܂�\n";
        }elsif(/120/){
          notice();
          print "������\n";
        }elsif(/130/){
          print "������\n";
        }
      ## ����񂯂�T�[�o��'CALL'���s
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
  ## ����񂯂�T�[�o�ւ̃A�N�Z�X
  #
  if ($ready[1]){
    for my $fh (@{$ready[1]}){
      ## IP�A�h���X�ƃ|�[�g�ԍ���ʒm
      #
      if($fh == $notify){
        ## ����񂯂�T�[�o�֓����郁�b�Z�[�W
        ## �{�Ԏ��ɂ�ip�A�h���X�łȂ��āCperl
        ## �Ƃ������O�𓊂���
        #
        my $message = 
#          $notify->sockhost . ':' . $local_tcp_port . "\r\n";
          'perl' . ':' . $local_tcp_port . "\r\n";
        print $notify $message;
        $sel_w->remove($fh);
        $fh->close;
      ## �z��O
      #
      }else{
        die "ouch!";
      }
    }
  }
}

## �g���Ă���|�[�g�ԍ���ʒm���邽�߂̐ݒ�
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
