#!/usr/bin/perl

use strict;
use warnings;
use CGI;
use DBI;
use utf8;
use JSON;

my $dbName  = "biblioteca";
my $dbUser  = "manzana";
my $dbPass  = "1604";
my $dbHost  = "localhost";
my $dbTable = "libros";

my $cgi = CGI->new();

my $dbh = DBI->connect( "DBI:mysql:database=$dbName;host=$dbHost;port=3306",
    $dbUser, $dbPass )
  or die "No se pudo conectar $DBI::errstr";

my $title       = $cgi->param("titulo");
my $author      = $cgi->param("autor");
my $gendre      = $cgi->param("genLiterario");
my $description = $cgi->param("descripcion");

my $directorio_destino = "/var/www/html/images-libros";
my $archivo            = $cgi->upload('portada');

my $sth = $dbh->prepare("SELECT * FROM $dbTable WHERE titulo = ?");
$sth->execute($title);
my $res = $sth->fetchrow_array();

$sth = $dbh->prepare("SELECT id FROM $dbTable ORDER BY id DESC LIMIT 1");
$sth->execute();
my $id = $sth->fetchrow_array();

my $nombre_archivo = "$id" . "_" . "$title" . ".jpg";

if ($archivo) {
    my $ruta_destino = "$directorio_destino/$nombre_archivo";
    open my $fh, '>', $ruta_destino or die "No se pudo abrir el archivo: $!";
    while ( my $bytes = $archivo->getline() ) {
        print $fh $bytes;
    }
    close $fh;
    my $response =
      { success => 1, message => "El archivo se ha subido exitosamente." };
    print $cgi->header( -type => 'application/json' );
    print encode_json($response);
}
else {
    my $response =
      { success => 0, message => "No se ha recibido ningún archivo." };
    print $cgi->header( -type => 'application/json' );
    print encode_json($response);
}

if ($res) {
    $sth = $dbh->prepare(
"UPDATE $dbTable SET autor =?, generoLiterario =?, descripcion =?, rutaDePortada = ? WHERE titulo =?"
    );
    $sth->execute( $author, $gendre, $description, $nombre_archivo, $title );

    my $response =
      { success => 1, message => "El libro se ha actualizado exitosamente." };
    print $cgi->header( -type => 'application/json' );
    print encode_json($response);

}
else {
    $sth = $dbh->prepare(
"INSERT INTO $dbTable (autor, generoLiterario, descripcion, rutaDePortada) VALUES (?, ?, ?, ?)"
    );
    $sth->execute( $author, $gendre, $description, $nombre_archivo );

    my $response =
      { success => 1, message => "El libro se ha subido exitosamente." };
    print $cgi->header( -type => 'application/json' );
    print encode_json($response);
}

