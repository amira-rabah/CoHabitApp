<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

try {
    $connexion = new PDO("mysql:host=localhost;dbname=CoHabit", "root", "");
} catch (Exception $e) {
    echo $e->getMessage();
}
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Methods: DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Content-Type: application/json");
    exit;
}
if ($_SERVER["REQUEST_METHOD"] == "DELETE") {

    if (isset($_GET['id'])) {
        $id  = $_GET['id'];

        $req = "DELETE FROM product WHERE ID_PRODUCT = $id";

        $statement = $connexion->prepare($req);

        //$statement->bindParam(':id', $_GET['id']);

        if ($statement->execute()) {
            echo json_encode(["message" => "Product deleted successfully."]);
        } else {
            echo json_encode(["error" => "Failed to delete product."]);
        }
    } else {
        echo json_encode(["error" =>"veuillez saisir l'id svp"]);
    }
}else {
    // Return error message for invalid request method
    echo json_encode(["error" => "Invalid request method. Only DELETE method is allowed."]);
}


?>