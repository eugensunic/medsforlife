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
SELECT DISTINCT post.id, content_cite, url, date, username, data.age FROM post, data
WHERE post.id = data.post_FK AND data.age >= ? AND data.age <= ? ORDER BY  `post`.`id` ASC");


$stmt->bind_param("ii", $one, $two);

// params
$one = $_GET['param_0'];
$two = $_GET['param_1'];


$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3, $col_4, $col_5, $col_6);
while ($stmt->fetch()) {
    $json = array(
        'id0' => $col_1,
        'content_cite' => $col_2,
        'url' => $col_3,
        'date' => $col_4,
        'username' => $col_5,
        'age' => $col_6
        
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$conn->close();

echo json_encode($contentArray, JSON_UNESCAPED_UNICODE);

?>