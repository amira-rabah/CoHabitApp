<?php
session_start();
require_once("connexion.php");


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: PUT , POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER["REQUEST_METHOD"] === "PUT") {

    $data = json_decode(file_get_contents("php://input"), true);

    // Check if all required fields are present in the JSON data
    if (isset($data['MAINTAIN_NAME'], $data['DESCRIPTION'], $data['FINISHED'], $data['COST'])) {

        $update_query = $connexion->prepare("UPDATE MAINTAIN
            SET MAINTAIN_NAME = :maintain_name, DESCRIPTION=:description, FINISHED=:finished, COST=:cost 
            WHERE ID_MAINTAIN=:id_maintain");

        $update_query->bindParam(':maintain_name', $data['MAINTAIN_NAME']);
        $update_query->bindParam(':description', $data['DESCRIPTION']);
        $update_query->bindParam(':finished', $data['FINISHED']);
        $update_query->bindParam(':cost', $data['COST']);
        $update_query->bindParam(':id_maintain', $data['ID_MAINTAIN']);

        if ($update_query->execute()) {
            $response = array("message" => "updated successfully.");
            http_response_code(201); // OK
        } else {
            $response = array("error" => "Failed to update data.");
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
