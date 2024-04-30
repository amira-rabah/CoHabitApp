<?php
session_start();

require_once("connexion.php");
header('Content-Type: application/json');

if (isset($_GET['id_maintain'])) {
    $delete_query = "DELETE FROM MAINTAIN WHERE ID_MAINTAIN = :id_maintain";
    $statement = $connexion->prepare($delete_query);
    $statement->bindParam(':id_maintain', $_GET['id_maintain']);

    if ($statement->execute()) {
        $response = ["response" => "A maintain has been deleted"];
        http_response_code(201); // deleted
    } else {
        $response = ["response" => "Error deleting record"];
        http_response_code(202); // error
    }
} else {
    $response = ["response" => " missing ID"];
    http_response_code(203); //missing id_maintain
}

echo json_encode($response);
