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

$stmt = $conn->prepare("SELECT post.id, duration, globaltime_duration, sex, age, dosage, dailyuse, hpylori, drug_generic.name AS generic, drug_brand.name AS brand, used.name AS used, other_drug_data.other_drug_name
FROM post, drug_brand, drug_generic,  `data` , used, used_data, other_drug_data
WHERE post.id = data.post_FK
AND drug_generic.id = data.drug_generic_FK
AND drug_brand.id = data.drug_brand_FK
AND used.id = used_data.used_col
AND used_data.data_col = data.id
AND other_drug_data.data_FK = data.id
AND data.sex=?
ORDER BY post.id");


$stmt->bind_param("s", $one);

// params
$one =$_GET['param_0'];


$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3, $col_4, $col_5, $col_6, $col_7, $col_8, $col_9, $col_10, $col_11, $col_12);
while ($stmt->fetch()) {
    $json = array(
        'id' => $col_1,
        'duration' => $col_2,
        'globaltime_duration' => $col_3,
        'sex' => $col_4,
        'age' => $col_5,
        'dosage' => $col_6,
        'dailyuse' => $col_7,
        'hpylori' => $col_8,
        'generic' => $col_9,
        'brand' => $col_10,
        'used' => $col_11,
        'other_drug_name' => $col_12

    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$conn->close();

echo json_encode($contentArray, JSON_UNESCAPED_UNICODE);

?>






