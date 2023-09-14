<?php

header("Access-Control-Allow-Origin: https://lagueslo.com");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit; // just exit if it's a preflight request
}

require 'config.php';

$data = json_decode(file_get_contents("php://input"));

if(isset($data->email) && isset($data->password)){
    $email = $data->email;
    $password = password_hash($data->password, PASSWORD_DEFAULT);

    try {
        $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
        if($stmt->execute([$email, $password])){
            echo json_encode(["message" => "User registered successfully."]);
        } else {
            echo json_encode(["message" => "User registration failed."]);
        }
    } catch(PDOException $e) {
        echo json_encode(["message" => $e->getMessage()]);
    }
} else {
    echo json_encode(["message" => "Invalid input."]);
}
?>
