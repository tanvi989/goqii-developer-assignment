<?php
header("Content-Type: application/json");
require_once("../db.php");

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id) && !empty($data->name) && !empty($data->email) && !empty($data->dob)) {
    $query = "UPDATE users SET name = :name, email = :email, dob = :dob WHERE id = :id";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(":id", $data->id);
    $stmt->bindParam(":name", $data->name);
    $stmt->bindParam(":email", $data->email);
    $stmt->bindParam(":dob", $data->dob);

    if ($stmt->execute()) {
        echo json_encode(["message" => "User updated successfully."]);
    } else {
        echo json_encode(["message" => "Failed to update user."]);
    }
} else {
    echo json_encode(["message" => "Missing required fields."]);
}
?>
