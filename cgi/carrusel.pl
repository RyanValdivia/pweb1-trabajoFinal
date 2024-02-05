#!/usr/bin/perl

use strict;
use DBI;
use utf8;
use JSON;
use warnings;
use Encode qw(encode_utf8);

my $dbName  = "biblioteca";
my $dbUser  = "manzana";
my $dbPass  = "1604";
my $dbHost  = "localhost";
my $dbTable = "usuarios";

my $dbh = DBI->connect( "DBI:mysql:database=$dbName;host=$dbHost;port=3306",
    $dbUser, $dbPass )
  or die "No se pudo conectar $DBI::errstr";

my $query = "SELECT rutaDePortada, descripcion FROM $dbTable";
my $sth   = $dbh->prepare($query);
$sth->execute() or die $sth->errstr;

my @libros;
while ( my $row = $sth->fetchrow_hashref ) {
    push @libros, $row;
}

my $json_data = to_json( \@libros, { utf8 => 1 } );

print "Content-Type: application/json\n\n";
print $json_data;

$dbh->disconnect;
