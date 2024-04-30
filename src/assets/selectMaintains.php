<?php

require_once("connexion.php");
if (isset($_GET['idSpace'])){
$idSpace= $_GET['idSpace'];
$sql_request="SELECT ID_MAINTAIN , MAINTAIN_NAME , MAINTAIN_DATE , DESCRIPTION , COST , FINISHED FROM MAINTAIN WHERE ID_USER IN (SELECT ID_USER FROM `USER` WHERE ID_SPACE=$idSpace)";
$statment=$connexion->query($sql_request);
$result = $statment->fetchAll(PDO::FETCH_ASSOC);

header('Content-type:application/json');
echo json_encode($result);
}
?>