<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

try {
    $connexion = new PDO("mysql:host=localhost;dbname=CoHabit", "root", "");
} catch (Exception $e) {
    echo $e->getMessage();
}

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Methods: PUT, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Content-Type: application/json");
    exit;
}
if ($_SERVER["REQUEST_METHOD"] == "PUT") {

    $data = json_decode(file_get_contents("php://input"), true);

    $productId = $data['ID_PRODUCT'];
    $productName = $data['PRODUCT_NAME'];
    $productPrice = $data['PRICE'];
    $personalUse = $data['PERSONAL_USE'];
    $type = $data['ID_TYPE'];
    $qte = $data['qte'];
    $firstName = $data['FIRST_NAME'];
    $lastName = $data['LAST_NAME'];
    $date = $data['date'];

    // Perform the update query
    $req = "UPDATE product SET PRODUCT_NAME='$productName', PRICE='$productPrice',PERSONAL_USE='$personalUse',ID_TYPE='$type',qte='$qte' WHERE ID_PRODUCT=$productId";

    // Execute the query
    $result = $connexion->query($req);

    // Check for errors or success
    if ($result) {
        echo json_encode(array("message" => "Product updated successfully"));
    } else {
        echo json_encode(array("message" => "Error updating product"));
    }
}else {
    // Return error message for invalid request method
    echo json_encode(["error" => "Invalid request method. Only UPDATE method is allowed."]);
}


?>