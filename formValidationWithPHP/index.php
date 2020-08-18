<?php include 'Validation.php' ?>

<?php $valid = new Validation; ?>

<?php
$result = "";
if (isset($_POST['submitBtn'])) {
  $result = $valid->validate($_POST);
}
?>

<?php include 'includes/header.php' ?>

<div class="form">
  <fieldset>
    <legend>
      <p id="error">
        <?php
        if ($result) {
          echo $result;
        }
        ?>
      </p>
    </legend>
    <form action="" method="POST">
      <div class="input">
        <label for="userName" style="margin-right: 107px;">Username</label><span class="colon">:</span>
        <input type="text" name="userName" id="userName" placeholder="enter your username">
      </div>
      <div class="input">
        <label for="email" style="margin-right: 155px;">Email</label><span class="colon">:</span>
        <input type="text" name="email" id="email" placeholder="enter your email">
      </div>
      <div class="input">
        <label for="pass" style="margin-right: 111px;">Password</label><span class="colon">:</span>
        <input type="text" name="pass" id="pass" placeholder="enter your password">
      </div>
      <div class="input">
        <label for="cPass" style="margin-right: 22px;">Confirm password</label><span class="colon">:</span>
        <input type="text" name="cPass" id="cPass" placeholder="enter your password again">
      </div>
      <button type="submit" class="btn" name="submitBtn">Submit</button>
    </form>
  </fieldset>
</div>


<?php include 'includes/footer.php' ?>