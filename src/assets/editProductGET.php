<?php
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 

try{    
    $connexion =new PDO ("mysql:host=localhost;dbname=CoHabit","root","");
}catch(Exception $e){
    echo $e->getMessage();
}

switch($_SERVER['REQUEST_METHOD'])
{
    case 'GET':
        if(isset($_GET['idProduct'])) {
            $idP = $_GET['idProduct'];

            $req = "SELECT ID_PRODUCT,PRODUCT_NAME,PRICE,PERSONAL_USE,date,qte,FIRST_NAME,LAST_NAME ,ID_TYPE
            from product p,user u
            where p.ID_USER = u.ID_USER and p.ID_PRODUCT = $idP";
            $statement = $connexion->query($req);
            
            $resultat = $statement->fetchAll(PDO::FETCH_ASSOC);
            
            header('Content-type: application/json');
            
            if ($resultat == null) {

                echo("erreur");

            } else {

                $json = json_encode($resultat);

                echo($json);
            }
        } else {
            
            echo("Veuillez envoyer l'id svp");
        }
        break;
}


?>