#!/usr/bin/perl
use strict;
use warnings;
use CGI;
use DBI;
use utf8;
use JSON;
use Encode qw(encode_utf8);

my $dbName  = "biblioteca";
my $dbUser  = "manzana";
my $dbPass  = "1604";
my $dbHost  = "localhost";
my $dbTable = "usuarios";

my $cgi = CGI->new;
my $id  = $cgi->param('id');

my $dbh =
  DBI->connect( "DBI:mysql:database=$dbName;host=$dbHost", $dbUser, $dbPass );

my $sth = $dbh->prepare("SELECT * FROM $dbTable WHERE id = ?");
$sth->execute($id);

my $resultado = $sth->fetchrow_hashref;

print $cgi->header('application/json');
utf8::decode($_) foreach values %$resultado;
my $codificado = encode_json($resultado);

print $codificado;

$dbh->disconnect;
