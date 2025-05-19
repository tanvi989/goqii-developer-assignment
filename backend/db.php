<?php
$host = "localhost";
$db_name = "goqii_assignment";
$username = "root";
$password = ""; // change if needed

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection error: " . $e->getMessage();
    die();
}
?>
