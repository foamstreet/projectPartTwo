<?php include 'components/header.php'; ?>
  <?php
    include 'components/menu.php';
    $servername = "localhost";
    $username = "stacy";
    $password = "lucy2016";
    $dbname = "stacy-mackin";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "INSERT INTO contact (firstName, lastName, email, message)
    VALUES('$_POST[first]','$_POST[last]','$_POST[email]','$_POST[message]')";

    if ($conn->query($sql) === TRUE) {
      echo "<header><h2>Thank you!<h2></header>";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
  ?>
  <?php include 'components/footer.php'; ?>
  </body>
</html>
