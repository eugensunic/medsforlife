<?php
include './config.php';
 //header('Access-Control-Allow-Origin: *');
 //header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
 //header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
 header('Content-type: text/plain; charset=utf-8');
 
 
$arrayfirst = $_REQUEST['valueone'];
$arraysecond= $_REQUEST['valuetwo'];
$sql;

$conn = new mysqli($server, $user, $pass, $dbname);
$conn->set_charset("utf8");

$arrayfirst = array_map(array($conn, 'real_escape_string'), $arrayfirst);
$arraysecond = array_map(array($conn, 'real_escape_string'), $arraysecond);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

else{
for($x = 0; $x < count($arrayfirst); $x++) {
 
   $sql ="INSERT INTO `ppisforlife`.`alternative` (`name`, `helped`) VALUES ('$arrayfirst[$x]', '$arraysecond[$x]')";
 if ($conn->query($sql) === TRUE) {
           //echo "New record created successfully";
		   

         } 
 else {
           echo "Error: " . $sql . "<br>" . $conn->error;
      }
}



}
$conn->close();

?> 