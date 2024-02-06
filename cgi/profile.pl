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

my $cgi = CGI->new();

my $id  = $cgi->param('id');
my $dbh = DBI->connect( "DBI:mysql:database=$dbName;host=$dbHost;port=3306",
    $dbUser, $dbPass )
  or die "No se pudo conectar $DBI::errstr";
my $sth = $dbh->prepare("SELECT * FROM $dbTable WHERE id = ?");
$sth->execute($id);

my $result      = $sth->fetchall_arrayref( {} );
my $json_result = to_json($result);

print $cgi->header('application/json');
print $json_result;

$dbh->disconnect;
