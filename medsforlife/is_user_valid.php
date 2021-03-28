<?php
include './config.php';
 //header('Access-Control-Allow-Origin: *');
 //header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
 //header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

$conn = new mysqli($server, $user, $pass, $dbname);
$conn->set_charset('utf8');

$url = mysqli_real_escape_string($conn,$_POST['url_u']);
$userajax = mysqli_real_escape_string($conn,$_POST['username_u']);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
else{


  if ($result = $conn->query("SELECT username, RTRIM(SUBSTRING_INDEX(SUBSTRING(url, INSTR( url,  '/' ) +2 ) ,  '/', 1 )) AS urlu
FROM post WHERE username='$userajax' and RTRIM(SUBSTRING_INDEX(SUBSTRING(url, INSTR( url,  '/' ) +2 ) ,  '/', 1 ))='$url'")) 
{

    while($row = $result->fetch_array(MYSQL_ASSOC)) 
    {
            $myArray[] = $row;

    }
    echo json_encode($myArray,JSON_UNESCAPED_UNICODE);
 }

}


?>
