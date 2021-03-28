<?php
include './config.php';
 //header('Access-Control-Allow-Origin: *');
 //header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
 //header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');
 header('Content-type: text/plain; charset=utf-8');
 
 

$sql;
$conn = new mysqli($server, $user, $pass, $dbname);
$conn->set_charset("utf8");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

else{

$sql ="INSERT INTO `ppisforlife`.`data` (`duration`, `globaltime_duration`, `age`, `sex`, `dosage`, `dailyuse`,`hpylori`,`post_FK`,`drug_generic_FK`,`drug_brand_FK`) 
VALUES ('".$_POST['duration']."', '".$_POST['globaltime_duration']."','".$_POST['age']."','".$_POST['gender']."', '".$_POST['dosage']."', '".$_POST['daily']."','".$_POST['pylori']."', '".$_POST['post']."', '".$_POST['generic']."', '".$_POST['brand']."')";


 if ($conn->query($sql) === TRUE) 
        {
           //echo "New record created successfully";
		   
           
         } 
 else {
           echo "Error: " . $sql . "<br>" . $conn->error;
      }
}
$conn->close();

?> 