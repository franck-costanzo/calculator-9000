<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$server="localhost";
$username="root";
$password="";
$database="savecalc";

$dsn = "mysql:host=$server;dbname=$database;charset=UTF8";
$conn = new PDO($dsn, $username, $password);

$stmt = $conn->query('SELECT * FROM calculs')->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($stmt);