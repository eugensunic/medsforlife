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

// 1. basic-data
//-------------

$stmt = $conn->prepare("SELECT id, age, weight, weight_si, height, height_si, gender, race FROM basic_person_info");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3, $col_4, $col_5, $col_6, $col_7, $col_8);
while ($stmt->fetch()) {
    $json = array(
        'id' => $col_1,
        'age' => $col_2,
        'weight' => $col_3,
        'weight_si' => $col_4,
        'height' => $col_5,
        'height_si' => $col_6,
        'gender' => $col_7,
        'race' => $col_8
    );
    
    array_push($contentArray, $json);
}

$object->basic_info = $contentArray;
$stmt->close();


// 2. condition/disease data
//--------------------------

$contentArray = array();
$stmt         = $conn->prepare("SELECT basicID, gastro, other, ppis FROM disease");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3, $col_4);
while ($stmt->fetch()) {
    $json = array(
        'basicID' => $col_1,
        'gastro' => $col_2,
        'other' => $col_3,
        'ppis' => $col_4
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$object->condition_overview = $contentArray;

// 3. PPI drug data
//--------------------------

$contentArray = array();
$stmt         = $conn->prepare("SELECT basicID, generic, brand, dosage, treatment_duration, global_time, daily FROM ppi_drug");
$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3, $col_4, $col_5, $col_6, $col_7);
while ($stmt->fetch()) {
    $json = array(
        'basicID' => $col_1,
        'generic' => $col_2,
        'brand' => $col_3,
        'dosage' => $col_4,
        'treatment_duration' => $col_5,
        'global_time' => $col_6,
        'daily' => $col_7
        
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$object->ppi_overview = $contentArray;


// 4. side-effects-drug data
//--------------------------

$contentArray = array();
$stmt         = $conn->prepare("SELECT basic_person_info.id as personID, name, ppi_drug.generic as generic, ppi_drug.brand as brand, ppi_drugID
       FROM basic_person_info, side_effect_ppi_drug, ppi_drug
       WHERE basic_person_info.id = ppi_drug.basicID
       AND ppi_drug.id = side_effect_ppi_drug.ppi_drugID");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3, $col_4, $col_5);
while ($stmt->fetch()) {
    $json = array(
        'basicID' => $col_1,
        'name' => $col_2,
        'generic' => $col_3,
        'brand' => $col_4,
        'ppi_drugID' => $col_5
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$object->side_drug = $contentArray;


// 5. side-effects general
//--------------------------

$contentArray = array();
$stmt         = $conn->prepare("SELECT basicID, side_radio, name FROM side_effect_general");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3);
while ($stmt->fetch()) {
    $json = array(
        'basicID' => $col_1,
        'side_radio' => $col_2,
        'name' => $col_3
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$object->side_general = $contentArray;

// 6. otherdrug data 
//--------------------------

$contentArray = array();
$stmt         = $conn->prepare("SELECT basicID, other_drug_radio, name FROM other_drug");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3);
while ($stmt->fetch()) {
    $json = array(
        'basicID' => $col_1,
        'other_drug_radio' => $col_2,
        'name' => $col_3
    );
    
    array_push($contentArray, $json);
}


$stmt->close();
$object->other_drug = $contentArray;



// 7. nutrient data 
//--------------------------

$contentArray = array();
$stmt         = $conn->prepare("SELECT basicID, nutrient_radio, name FROM nutrient_deficiency");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3);
while ($stmt->fetch()) {
    $json = array(
        'basicID' => $col_1,
        'nutrient_radio' => $col_2,
        'name' => $col_3
    );
    
    array_push($contentArray, $json);
}

$stmt->close();
$object->nutrient = $contentArray;



// 8. natural remedy data 
//--------------------------

$contentArray = array();
$stmt         = $conn->prepare("SELECT basicID, helped, not_helped FROM natural_remedy");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3);
while ($stmt->fetch()) {
    $json = array(
        'basicID' => $col_1,
        'helped' => $col_2,
        'not_helped' => $col_3
    );
    
    array_push($contentArray, $json);
}



$stmt->close();
$object->natural = $contentArray;


// 9. natural remedy data 
//--------------------------

$contentArray = array();
$stmt         = $conn->prepare("SELECT basicID, hpylori, exercise, smoke, alcohol, obese, healthy_eat, stress, family_gastro_issue, anxiety, gluten_sensitive, lactose_intolerance, substitute, off_drug, acid_rebound, overall_experience
FROM extra_info");

$stmt->execute();

mysqli_stmt_store_result($stmt);

$stmt->bind_result($col_1, $col_2, $col_3, $col_4, $col_5, $col_6, $col_7, $col_8, $col_9, $col_10, $col_11, $col_12, $col_13, $col_14, $col_15, $col_16);
while ($stmt->fetch()) {
    $json = array(
        'basicID' => $col_1,
        'hpylori' => $col_2,
        'exercise' => $col_3,
        'smoke' => $col_4,
        'alcohol' => $col_5,
        'obese' => $col_6,
        'healthy_eat' => $col_7,
        'stress' => $col_8,
        'family_gastro_issue' => $col_9,
        'anxiety' => $col_10,
        'gluten_sensitive' => $col_11,
        'lactose_intolerance' => $col_12,
        'substitute' => $col_13,
        'off_drug' => $col_14,
        'acid_rebound' => $col_15,
        'overall_experience' => $col_16
    );
    
    array_push($contentArray, $json);
}



$stmt->close();
$object->other_data = $contentArray;



//-----------------
// close connection

$conn->close();
echo json_encode($object, JSON_UNESCAPED_UNICODE);

?>