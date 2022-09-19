<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$server="localhost";
$username="root";
$password="";
$database="savecalc";

$dsn = "mysql:host=$server;dbname=$database;charset=UTF8";
$conn = new PDO($dsn, $username, $password);

$data = file_get_contents('php://input');

$consoleLogData = json_encode($data);

$dataJson = json_decode($data);

$stmt = $conn->prepare('INSERT INTO calculs (calcul, result) VALUES (?,?)');
$stmt->execute(array(
    $dataJson->calc, 
    $dataJson->tempCalc
));

echo json_encode('youpi');