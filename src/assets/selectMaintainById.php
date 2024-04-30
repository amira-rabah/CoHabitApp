<?php
session_start();

require_once("connexion.php");

if (isset($_GET['maintain_id'])) {
    $select_query = "SELECT ID_MAINTAIN, MAINTAIN_NAME, DESCRIPTION, FINISHED, COST, MAINTAIN_DATE, ID_USER
                     FROM MAINTAIN 
                     WHERE ID_MAINTAIN = :id_maintain";
    $statement = $connexion->prepare($select_query);
    $statement->bindParam(':id_maintain', $_GET['maintain_id']);
    $statement->execute();

    if ($statement) {
        $response = $statement->fetch(PDO::FETCH_ASSOC);
    } else {
        $response = array("error" => "Error in fetching data.");
    }

    header('Content-Type: application/json');
    echo json_encode($response);
} 