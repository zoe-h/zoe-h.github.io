<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>TWO DOOR CINEMA CLUB | MELBOURNE 2017</title>
    <link rel="stylesheet" href="assets/css/tdcc1.css">
    <script src="assets/js/jquery-3.2.0.min.js" charset="utf-8"></script>
    <script src="assets/js/tdcc1.js" charset="utf-8"></script>
  </head>
  <body>

    <div class="title">
      Two Door Cinema Club
    </div>

    <table class="info">
      <colgroup>
         <col span="1" style="width: 30%;">
         <col span="1" style="width: 70%;">
      </colgroup>
      <tr>
        <td>WHERE</td>
        <td>Festival Hall, Melbourne, Australia</td>
      </tr>
      <tr>
        <td>WHEN</td>
        <td>25 July 2017</td>
      </tr>
      <tr>
        <td>HIGHLIGHTS</td>
        <td>Alex having fixed that <span class="hair-text link">godawful hair</span></td>
      </tr>
      <tr>
        <td></td>
        <td>Getting barrier without even trying</td>
      </tr>
    </table>

    <div class="hair">
      <img src="assets/images/tdcc1/whatthefuck.jpg" alt="">
    </div>

    <div class="text1">
      is this the right door??? why are there only six people here?????
    </div>

    <?php
// Define your username and password
$username = "someuser";
$password = "somepassword";
if (
  (isset($_POST['txtUsername']) == false || isset($_POST['txtPassword']) == false) ||
   ($_POST['txtUsername'] != $username || $_POST['txtPassword'] != $password) {  ?>
<h1>Login</h1>
<form name="form" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
<label for="txtUsername">Username:</label>
<input type="text" title="Enter your Username" name="txtUsername" />
<label for="txtpassword">Password:</label>
<input type="password" title="Enter your password" name="txtPassword" />
<input type="submit" name="Submit" value="Login" />
</form>
<?php  }  else {  ?>

    <iframe class="video1" width="560" height="315" src="https://www.youtube.com/embed/KH5dTuXRek8" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

    <marquee class="happybirthday">
      HAPPY BIRTHDAY SAM
    </marquee>

    <?php  }  ?>

  </body>
</html>
