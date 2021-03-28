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

$stmt = $conn->prepare("SELECT post.id, sides.name AS side,  `condition`.name AS  `condition` , conditionppi.name AS ppi_condition, nutrient.name AS nutrient
FROM post,  `condition` , post_condition, post_sides, sides, conditionppi, post_conditionppi, nutrient, post_nutrient
WHERE post_sides.sides = sides.id
AND post_sides.post = post.id
AND  `condition`.id = post_condition.`condition` 
AND conditionppi.id = post_conditionppi.`conditionppi` 
AND post_conditionppi.post = post.id
AND post.id = post_nutrient.post
AND post_nutrient.nutrient = nutrient.id
AND post_condition.post = post.id
ORDER BY post.id ASC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3, $col_4, $col_5);
while ($stmt->fetch()) {
    $json = array(
        'id' => $col_1,
        'side' => $col_2,
        'condition' => $col_3,
        'ppi_condition' => $col_4,
        'nutrient' => $col_5
 
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$conn->close();

echo json_encode($contentArray, JSON_UNESCAPED_UNICODE);

?>







