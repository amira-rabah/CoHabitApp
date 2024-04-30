<?php
session_start();

require_once("connexion.php");

if (isset($_GET['bill_id'])) {
    $select_query = "SELECT ID_BILL, BILL_NUM, DESCRIPTION, AMOUNT, DEADLINE, PAYED, ID_TYPE, ID_TYPE_BILL, BILL_TYPE_NAME 
    FROM BILL, TYPEOFBILL
    WHERE ID_TYPE_BILL = ID_TYPE AND ID_BILL = :id_bill";
    $statement = $connexion->prepare($select_query);
    $statement->bindParam(':id_bill', $_GET['bill_id']);
    $statement->execute();

    if ($statement) {
        $response = $statement->fetch(PDO::FETCH_ASSOC);
    } else {
        $response = array("error" => "Error in fetching data.");
    }

    header('Content-Type: application/json');
    echo json_encode($response);
}
