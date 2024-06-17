<?php
session_start();
require_once("connexion.php");


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: PUT , POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER["REQUEST_METHOD"] === "PUT") {

    $data = json_decode(file_get_contents("php://input"), true);


    if (isset($data['BILL_NUM'], $data['DESCRIPTION'], $data['AMOUNT'], $data['DEADLINE'], $data['PAYED'], $data['ID_TYPE'])) {

        $update_query = $connexion->prepare("UPDATE  BILL
        SET DESCRIPTION=:description, AMOUNT=:amount, DEADLINE=:deadline, PAYED=:payed, ID_TYPE=:id_type
        WHERE BILL_NUM=:bill_num");

        $update_query->bindParam(':bill_num', $data['BILL_NUM']);
        $update_query->bindParam(':description', $data['DESCRIPTION']);
        $update_query->bindParam(':amount', $data['AMOUNT']);
        $update_query->bindParam(':deadline', $data['DEADLINE']);
        $update_query->bindParam(':payed', $data['PAYED']);
        $update_query->bindParam(':id_type', $data['ID_TYPE']);

        if ($update_query->execute()) {
            $response = array("message" => "updated successfully.");
        } else {
            $response = array("error" => "Failed to update data.");
        }
    } else {
        $response = array("error" => "Missing required fields.");
    }
} else {
    $response = array("error" => "Invalid request method.");
}

echo (json_encode($response));
