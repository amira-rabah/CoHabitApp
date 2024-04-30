


<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

try {
    $connexion = new PDO("mysql:host=localhost;dbname=CoHabit", "root", "");
} catch (Exception $e) {
    echo $e->getMessage();
}
if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Content-Type: application/json");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {


    $data = json_decode(file_get_contents("php://input"), true); //hedhi tejbed data

    //hedhi bch net2akdo eli l object mtena m3ebi
    if (isset($data['PRODUCT_NAME'], $data['PRICE'], $data['ID_TYPE'], $data['PERSONAL_USE'], $data['qte'], $data['ID_USER'])) {

        $req = $connexion->prepare("
        INSERT INTO product(PRODUCT_NAME, PRICE, PERSONAL_USE, ID_TYPE,qte,ID_USER,date) values(:name, :price, :use, :type,:qte,:idUser,sysdate())
        ");

        //t'affecti kol valeur le champ
        $req->bindParam(':name', $data['PRODUCT_NAME']);
        $req->bindParam(':price', $data['PRICE']);
        $req->bindParam(':use', $data['PERSONAL_USE']);
        $req->bindParam(':type', $data['ID_TYPE']);
        $req->bindParam(':qte', $data['qte']);
        $req->bindParam(':idUser', $data['ID_USER']);

        if ($req->execute()) {
            $response = array("message" => "Added successfully.");
            http_response_code(201); // Created
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

echo json_encode($response);
?>
