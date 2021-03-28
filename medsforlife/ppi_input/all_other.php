<?php
include './config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
header('Content-Type: text/html; charset=utf-8');


$stmt;
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8");


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//-----------------------------------------------------------------------------
// CONDITION BEGIN
//-----------------------------------------------------------------------------

$gastro  = explode(",", $_POST['param_0']);
$other   = explode(",", $_POST['param_1']);
$ppis    = explode(",", $_POST['param_2']);
$basicID = $_POST['param_3'];

for ($x = 0; $x < max(sizeof($gastro), sizeof($other), sizeof($ppis)); $x++) {
    
    if (!isset($gastro[$x])) {
        array_push($gastro, NULL);
        
    }
    if (!isset($other[$x])) {
        array_push($other, NULL);
        
    }
    if (!isset($ppis[$x])) {
        array_push($ppis, NULL);
        
    }
    
    $stmt = $conn->prepare("INSERT INTO disease (gastro, other, ppis, basicID) VALUES (?, ?, ?, ?)");
    
    $stmt->bind_param("sssi", $gastro_c, $other_c, $ppis_c, $basicID);
    
    $gastro_c = $gastro[$x];
    $other_c  = $other[$x];
    $ppis_c   = $ppis[$x];
    
    $stmt->execute();
    $stmt->close();
    
}

//echo "condition successful";

//-----------------------------------------------------------------------------
// CONDITION END
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// DRUG BEGIN
//-----------------------------------------------------------------------------

$generic            = explode(",", $_POST['param_4']);
$brand              = explode(",", $_POST['param_5']);
$dosage             = explode(",", $_POST['param_6']);
$treatment_duration = explode(",", $_POST['param_7']);
$global_time        = explode(",", $_POST['param_8']);
$daily              = explode(",", $_POST['param_9']);

for ($x = 0; $x < sizeof($generic); $x++) {

    if (!isset($brand[$x])) {
        array_push($brand, NULL);
        
    }
    
    $stmt = $conn->prepare("INSERT INTO ppi_drug (generic, brand, dosage, treatment_duration, global_time, daily, basicID) VALUES (?, ?, ?, ?, ?, ?, ?)");
    
    $stmt->bind_param("sssdssi", $generic_c, $brand_c, $dosage_c, $treatment_duration_c, $global_time_c, $daily_c, $basicID);
    
    $generic_c            = $generic[$x];
    $brand_c              = $brand[$x];
    $dosage_c             = $dosage[$x];
    $treatment_duration_c = $treatment_duration[$x];
    $global_time_c        = $global_time[$x];
    $daily_c              = $daily[$x];
    
    $stmt->execute();
    $stmt->close();
    
}

//echo "drugs successful";

//-----------------------------------------------------------------------------
// DRUG END
//-----------------------------------------------------------------------------


//-----------------------------------------------------------------------------
// SIDES-GENERAL BEGIN
//-----------------------------------------------------------------------------

$name_general = explode(",", $_POST['param_10']);
$side_radio   = $_POST['param_11'];

for ($x = 0; $x < sizeof($name_general); $x++) {
    
    
    $stmt = $conn->prepare("INSERT INTO side_effect_general (name, side_radio, basicID) VALUES (?, ?, ?)");
    
    $stmt->bind_param("ssi", $name_general_c, $side_radio, $basicID);
    
    $name_general_c = $name_general[$x];
    
    
    $stmt->execute();
    $stmt->close();
    
}

//echo "side effect general successful";

//-----------------------------------------------------------------------------
// SIDES-GENERAL END
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// OTHER DRUG BEGIN
//-----------------------------------------------------------------------------

$name_other       = explode(",", $_POST['param_12']);
$other_drug_radio = $_POST['param_13'];

for ($x = 0; $x < sizeof($name_other); $x++) {
    
    
    $stmt = $conn->prepare("INSERT INTO other_drug (name, other_drug_radio, basicID) VALUES (?, ?, ?)");
    
    $stmt->bind_param("ssi", $name_other_c, $other_drug_radio, $basicID);
    
    $name_other_c = $name_other[$x];
    
    
    $stmt->execute();
    $stmt->close();
    
}

//echo "other drug successful";

//-----------------------------------------------------------------------------  
// OTHER DRUG END
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// NUTRIENT BEGIN
//-----------------------------------------------------------------------------

$name_nutrient  = explode(",", $_POST['param_14']);
$nutrient_radio = $_POST['param_15'];

for ($x = 0; $x < sizeof($name_nutrient); $x++) {
    
    
    $stmt = $conn->prepare("INSERT INTO nutrient_deficiency (name, nutrient_radio, basicID) VALUES (?, ?, ?)");
    
    $stmt->bind_param("ssi", $name_nutrient_c, $nutrient_radio, $basicID);
    
    $name_nutrient_c = $name_nutrient[$x];
    
    
    $stmt->execute();
    $stmt->close();
    
}

//echo "nutrient deficiency successful";

//-----------------------------------------------------------------------------  
// NUTRIENT END
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// NATURAL BEGIN
//-----------------------------------------------------------------------------

$helped_natural     = explode(",", $_POST['param_16']);
$not_helped_natural = explode(",", $_POST['param_17']);


for ($x = 0; $x < max(sizeof($helped_natural), sizeof($not_helped_natural)); $x++) {
    
    if (!isset($helped_natural[$x])) {
        array_push($helped_natural, NULL);
        
    }
    
    if (!isset($not_helped_natural[$x])) {
        array_push($not_helped_natural, NULL);
        
    }
    
    $stmt = $conn->prepare("INSERT INTO natural_remedy (helped, not_helped, basicID) VALUES (?, ?, ?)");
    
    $stmt->bind_param("ssi", $helped_c, $not_helped_c, $basicID);
    
    $helped_c     = $helped_natural[$x];
    $not_helped_c = $not_helped_natural[$x];
    
    $stmt->execute();
    $stmt->close();
    
}

//echo "natural successful";

//-----------------------------------------------------------------------------  
// NATURAL END
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// EXTRA BEGIN
//-----------------------------------------------------------------------------

$hpylori             = $_POST['param_18'];
$exercise            = $_POST['param_19'];
$smoke               = $_POST['param_20'];
$alcohol             = $_POST['param_21'];
$obese               = $_POST['param_22'];
$healthy_eat         = $_POST['param_23'];
$stress              = $_POST['param_24'];
$family_gastro_issue = $_POST['param_25'];
$anxiety             = $_POST['param_26'];
$gluten_sensitive    = $_POST['param_27'];
$lactose_intolerance = $_POST['param_28'];
$substitute          = $_POST['param_29'];
$off_drug            = $_POST['param_30'];
$acid_rebound        = $_POST['param_31'];
$overall_experience  = $_POST['param_32'];




$stmt = $conn->prepare("INSERT INTO extra_info (
                hpylori, 
                exercise, 
                smoke, 
                alcohol, 
                obese, 
                healthy_eat,
                stress,
                family_gastro_issue,
                anxiety,
                gluten_sensitive,
                lactose_intolerance,
                substitute,
                off_drug,
                acid_rebound,
                overall_experience,
                basicID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param("sssssssssssssssi", $hpylori, $exercise, $smoke, $alcohol, $obese, $healthy_eat, $stress, $family_gastro_issue, $anxiety, $gluten_sensitive, $lactose_intolerance, $substitute, $off_drug, $acid_rebound, $overall_experience, $basicID);



$stmt->execute();
$stmt->close();



//echo "extra successful";

//-----------------------------------------------------------------------------  
// EXTRA END
//-----------------------------------------------------------------------------


$conn->close();

?>