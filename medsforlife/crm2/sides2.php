<?php

 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
 header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
 header('Content-type: text/plain; charset=utf-8');
 
 
$array=$_POST['sidephp'];
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

   echo $array[$x];
   $sql ="INSERT INTO `ppisforlife2`.`post_sides` (`post`, `sides`) VALUES ('".$_POST['databaseid']."', '$array[$x]')";
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