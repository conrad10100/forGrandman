<!--Conrad Chiu project -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title> Grandma Update </title>
  <script src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.0.0/prototype.js" type="text/javascript"></script>
  <link href="style.css" type="text/css" rel="stylesheet">
  <script src="grandma.js" type="text/javascript"></script>
</head>
<body>

  <?php
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "grandmaDB";
  // Create connection
  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  // sql to create table
  /*
  $sql = "CREATE TABLE confirmTake (
  morning bit(1) NOT NULL,
  time_morning time(0),
  noon bit(1) NOT NULL,
  time_noon time(0),
  night bit(1) NOT NULL,
  time_night time(0)
  )";
  */
  $sql = "INSERT INTO confirmTake (morning, noon, night, time_night)
  Values ('1', '1', '1', '09:30:00')";

  if ($conn->query($sql) === TRUE) {
      //echo "Table created successfully";
  } else {
      echo "Error creating table: " . $conn->error;
  }

  $conn->close();
  ?>

  <!-- Fills the box with the date and time with id mydata -->
  <div id="dateBox">
    <p id="mydate">  Date </p>
  </div>


<!-- Morning medicine and circle indicator on right -->
  <div>
    <div class="box">
      <p id="morningMed"> Morning Medicine </p>
    </div>
    <p><button class="button" type="button" onclick="myFunction1()";><img id="circle1" src="redCircle.jpg"></button></p>
  </div>
<!-- Afternoon medicine and circle indicator on right -->
  <div>
    <div class="box">
      <p id="afternoonMed"> Afternnon Medicine </p>
    </div>
    <p><button class="button" type="button" onclick="myFunction2()";><img id="circle2" src="redCircle.jpg"></button></p>
  </div>
<!-- Night medicine and circle indicator on right -->
  <div>
    <div class="box">
      <p id="nightMed"> Night Medicine </p>
    </div>
    <p><button class="button" type="button" onclick="myFunction3()";><img id="circle3" src="redCircle.jpg"></button></p>
  </div>

</body>
</html>
