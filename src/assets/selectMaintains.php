<?php

session_start();
require_once("connexion.php");

$sql_request="SELECT ID_MAINTAIN , MAINTAIN_NAME , MAINTAIN_DATE , DESCRIPTION , COST , FINISHED FROM MAINTAIN";
$statment=$connexion->query($sql_request);
$result = $statment->fetchAll(PDO::FETCH_ASSOC);

header('Content-type:application/json');
echo json_encode($result);

?>