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

$original_post = mysqli_real_escape_string($conn,$_POST['original_post_o']);
$citation_post = mysqli_real_escape_string($conn,$_POST['citation_post_c']);
$url = mysqli_real_escape_string($conn,$_POST['url_u']);
$date = mysqli_real_escape_string($conn,$_POST['date_d']);
$userajax = mysqli_real_escape_string($conn,$_POST['username_u']);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

else{
	 $sql ="INSERT INTO `ppisforlife2`.`post` (`content`, `content_cite`, `username`, `date`, `url`, `flag`) 
VALUES ('$original_post', '$citation_post', '$userajax', '$date', '$url', '".$_POST['flag']."')";


 if ($conn->query($sql) === TRUE) {
           //echo "New record created successfully";
		   
         } 
 else {
           echo "Error: " . $sql . "<br>" . $conn->error;
      }
}
$conn->close();

?> 