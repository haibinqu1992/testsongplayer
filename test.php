
<?php
$servername="localhost";
$username="root";
$password="";
$database="songs";
$mysongz="";

$conn =new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT songname,artist FROM allsong";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $mysongz=$mysongz+ $row["songname"];
        echo $this;
    }
} else {
    echo "0 results";
}

$conn->close();
?> 

</body>
</html>