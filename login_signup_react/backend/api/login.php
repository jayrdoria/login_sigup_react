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

    try {
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        if($user && password_verify($data->password, $user['password'])){
            echo json_encode(["message" => "Login successful."]);
        } else {
            echo json_encode(["message" => "Invalid credentials."]);
        }
    } catch(PDOException $e) {
        echo json_encode(["message" => $e->getMessage()]);
    }
} else {
    echo json_encode(["message" => "Invalid input."]);
}

?>
