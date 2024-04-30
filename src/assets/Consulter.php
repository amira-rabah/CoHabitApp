<?php
header("Access-Control-Allow-Origin: *");

/* try{    
    $connexion =new PDO ("mysql:host=localhost;dbname=cohabit","root","");
}catch(Exception $e){
    echo $e->getMessage();
}
 */
require_once("connexion.php");

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        if (isset($_GET['id'])) {
            $idS = $_GET['id'];

            $req = "SELECT FIRST_NAME, LAST_NAME, EMAIL, PHONE, DATE_OF_BIRTH, GENDER, IMAGE FROM `USER` WHERE ID_SPACE = $idS";

            $statement = $connexion->query($req);

            $resultat = $statement->fetchAll(PDO::FETCH_ASSOC);



            if ($resultat == null) {

                $resultat = array("error" => "no selected  data.");
            }/*  else {

                $json = $resultat;
            } */
        } else {

            $resultat = array("error" => "missing data.");
        }
        header('Content-type: application/json');
        $json = json_encode($resultat);
        echo ($json);
        break;
}
