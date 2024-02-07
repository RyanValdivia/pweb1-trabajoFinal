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

# Parámetros recibidos por GET
my $cgi   = CGI->new;
my $id    = $cgi->param('id');
my $campo = $cgi->param('campo');
my $valor = $cgi->param('valor');

my $dbh = DBI->connect( "DBI:mysql:database=$dbName;host=$dbHost;port=3306",
    $dbUser, $dbPass )
  or die "No se pudo conectar $DBI::errstr";

my $sth = $dbh->prepare("UPDATE $dbTable SET $campo = ? WHERE id = ?");
$sth->execute( $valor, $id );

print $cgi->header('application/json');
print '{"mensaje": "Datos actualizados correctamente"}';
$dbh->disconnect;
