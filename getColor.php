<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "grandmaDB";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// sql to create table
/*
$sql = "CREATE TABLE confirmTake (
morning bit(30) NOT NULL,
time_morning time(0),
noon bit(30) NOT NULL,
time_noon time(0),
night bit(30) NOT NULL,
time_night time(0)
)";
*/

if ($conn->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
