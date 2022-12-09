<?php
$dbconnect = mysqli_connect("localhost","pdc20user","admin","pdc20");
if (mysqli_connect_errno()){
    echo "failed to connect to MySQL: " . mysqli_connect_error();
    die();
}

?>