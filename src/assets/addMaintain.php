<?php
session_start();
require_once("connexion.php");


header("Access-Control-Allow-Origin: http://localhost:4200");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assume the user ID is 1 for simplicity
    //$ID_USER = 1;

    // Get JSON data from the request body
    //true pour retourner unn dictionnaire
    $data = json_decode(file_get_contents("php://input"), true);

    // Check if all required fields are present in the JSON data
    if (isset($data['MAINTAIN_NAME'], $data['DESCRIPTION'], $data['FINISHED'], $data['COST'])) {

        $insert_query = $connexion->prepare("INSERT INTO MAINTAIN
            (MAINTAIN_NAME, DESCRIPTION, FINISHED, COST, MAINTAIN_DATE, ID_USER) 
            VALUES (:maintain_name, :description, :finished, :cost, sysdate(), :id_user)");

        $insert_query->bindParam(':maintain_name', $data['MAINTAIN_NAME']);
        $insert_query->bindParam(':description', $data['DESCRIPTION']);
        $insert_query->bindParam(':finished', $data['FINISHED']);
        $insert_query->bindParam(':cost', $data['COST']);
        $insert_query->bindParam(':id_user', $data['ID_USER']);

        if ($insert_query->execute()) {
            $response = array("message" => "Added successfully.");
            http_response_code(201); // OK
        } else {
            $response = array("error" => "Failed to add data.");
            http_response_code(202); // Internal Server Error
        }
    } else {
        $response = array("error" => "Missing required fields.");
        http_response_code(203); // Bad Request
    }
} else {
    $response = array("error" => "Invalid request method.");
    http_response_code(204); // Method Not Allowed
}

echo (json_encode($response));
