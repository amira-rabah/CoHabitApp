<?php
session_start();
// Assuming that the id of the user is fetched from database upon successful authentication
//$_SESSION['user_id'] = $id_user;
//$select_req_admin_space = "SELECT SPACE_ID FROM `USER` WHERE ID_USER= " . $_SESSION . ['user_id'] . "";

require_once("connexion.php");
//$statment_admin_space = $connexion->query($select_req_admin_space);
$statment_admin_space = 100;

if (isset($_GET['username'])) {
    $username = $_GET['username'];
    $select_req = "SELECT `USER`.IMAGE, ACCOUNT.USERNAME, `USER`.FIRST_NAME, `USER`.LAST_NAME, `USER`.ID_USER 
                FROM ACCOUNT, `USER` 
                WHERE `USER`.ID_USER = ACCOUNT.ID_USER 
                AND ACCOUNT.USERNAME= :username";
    $statement = $connexion->prepare($select_req);
    $statement->bindParam(':username', $username);
    $statement->execute();

    if ($statement) {
        
        $row = $statement->fetch(PDO::FETCH_ASSOC);
        if ($row != null) {
            $response['member_to_use'] = $row;

                
            $check_req = "SELECT ID_SPACE FROM `USER` , ACCOUNT WHERE `USER`.ID_USER = ACCOUNT.ID_USER AND USERNAME=:username";
            $check_statement = $connexion->prepare($check_req);
            $check_statement->bindParam(':username', $username);
            $check_statement->execute();

            if($check_statement){
                    $check_row = $check_statement->fetch(PDO::FETCH_ASSOC);
                    $id_space = $check_row['ID_SPACE'];

                    if ($id_space === null) {

                        $update_req = "UPDATE `USER` SET ID_SPACE=$statment_admin_space";
                        $connexion->query($update_req);

                        $succ=array("status"=>"success");
                        $response['result'] = array("status" => "success");
                        
                        /* echo `
                                    `; */
                    } 
                    header('Content-type:application/json');
                    echo json_encode($response);
            }else{
                echo "error";
            } 
        } else {
            echo "<p> no user found </p>";
        }
    } else {
        echo "<p> error </p>";
    }
} else {
    echo ("write the username please ");
}
