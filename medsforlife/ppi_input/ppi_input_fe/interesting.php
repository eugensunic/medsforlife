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

// 1. person-age
//-------------

$stmt = $conn->prepare("
SELECT age, COUNT(id) as cnt 
FROM basic_person_info 
GROUP BY age ORDER BY cnt DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'age' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->age_person = $contentArray;
$stmt->close();

// 2. person-race
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT race, COUNT(id) as cnt 
FROM basic_person_info 
GROUP BY race ORDER BY cnt DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'race' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->race_person = $contentArray;
$stmt->close();

// 3. person-gender
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT gender, COUNT( id ) AS cnt
FROM basic_person_info
GROUP BY gender
ORDER BY cnt DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'gender' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->gender_person = $contentArray;
$stmt->close();

// 4. disease-gastro
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT gastro, COUNT(id) as cnt FROM disease 
WHERE gastro IS NOT NULL AND gastro<>''
GROUP BY gastro
ORDER BY cnt DESC
LIMIT 20");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'gastro' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->gastro_person = $contentArray;
$stmt->close();


// 5. disease-other
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT other, COUNT(id) as cnt FROM disease 
WHERE other IS NOT NULL AND other<>''
GROUP BY other
ORDER BY cnt DESC
LIMIT 20");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'other' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->other_person = $contentArray;
$stmt->close();

// 6. disease-ppis-related
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT ppis, COUNT(id) as cnt FROM disease 
WHERE ppis IS NOT NULL AND ppis<>''
GROUP BY ppis
ORDER BY cnt DESC
LIMIT 20");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'ppi' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->ppi_person = $contentArray;
$stmt->close();


// 7. drugs-generic
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT generic, COUNT(basicID) as cnt FROM ppi_drug
WHERE generic IS NOT NULL AND generic<>''
GROUP BY generic
ORDER BY cnt DESC
LIMIT 20");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'generic' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->generic_person = $contentArray;
$stmt->close();

// 8. drugs-brand
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT brand, COUNT(basicID) as cnt FROM ppi_drug
WHERE brand IS NOT NULL AND brand<>''
GROUP BY brand
ORDER BY cnt DESC
LIMIT 20");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'brand' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->brand_person = $contentArray;
$stmt->close();


// 9. drugs-treatment-duration-year
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT generic, treatment_duration, COUNT(basicID) FROM ppi_drug
WHERE global_time='year'
GROUP BY generic
ORDER BY treatment_duration DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3);
while ($stmt->fetch()) {
    $json = array(
        'generic' => $col_1,
        'duration' => $col_2,
        'person' => $col_3
    );
    
    array_push($contentArray, $json);
}

$object->treatment_duration_person = $contentArray;
$stmt->close();

// 10. drugs-daily_on_drugs
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT daily, COUNT(basicID) as cnt FROM ppi_drug
GROUP BY daily
ORDER BY cnt DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'daily' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->daily_person = $contentArray;
$stmt->close();


// 11. drugs-dosage
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT dosage, COUNT(basicID) as cnt FROM ppi_drug
GROUP BY dosage
ORDER BY cnt DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'dosage' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->dosage_person = $contentArray;
$stmt->close();


// 12. sides-drugs
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT name, COUNT(*)as cnt
FROM(
SELECT name, id FROM side_effect_ppi_drug
WHERE name IS NOT NULL AND name<>''
UNION ALL
SELECT name, id FROM side_effect_general
WHERE name IS NOT NULL AND name<>''
) as t
GROUP BY t.name
ORDER BY cnt DESC
LIMIT 20");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'side-effect' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->sides_person = $contentArray;
$stmt->close();


// 13. generic-related-to-side-effect
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT generic, COUNT(side_effect_ppi_drug.name) as cnt FROM ppi_drug, side_effect_ppi_drug
WHERE ppi_drug.id=side_effect_ppi_drug.ppi_drugID 
GROUP BY generic
ORDER BY cnt DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'generic' => $col_1,
        'side-effects' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->generic_side_amount = $contentArray;
$stmt->close();


// 14. brand-related-to-side-effect
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT brand, COUNT(side_effect_ppi_drug.name) as cnt FROM ppi_drug, side_effect_ppi_drug
WHERE ppi_drug.id=side_effect_ppi_drug.ppi_drugID AND brand IS NOT NULL AND name<>''
GROUP BY brand
ORDER BY cnt DESC");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'brand' => $col_1,
        'side-effects' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->brand_side_amount = $contentArray;
$stmt->close();


// 15. treatment_duration-related-to-side-effect
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT treatment_duration, COUNT(side_effect_ppi_drug.name) as cnt FROM ppi_drug, side_effect_ppi_drug
WHERE ppi_drug.id=side_effect_ppi_drug.ppi_drugID AND global_time='year'
GROUP BY treatment_duration
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'treatment_duration' => $col_1,
        'side-effects' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->treatment_duration_side_amount = $contentArray;
$stmt->close();


// 16. other_drug_data
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT name, COUNT(basicID) as cnt FROM other_drug 
WHERE name IS NOT NULL AND name<>''
GROUP BY basicID
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'name' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->other_drug = $contentArray;
$stmt->close();

// 17. nutrient_deficiency
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT name, COUNT(basicID) as cnt FROM nutrient_deficiency
WHERE name IS NOT NULL AND name<>''
GROUP BY basicID
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'name' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->nutrient_deficiency = $contentArray;
$stmt->close();


// 18. natural_helped supplement
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT helped, COUNT(basicID) as cnt FROM natural_remedy
WHERE helped IS NOT NULL AND helped<>''
GROUP BY basicID
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'name' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->natural_helped = $contentArray;
$stmt->close();


// 19. natural_helped supplement
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT helped, COUNT(basicID) as cnt FROM natural_remedy
WHERE helped IS NOT NULL AND helped<>''
GROUP BY basicID
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'name' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->natural_helped = $contentArray;
$stmt->close();


// 20. natural_nothelped supplement
//-------------

$contentArray = array();
$stmt = $conn->prepare("
SELECT not_helped, COUNT(basicID) as cnt FROM natural_remedy
WHERE not_helped IS NOT NULL AND not_helped<>''
GROUP BY basicID
ORDER BY cnt DESC");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2);
while ($stmt->fetch()) {
    $json = array(
        'name' => $col_1,
        'person' => $col_2
    );
    
    array_push($contentArray, $json);
}

$object->natural_nothelped = $contentArray;
$stmt->close();







//-----------------
// close connection

$conn->close();
echo json_encode($object, JSON_UNESCAPED_UNICODE);

?>