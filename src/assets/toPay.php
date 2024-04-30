<?php
header("Access-Control-Allow-Origin: *");

try {    
    $connexion = new PDO ("mysql:host=localhost;dbname=CoHabit", "root", "");
} catch(Exception $e) {
    echo $e->getMessage();
}

$id_user = $_GET['id_user']; 

$req = "SELECT ID_SPACE FROM user WHERE ID_USER = $id_user";
$res = $connexion->query($req);
$row = $res->fetch(PDO::FETCH_ASSOC);
$current_space = $row["ID_SPACE"];

$sql_users_product = "
    SELECT p.ID_USER 
    FROM product p
    INNER JOIN user u ON p.ID_USER = u.ID_USER
    WHERE p.ID_USER <> $id_user AND u.ID_SPACE = $current_space
    GROUP BY p.ID_USER
";


$sql_users_bill = "
    SELECT b.ID_USER 
    FROM bill b
    INNER JOIN user u ON b.ID_USER = u.ID_USER
    WHERE b.ID_USER <> $id_user AND u.ID_SPACE = $current_space
    GROUP BY b.ID_USER
";


$sql_users_maintain = "
    SELECT m.ID_USER 
    FROM maintain m
    INNER JOIN user u ON m.ID_USER = u.ID_USER
    WHERE m.ID_USER <> $id_user AND u.ID_SPACE = $current_space
    GROUP BY m.ID_USER
";

$req = "($sql_users_product) UNION ($sql_users_bill) UNION ($sql_users_maintain)";

$users = $connexion->query($req);


if ($users->rowCount() > 0) {
    $user_count = $users->rowCount();
    $results = array();
    while($row_user = $users->fetch()) {
        $id_other_user = $row_user["ID_USER"];

        $sql_user_info = "SELECT FIRST_NAME, LAST_NAME FROM user WHERE ID_USER = $id_other_user";
        $result_user_info = $connexion->query($sql_user_info);
        $row_user_info = $result_user_info->fetch(PDO::FETCH_ASSOC);
        $user_name = $row_user_info["FIRST_NAME"] . " " . $row_user_info["LAST_NAME"];
        
        // Calculer le montant à payer pour cet utilisateur
        $total = 0;

        // Calculer le montant dû pour les produits achetés par cet utilisateur
        $req = "SELECT SUM(PRICE) AS total_amount FROM product WHERE ID_USER = $id_other_user AND PERSONAL_USE = 'false'";
        $res = $connexion->query($req);
        $row = $res->fetch(PDO::FETCH_ASSOC);
        $total += $row["total_amount"];

        // Calculer le montant dû pour les factures payées par cet utilisateur
        $req = "SELECT SUM(AMOUNT) AS total_amount FROM bill WHERE ID_USER = $id_other_user AND PAYED = 1";
        $res = $connexion->query($req);
        $row = $res->fetch(PDO::FETCH_ASSOC);
        $total += $row["total_amount"];

        // Calculer le montant dû pour les factures payées par cet utilisateur
        $req = "SELECT SUM(COST) AS total_amount FROM maintain WHERE ID_USER = $id_other_user ";
        $res = $connexion->query($req);
        $row = $res->fetch(PDO::FETCH_ASSOC);
        $total += $row["total_amount"];

        $total = $total / ($user_count+1);
        $results[] = array(
            "user_id" => $user_name,
            "total_amount_to_pay" => $total
        );
    }
    echo json_encode($results);
} else {
    echo json_encode(array("message" => "No Payement for now"));
}
?>
