

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");

require 'vendor/autoload.php';
require_once 'connexion.php';


use \Firebase\JWT\JWT;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $username = $data['USERNAME'];
    $password = $data['PWD'];

    $select_query = $connexion->prepare("SELECT USERNAME ,PWD, ACCOUNT.ID_USER, MANAGER,ID_SPACE  FROM ACCOUNT , `USER` WHERE  USERNAME=:username AND `USER`.ID_USER=ACCOUNT.ID_USER");
    $select_query->bindParam(':username', $username);
    $select_query->execute();
    $user = $select_query->fetch(PDO::FETCH_OBJ);
    if ($user) {
        if ($user->PWD == $password) {
            $key = "00000000";
            $issuedAt = time();
            $expire = $issuedAt + 3600;
            $payload = array(
                'iat' => $issuedAt,
                'exp' => $expire,
                'username' => $user->USERNAME,
                'pwd' => $user->PWD,
                'userId' => $user->ID_USER,
                'manager' => $user->MANAGER,
                'idSpace' => $user->ID_SPACE
            );
            $jwt = JWT::encode($payload, $key, 'HS256');
            echo json_encode(
                array(
                    'message' => 'Successful login.',
                    'username' => $user->USERNAME,
                    'userId' => $user->ID_USER,
                    'pwd' => $user->PWD,
                    'manager' => $user->MANAGER,
                    'idSpace' => $user->ID_SPACE,
                    'token' => $jwt
                )
            );
        } else {
            $response = array("message" => "incorrect password");
            echo json_encode($response);
        }
    } else {
        $response = array("message" => "Invalid username and password");
        echo json_encode($response);
    }
} else {
    $response = array("message" => "Invalid request method.");
    echo json_encode($response);
}


?>