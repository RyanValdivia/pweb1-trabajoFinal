#!/usr/bin/perl

use strict;
use warnings;
use CGI;
use DBI;
use utf8;
use JSON;

my $dbName  = "biblioteca";
my $dbUser  = "root";
my $dbPass  = "";
my $dbHost  = "localhost";
my $dbTable = "libros";

my $cgi = CGI->new();

my $dbh = DBI->connect( "DBI:mysql:database=$dbName;host=$dbHost;port=3306",
    $dbUser, $dbPass )
  or die "No se pudo conectar $DBI::errstr";

my $title       = $cgi->param("title");
my $description = $cgi->param("desc");
my $author      = $cgi->param("author");
my $gendre      = $cgi->param("gendre");

my $check_sql = "SELECT COUNT(*) FROM $dbTable WHERE tiulo = ?";
my $check_sth = $dbh->prepare($check_sql);
$check_sth->execute($title) or die $check_sth->errstr;

my ($existing_books) = $check_sth->fetchrow_array;

if ( $existing_books > 0 ) {

    # Ya existe un usuario con el mismo nombre de usuario o correo
    my $response = {
        success => 0,
        message => "Ya existe un usuario con ese nombre de usuario o correo"
    };
    my $json_response = to_json($response);
    print $cgi->header('application/json');
    print $json_response;
    exit;

}
else {
    my $sql = "INSERT INTO $dbTable (titulo, autor) VALUES (?, ?, ?)";
    my $sth = $dbh->prepare($sql);
    $sth->execute() or die $sth->errstr;
    my $response      = { success => 1, message => "Registro exitoso" };
    my $json_response = to_json($response);
    print $cgi->header('application/json');
    print $json_response;
}
