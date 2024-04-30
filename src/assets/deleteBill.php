<?php
session_start();

require_once("connexion.php");
header('Content-Type: application/json');

if (isset($_GET['id_bill'])) {
    $delete_query = "DELETE FROM BILL WHERE ID_BILL = :id_bill";
    $statement = $connexion->prepare($delete_query);
    $statement->bindParam(':id_bill', $_GET['id_bill']);

    if ($statement->execute()) {
        $response = ["response" => "A bill has been deleted"];
        http_response_code(201); // deleted
    } else {
        $response = ["response" => "Error deleting record"];
        http_response_code(202); // error
    }
} else {
    $response = ["response" => " missing ID"];
    http_response_code(203); //missing id_bill
}

echo json_encode($response);
