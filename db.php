<?php
$host = 'localhost';
$user = 'root';
$password = '291103';
$dbname = 'expense_tracker';

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die('Database connection failed: ' . $conn->connect_error);
}
?>
