<?php
// process_login.php

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the entered username and password
    $enteredUsername = $_POST["username"];
    $enteredPassword = $_POST["password"];

    // Your authentication logic goes here
    // For simplicity, let's assume you have predefined credentials
    $correctUsername = "admin";
    $correctPassword = "admin123";

    // Check if the entered credentials match the correct ones
    if ($enteredUsername == $correctUsername && $enteredPassword == $correctPassword) {
        // Authentication successful, redirect to edit.html
        header("Location: edit.html");
        exit();
    } else {
        // Authentication failed, you might want to handle this differently
        echo "Invalid username or password";
    }
}
?>
