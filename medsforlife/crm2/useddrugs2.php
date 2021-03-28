<?php

  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
  header('Content-type: text/plain; charset=utf-8');
 
 
$array=$_POST['usedphp'];
$sql;

$server ="160.153.16.43";
$user="eusunic";
$pass="mili7788";
$dbname="ppisforlife2";

$conn = new mysqli($server, $user, $pass, $dbname);
$conn->set_charset("utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

else{
for($x = 0; $x < count($array); $x++) {

   $sql ="INSERT INTO `ppisforlife2`.`used_data` (`used_col`, `data_col`) VALUES ('$array[$x]','".$_POST['dataidsecond']."')";
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