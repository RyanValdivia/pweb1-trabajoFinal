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

my $user  = $cgi->param('user');
my $email = $cgi->param('email');
my $pass  = $cgi->param('password');

# Correcciones en la conexión a la base de datos
my $dbh = DBI->connect( "DBI:mysql:database=$dbName;host=$dbHost;port=3306",
    $dbUser, $dbPass )
  or die "No se pudo conectar $DBI::errstr";

utf8::decode($user);
utf8::decode($pass);
utf8::decode($email);

# Verificar si ya existe un usuario con el mismo nombre o correo
my $check_sql = "SELECT COUNT(*) FROM $dbTable WHERE username = ? OR email = ?";
my $check_sth = $dbh->prepare($check_sql);
$check_sth->execute( $user, $email ) or die $check_sth->errstr;

my ($existing_users) = $check_sth->fetchrow_array;

if ( $existing_users > 0 ) {

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
    my $sql =
      "INSERT INTO $dbTable (username, email, password) VALUES (?, ?, ?)";
    my $sth = $dbh->prepare($sql);
    $sth->execute( $user, $email, $pass ) or die $sth->errstr;
    my $response      = { success => 1, message => "Registro exitoso" };
    my $json_response = to_json($response);
    print $cgi->header('application/json');
    print $json_response;
}

# Correcciones en la desconexión de la base de datos
$dbh->disconnect;
