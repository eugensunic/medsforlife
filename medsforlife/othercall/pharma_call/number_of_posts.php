<?php
include '../../config.php';

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
select count(id) as every from pharmacist
            UNION
            select COUNT(phalone) as every  from pharmacist
            where phalone=1
            UNION
          SELECT (COUNT(id)-(select count(phalone) from pharmacist where phalone=1)) as every from pharmacist ");


$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1);
while ($stmt->fetch()) {
    $json = array(
        'every' => (string) $col_1
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$conn->close();

echo json_encode($contentArray, JSON_UNESCAPED_UNICODE);

?>





