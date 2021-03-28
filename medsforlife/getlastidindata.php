<?php
include './config.php';
 //header('Access-Control-Allow-Origin: *');
 //header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
 //header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

$conn = new mysqli($server, $user, $pass, $dbname);
$conn->set_charset('utf8');



if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
else{


  if ($result = $conn->query("SELECT MAX(id) as id FROM data")) 
{

    while($row = $result->fetch_array(MYSQL_ASSOC)) 
    {
            $myArray[] = $row;

    }
    echo json_encode($myArray,JSON_UNESCAPED_UNICODE);
 }

}


?>
