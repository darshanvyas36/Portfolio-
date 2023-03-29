<?php
$connection = mysqli_connect('localhost', 'root');

if ($connection){
    echo "connection stablished";
}
else {
    echo "connection stablished";
}

mysqli_select_db($connection, 'contact_me');

$fname = $_POST['firstname'];
$lname = $_POST['lastname'];
$message = $_POST['message'];

$data = "INSERT INTO portfolio (fname, lname , message) VALUES ('$fnmae', '$lname', '$message')";

mysqli_query ($connection, $data);
header('location:sendsuccessfull.html');
?>