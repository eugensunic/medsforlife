<?php

 header('Access-Control-Allow-Origin: *');
 header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
 header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
 header('Content-type: text/plain; charset=utf-8');
 

$sql;



$server ="160.153.16.43";
$user="eusunic";
$pass="mili7788";
$dbname="ppisforlife2";

$conn = new mysqli($server, $user, $pass, $dbname);
$conn->set_charset("utf8");

$dr = mysqli_real_escape_string($conn,$_POST['tought']);
$as = mysqli_real_escape_string($conn,$_POST['assoc']);
$fl = mysqli_real_escape_string($conn,$_POST['flagdoc']);
$urld = mysqli_real_escape_string($conn,$_POST['urldoc']);
$docalone = $_POST['docalone'];



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

else{
	 $sql ="INSERT INTO `ppisforlife2`.`doctors` (`doctors_tought`, `assoc_username`, `flag_doc`,`url`,`docalone`) 
VALUES ('$dr', '$as', '$fl', '$urld','$docalone')";


 if ($conn->query($sql) === TRUE) {
           //echo "New record created successfully";
		   
         } 
 else {
           echo "Error: " . $sql . "<br>" . $conn->error;
      }
}
$conn->close();

?> 