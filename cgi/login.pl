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
my $dbTable = "usuarios";

my $cgi = CGI->new();

my $user = $cgi->param('user');
my $pass = $cgi->param('password');

my $dbh = DBI->connect( "DBI:mysql:database=$dbName;host=$dbHost;port=3306",
    $dbUser, $dbPass )
  or die "No se pudo conectar $DBI::errstr";

utf8::decode($user);
utf8::decode($pass);

my $check_sql =
  "SELECT COUNT(*) FROM $dbTable WHERE username = ? AND password = ?";
my $check_sth = $dbh->prepare($check_sql);
$check_sth->execute( $user, $pass ) or die $check_sth->errstr;

my ($existing_users) = $check_sth->fetchrow_array;

if ( $existing_users > 0 ) {

    # Existe un usuario que coincida con el nombre de usuario y la contraseña
    my $response = {
        success => 1,
        message => "Inicio de sesion exitoso"
    };
    my $json_response = to_json($response);
    print $cgi->header('application/json');
    print $json_response;
    exit;
}
else {
    my $response = { success => 0, message => "Usuario o contraseña erróneos" };
    my $json_response = to_json($response);
    print $cgi->header('application/json');
    print $json_response;
}

#Desconexión de la base de datos
$dbh->disconnect;

