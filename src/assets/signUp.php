<?php



require_once("connexion.php");


header("Access-Control-Allow-Origin: http://localhost:4200");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");


function email_exists($email, $connexion)
{

    $email_select_query = "SELECT ID_USER FROM `USER` WHERE EMAIL = :email";

    $statment_email_select_query = $connexion->prepare($email_select_query);
    $statment_email_select_query->bindParam(':email', $email);
    $statment_email_select_query->execute();
    $row_count = $statment_email_select_query->rowCount();
    if ($row_count != 0) {
        return true;
    } else {
        return false;
    }
}

function username_exists($username, $connexion)
{
    $username_select_query = "SELECT ID_ACCOUNT FROM ACCOUNT WHERE USERNAME= :username";

    $statment_username_select_query = $connexion->prepare($username_select_query);
    $statment_username_select_query->bindParam(':username', $username);
    $statment_username_select_query->execute();
    $row_count = $statment_username_select_query->rowCount();
    if ($row_count != 0) {
        return true;
    } else {
        return false;
    }
}




function insert_user($data, $connexion)
{
    try {
        $connexion->beginTransaction();
        $insert_user_query = "INSERT INTO USER (FIRST_NAME, LAST_NAME, EMAIL, PHONE, DATE_OF_BIRTH, GENDER, MANAGER) VALUES (:first_name, :last_name, :email, :phone, :dob, :gender, :manager)";
        $stmt = $connexion->prepare($insert_user_query);
        $stmt->bindParam(':first_name', $data['FIRST_NAME']);
        $stmt->bindParam(':last_name', $data['LAST_NAME']);
        $stmt->bindParam(':email', $data['EMAIL']);
        $stmt->bindParam(':phone', $data['PHONE']);
        $stmt->bindParam(':dob', $data['DATE_OF_BIRTH']);
        $stmt->bindParam(':gender', $data['GENDER']);
        $stmt->bindParam(':manager',  $data['ADMIN']);

        $stmt->execute();

        $user_id = $connexion->lastInsertId();
        $insert_account_query = "INSERT INTO ACCOUNT (USERNAME, PWD, ID_USER) VALUES (:username, :pwd, :user_id)";
        $stmt = $connexion->prepare($insert_account_query);
        $stmt->bindParam(':username',  $data['USERNAME']);
        $stmt->bindParam(':pwd', $data['PWD']);
        $stmt->bindParam(':user_id', $user_id);
        $stmt->execute();

        $connexion->commit();
        return true;
    } catch (Exception $e) {
        echo $e->getMessage();

        return false;
    }
}

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (email_exists($data['EMAIL'], $connexion)) {

        echo json_encode([":error" => "Email is already taken"]);
        exit;
    }

    if (username_exists($data['USERNAME'], $connexion)) {

        echo json_encode([":error" => "Username is already taken"]);
        exit;
    }

    if (strlen($data['PWD']) < 8) {

        echo json_encode([":error" => "Password must be at least 8 characters"]);
        exit;
    }

    if ($data['PWD'] !== $data['CONFIRM_PWD']) {

        echo json_encode([":error" => "Passwords do not match"]);
        exit;
    }

    if (insert_user($data, $connexion)) {
        echo json_encode([":success" => "User registered successfully"]);
    } else {

        echo json_encode([":error" => "Failed to register user"]);
    }
}
