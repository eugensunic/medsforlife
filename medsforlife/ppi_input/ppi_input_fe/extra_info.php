<?php

include '../config.php';
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

//----------------------------

$json;
$contentArray = array();
$object       = new stdClass();
//----------------------------

$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset('utf8');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 1. H-pylori
//-------------

$stmt = $conn->prepare("
SELECT hpylori, COUNT(basicID) as cnt FROM extra_info
GROUP BY hpylori
ORDER BY cnt DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'h_pylori' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->hpylori_person = $contentArray;
$stmt->close();


// 2. Exercise
//-------------

$contentArray = array();
$stmt         = $conn->prepare("
SELECT exercise, COUNT(basicID) as cnt FROM extra_info
GROUP BY exercise
ORDER BY cnt DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'exercise' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->exercise_person = $contentArray;
$stmt->close();

// 3. Smoke
//-------------

$contentArray = array();
$stmt         = $conn->prepare("
SELECT smoke, COUNT(basicID) as cnt FROM extra_info
GROUP BY smoke
ORDER BY cnt DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'smoke' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->smoke_person = $contentArray;
$stmt->close();


// 4. Alcohol
//-------------

$contentArray = array();
$stmt         = $conn->prepare("
SELECT alcohol, COUNT(basicID) as cnt FROM extra_info
GROUP BY alcohol
ORDER BY cnt DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'alcohol' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->alcohol_person = $contentArray;
$stmt->close();


// 5. Obese
//-------------

$contentArray = array();
$stmt         = $conn->prepare("
SELECT obese, COUNT(basicID) as cnt FROM extra_info
GROUP BY obese
ORDER BY cnt DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'obese' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->obese_person = $contentArray;
$stmt->close();

// 6. Healthy eat
//-------------

$contentArray = array();
$stmt         = $conn->prepare("
SELECT healthy_eat, COUNT(basicID) as cnt FROM extra_info
GROUP BY healthy_eat
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'healthy_diet' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->healthy_person = $contentArray;
$stmt->close();


// 7. Stress experience
//-------------

$contentArray = array();
$stmt         = $conn->prepare("
SELECT stress, COUNT(basicID) as cnt FROM extra_info
GROUP BY stress
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'stress' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->stress_person = $contentArray;
$stmt->close();


// 8. Family gastro issues
//-------------

$contentArray = array();
$stmt         = $conn->prepare("
SELECT family_gastro_issue, COUNT(basicID) as cnt FROM extra_info
GROUP BY family_gastro_issue
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'genetics' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->genetic_person = $contentArray;
$stmt->close();


// 9. Anxiety
//-------------

$contentArray = array();
$stmt         = $conn->prepare("
SELECT anxiety, COUNT(basicID) as cnt FROM extra_info
GROUP BY  anxiety
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'anxiety' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->anxiety_person = $contentArray;
$stmt->close();


// 10. Substitute drug for PPIs
//-------------

$contentArray = array();
$stmt         = $conn->prepare("
SELECT  substitute, COUNT(basicID) as cnt FROM extra_info
GROUP BY  substitute
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'substitute' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->substitute_person = $contentArray;
$stmt->close();


// 11. Able to get off drug
//-------------

$contentArray = array();
$stmt         = $conn->prepare("
SELECT off_drug, COUNT(basicID) as cnt FROM extra_info
GROUP BY  off_drug
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'quit_drug' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->off_drug_person = $contentArray;
$stmt->close();


// 12. Acid rebound from PPIs
//-------------

$contentArray = array();
$stmt         = $conn->prepare("
SELECT acid_rebound, COUNT(basicID) as cnt FROM extra_info
GROUP BY  acid_rebound
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'rebound' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->acid_rebound_person = $contentArray;
$stmt->close();


// 13. Overall satisfaction experience
//-------------

$contentArray = array();
$stmt         = $conn->prepare("
SELECT overall_experience, COUNT(basicID) as cnt FROM extra_info
GROUP BY  overall_experience
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'overall_experience' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->overall_experience_person = $contentArray;
$stmt->close();








//-----------------
// close connection

$conn->close();
echo json_encode($object, JSON_UNESCAPED_UNICODE);

?>