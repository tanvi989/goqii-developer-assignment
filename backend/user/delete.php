<?php
header("Content-Type: application/json");
require_once("../db.php");

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->id)) {
    $query = "DELETE FROM users WHERE id = :id";
    $stmt = $conn->prepare($query);
    $stmt->bindParam(":id", $data->id);

    if ($stmt->execute()) {
        echo json_encode(["message" => "User deleted successfully."]);
    } else {
        echo json_encode(["message" => "Failed to delete user."]);
    }
} else {
    echo json_encode(["message" => "User ID is required."]);
}
?>
