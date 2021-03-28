<?php
include './config.php';
  //header('Access-Control-Allow-Origin: *');
  //header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
  //header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
  header('Content-type: text/plain; charset=utf-8');
 
 
$array=$_REQUEST['otherphp'];
$sql;
$tempvar;

$conn = new mysqli($server, $user, $pass, $dbname);
$conn->set_charset("utf8");


$array = array_map(array($conn, 'real_escape_string'), $array);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

else
{
for($x = 0; $x < count($array); $x++) 
{

 
   $sql ="INSERT INTO `ppisforlife`.`other_drug_data` (`data_FK`, `other_drug_name`) VALUES ('".$_POST['dataid']."', '$array[$x]')";
  if ($conn->query($sql) === TRUE) 
   {
       //echo "New record created successfully";

   } 
  else  
   {
       echo "Error: " . $sql . "<br>" . $conn->error;
   }

} //end of for



} //end of else
$conn->close();

?> 