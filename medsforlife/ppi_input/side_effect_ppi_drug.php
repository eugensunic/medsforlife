<?php
include './config.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
header('Content-Type: text/html; charset=utf-8');

$stmt;
$counter;
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->set_charset("utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


//-----------------------------------------------------------------------------
// SIDES-PPI BEGIN
//-----------------------------------------------------------------------------


$array_amount = $_POST['param_0'];
$counter = $array_amount - 1;

for ($y = 0; $y < $array_amount; $y++) {

    $name = explode(",", $_POST["param_".(string)($y+1)]);
    
    for ($x = 0; $x < sizeof($name); $x++) {
        
        $stmt = $conn->prepare("INSERT INTO side_effect_ppi_drug (name, ppi_drugID) VALUES (?, (SELECT MAX(id) - ? FROM ppi_drug) )");
        
        $stmt->bind_param("si", $name_c, $counter);
        
        $name_c = $name[$x];
        
        $stmt->execute();
        $stmt->close();
        
    }
  $counter--;
}

//echo "side effect ppi successful";

//-----------------------------------------------------------------------------
// SIDES-PPI END
//-----------------------------------------------------------------------------



$conn->close();

?>