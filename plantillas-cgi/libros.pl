#!"C:\xampp\perl\bin\perl.exe"
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

my $cgi = CGI->new;
my $id  = $cgi->param('id');

my $dbh = DBI->connect( "DBI:mysql:database=$dbName;host=$dbHost",
    $dbUser, $dbPass, { RaiseError => 1, AutoCommit => 1 } );

my $sth = $dbh->prepare("SELECT * FROM $dbTable WHERE id = ?");
$sth->execute($id);

my $resultado = $sth->fetchrow_hashref;

print $cgi->header('application/json');
print $cgi->start_json;
print $cgi->json($resultado);
print $cgi->end_json;

$dbh->disconnect;
