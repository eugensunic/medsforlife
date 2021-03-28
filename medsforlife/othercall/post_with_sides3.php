<?php
include '../config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

$json;
$contentArray = array();

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset('utf8');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("
SELECT COUNT(*) as amount from(
          SELECT COUNT( post_sides.sides ) AS amount
          FROM sides, post_sides
          WHERE post_sides.sides = sides.id
          GROUP BY post_sides.post
        HAVING amount=3) as table2");


$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1);
while ($stmt->fetch()) {
    $json = array(
        'amount' => (string) $col_1 
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$conn->close();

echo json_encode($contentArray, JSON_UNESCAPED_UNICODE);

?>

