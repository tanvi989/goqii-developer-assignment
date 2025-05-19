<?php
// CORS & content-type headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Show PHP errors if needed
ini_set('display_errors', 1);
error_reporting(E_ALL);

// DB connection
require_once("../db.php");

// Get JSON input
$data = json_decode(file_get_contents("php://input"));

// Validate input
if(!empty($data->name) && !empty($data->email) && !empty($data->password) && !empty($data->dob)) {
    try {
        $stmt = $conn->prepare("INSERT INTO users (name, email, password, dob) VALUES (:name, :email, :password, :dob)");
        $stmt->bindParam(":name", $data->name);
        $stmt->bindParam(":email", $data->email);
        $stmt->bindParam(":password", password_hash($data->password, PASSWORD_DEFAULT));
        $stmt->bindParam(":dob", $data->dob);

        if($stmt->execute()) {
            echo json_encode(["message" => "User created successfully."]);
        } else {
            echo json_encode(["message" => "Failed to create user."]);
        }
    } catch (PDOException $e) {
        echo json_encode(["message" => "Error: " . $e->getMessage()]);
    }
} else {
    echo json_encode(["message" => "All fields are required."]);
}
?>
