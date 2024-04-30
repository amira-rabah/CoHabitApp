<?php
session_start();
require_once("connexion.php");


header("Access-Control-Allow-Origin: http://localhost:4200");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    

    // Get JSON data from the request body
    //true pour retourner unn dictionnaire
    $data = json_decode(file_get_contents("php://input"), true);

    // Check if all required fields are present in the JSON data
    if (isset($data['BILL_NUM'], $data['DESCRIPTION'], $data['AMOUNT'], $data['DEADLINE'], $data['PAYED'], $data['ID_TYPE'])) {

        $insert_query = $connexion->prepare("INSERT INTO BILL
            (BILL_NUM, DESCRIPTION, AMOUNT, DEADLINE, PAYED, ID_TYPE,ID_USER) 
            VALUES (:bill_num, :description, :amount, :deadline, :payed, :id_type,:id_user)");

        $insert_query->bindParam(':bill_num', $data['BILL_NUM']);
        $insert_query->bindParam(':description', $data['DESCRIPTION']);
        $insert_query->bindParam(':amount', $data['AMOUNT']);
        $insert_query->bindParam(':deadline', $data['DEADLINE']);
        $insert_query->bindParam(':payed', $data['PAYED']);
        $insert_query->bindParam(':id_type', $data['ID_TYPE']);
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
