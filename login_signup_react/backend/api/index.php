<?php

include 'config.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Content-Type: application/json; charset=UTF-8");

// Check if the connection is established
if (!$pdo) {
    echo json_encode(["error" => "Failed to connect to the database."]);
    exit;
}

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        getUsers($pdo);
        break;
    case 'POST':
        addUser($pdo);
        break;
    default:
        echo json_encode(["error" => "Invalid request method"]);
        break;
}

function getUsers($pdo) {
    $userId = $_GET('id');
    if ($userId) {
        $query = "SELECT * FROM users WHERE id = :id";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':id', $userId);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        echo json_encode($user);
        exit;
    } else {
        // Fetching all users
        $query = "SELECT * FROM users";
        $stmt = $pdo->prepare($query);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
    }
}



function addUser($pdo) {
    // Fetch the request data
    $data = json_decode(file_get_contents("php://input"));

    if(isset($data->email)) {
        $email = $data->email;

        // Create prepared statement to insert new user
        $stmt = $pdo->prepare("INSERT INTO users (email) VALUES (?)");
        if($stmt->execute([$email])) {
            echo json_encode(["message" => "User added successfully!"]);
        } else {
            echo json_encode(["error" => "Failed to add user"]);
        }
    } else {
        echo json_encode(["error" => "Invalid input"]);
    }
}



?>
