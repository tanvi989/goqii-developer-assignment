<?php
header("Content-Type: application/json");
require_once("../db.php");

$query = "SELECT id, name, email, dob FROM users ORDER BY created_at DESC";
$stmt = $conn->prepare($query);
$stmt->execute();
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(["users" => $users]);
?>
