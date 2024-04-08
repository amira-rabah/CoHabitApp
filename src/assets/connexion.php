<?php
// Informations de connexion à la base de données
$host = 'localhost';
$dbname = 'cohabit';
$username = 'root';
$password = '';

// Tentative de connexion à la base de données
try {
    $connexion = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Erreur de connexion à la base de données : ' . $e->getMessage();
}
