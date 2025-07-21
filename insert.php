<?php
include 'db.php';

$category = $_POST['category'] ?? '';
$amount = $_POST['amount'] ?? 0;
$date = $_POST['date'] ?? '';

if ($category && $amount > 0 && $date) {
    $sql = "INSERT INTO expenses (category, amount, date) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sds", $category, $amount, $date);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid input']);
}

$conn->close();
?>
