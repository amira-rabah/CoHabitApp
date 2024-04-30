<?php

session_start();
require_once("connexion.php");

// to simplify the work we set the id of the current user
$id_user = 1;


$select_id_space = "SELECT ID_SPACE FROM `USER` WHERE ID_USER = :id_user";
$stmt = $connexion->prepare($select_id_space);
$stmt->bindParam(':id_user', $id_user);
$stmt->execute();
$id_space_result = $stmt->fetch(PDO::FETCH_ASSOC);

$id_space = $_GET['idSpace'];


$sql_request = "SELECT ID_BILL, BILL_NUM, DESCRIPTION, AMOUNT, DEADLINE, PAYED, ID_TYPE, ID_TYPE_BILL, BILL_TYPE_NAME 
                    FROM BILL, TYPEOFBILL
                    WHERE ID_TYPE_BILL = ID_TYPE AND ID_USER IN (SELECT ID_USER FROM `USER` WHERE ID_SPACE = :id_space)";
$statement = $connexion->prepare($sql_request);
$statement->bindParam(':id_space', $id_space);
$statement->execute();
$result = $statement->fetchAll(PDO::FETCH_ASSOC);

header('Content-type:application/json');
echo json_encode($result);


?>