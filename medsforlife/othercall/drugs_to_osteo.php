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
select drug_generic.name as firstcol, count(conditionppi.name) as secondcol from post, post_conditionppi, drug_generic, data, conditionppi
          where data.post_FK=post.id and drug_generic.id=data.drug_generic_FK AND post_conditionppi.post=post.id AND post_conditionppi.conditionppi=conditionppi.id
          and conditionppi.name LIKE '%osteo%'
        GROUP BY drug_generic.name  ");


$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'firstcol' => $col_1,
        'secondcol' => (string) $col_2 
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$conn->close();

echo json_encode($contentArray, JSON_UNESCAPED_UNICODE);

?>


















