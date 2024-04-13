<?php
session_start();
require_once("connexion.php");


header("Access-Control-Allow-Origin: http://localhost:4200");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Assume the user ID is 1 for simplicity
    $ID_USER = 1;

    // Get JSON data from the request body
    $data = json_decode(file_get_contents("php://input"), true);

    // Check if all required fields are present in the JSON data
    if (isset($data['MAINTAIN_NAME'], $data['DESCRIPTION'], $data['FINISHED'], $data['COST'])) {
        
        $insert_query = $connexion->prepare("INSERT INTO MAINTAIN
            (MAINTAIN_NAME, DESCRIPTION, FINISHED, COST, MAINTAIN_DATE, ID_USER) 
            VALUES (?, ?, ?, ?, sysdate(), ?)");

        $insert_query->bindParam("ssidi", $data['MAINTAIN_NAME'], $data['DESCRIPTION'], $data['FINISHED'], $data['COST'], $ID_USER);

        if ($insert_query->execute()) {
            $response = array("message" => "Added successfully.");
            http_response_code(200); // OK
        } else {
            $response = array("error" => "Failed to add data.");
            http_response_code(500); // Internal Server Error
        }
    } else {
        $response = array("error" => "Missing required fields.");
        http_response_code(400); // Bad Request
    }
} else {
    $response = array("error" => "Invalid request method.");
    http_response_code(405); // Method Not Allowed
}

echo(json_encode($response));
?>
