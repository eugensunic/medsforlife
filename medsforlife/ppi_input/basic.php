<?php
include './config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

$servername = "160.153.16.43";
$username   = "eusunic";
$password   = "mili7788";
$dbname     = "ppi_input";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO basic_person_info 
(id, age, weight, weight_si, height, height_si, gender, race) 
VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("iiisisss", $id, $age, $weight, $weight_si, $height, $height_si, $gender, $race);

$id        = $_POST['param_0'];
$age       = $_POST['param_1'];
$weight    = $_POST['param_2'];
$weight_si = $_POST['param_3'];
$height    = $_POST['param_4'];
$height_si = $_POST['param_5'];
$gender    = $_POST['param_6'];
$race      = $_POST['param_7'];

$stmt->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();

?>