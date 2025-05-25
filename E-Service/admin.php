<?php
$host = "localhost";
$user = "root";
$password = "";
$dbname = "travel_form";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM applications ORDER BY submitted_at DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
    <title>Application Submissions</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #aaa;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #eee;
        }
        h2 {
            text-align: center;
        }
    </style>
</head>
<body>
    <h2>Travel Permit Applications</h2>
    <?php if ($result->num_rows > 0): ?>
        <table>
            <tr>
                <th>ID</th>
                <th>Child Name</th>
                <th>DOB</th>
                <th>Minor Address</th>
                <th>Parent Name</th>
                <th>Parent Address</th>
                <th>Validity</th>
                <th>Companion</th>
                <th>Relationship</th>
                <th>Destination</th>
                <th>Purpose</th>
                <th>Submitted At</th>
            </tr>
            <?php while($row = $result->fetch_assoc()): ?>
            <tr>
                <td><?= htmlspecialchars($row['id']) ?></td>
                <td><?= htmlspecialchars($row['child_name']) ?></td>
                <td><?= htmlspecialchars($row['dob']) ?></td>
                <td><?= nl2br(htmlspecialchars($row['minor_address'])) ?></td>
                <td><?= htmlspecialchars($row['parent_name']) ?></td>
                <td><?= nl2br(htmlspecialchars($row['parent_address'])) ?></td>
                <td><?= htmlspecialchars($row['validity_period']) ?></td>
                <td><?= htmlspecialchars($row['companion_name']) ?><br><?= nl2br(htmlspecialchars($row['companion_address'])) ?></td>
                <td><?= htmlspecialchars($row['companion_relationship']) ?></td>
                <td><?= htmlspecialchars($row['destination']) ?></td>
                <td><?= nl2br(htmlspecialchars($row['purpose'])) ?></td>
                <td><?= htmlspecialchars($row['submitted_at']) ?></td>
            </tr>
            <?php endwhile; ?>
        </table>
    <?php else: ?>
        <p>No applications submitted yet.</p>
    <?php endif; ?>
</body>
</html>

<?php
$conn->close();
?>
