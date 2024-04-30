<?php
session_start();
require_once("connexion.php");

header("Content-Type: application/json");


if ($_SERVER["REQUEST_METHOD"] == "GET") {

    $select_query="SELECT ID_TYPE_BILL , BILL_TYPE_NAME FROM TYPEOFBILL ";
    $statment = $connexion->query($select_query);
    $result = $statment->fetchAll(PDO::FETCH_ASSOC);
    // Check if all required fields are present in the JSON data
    if ($result==null) {
        $result = array("error" => "error");
    }
}
else{
    
    $response = array("error" => "method error");

}
echo (json_encode($result));