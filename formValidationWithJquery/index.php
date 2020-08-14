<?php include 'includes/header.php' ?>


<form action="final.php" method="post" id="form">
  <div class="uandp">
    <label for="name">Name </label><span style="
          font-size: 22px;
          font-weight: bold;
          color: #4caf50;
          margin-right: 50px;
          margin-left: 120px;
        ">:</span>
    <input type="text" name="name" id="name" /><span class="success" id="succname"></span><span class="error" id="nameerror"></span>
  </div>
  <div class="uandp">
    <label for="un">Username </label><span style="
          font-size: 22px;
          font-weight: bold;
          color: #4caf50;
          margin-right: 49px;
          margin-left: 83px;
        ">:</span>
    <input type="text" name="un" id="un" /><span class="success" id="succun"></span><span class="error" id="unerror"></span>
  </div>
  <div class="uandp">
    <label for="">Select country </label>
    <span style="
          font-size: 22px;
          font-weight: bold;
          color: #4caf50;
          margin-right: 50px;
          margin-left: 45px;
        ">:</span>
    <select name="country" id="country">
      <option value="null" selected>Please select a country</option>
      <option value="bangladesh">Bangladesh</option>
      <option value="india">India</option>
      <option value="china">China</option>
      <option value="malaysia">Malaysia</option>
      <option value="saudi">Saudi Arabia</option>
    </select><span class="error" id="counerror"></span>
  </div>
  <div class="uandp">
    <label for="number">Mobile Number </label><span style="
          font-size: 22px;
          font-weight: bold;
          color: #4caf50;
          margin-right: 4px;
          margin-left: 40px;
        ">:</span>
    <span id="counCode">+880</span><input type="number" name="number" id="number" /><span class="success" id="succnumber"></span><span class="error" id="mnerror"></span>
  </div>

  <div class="uandp">
    <label for="pass">Password </label><span style="
          font-size: 22px;
          font-weight: bold;
          color: #4caf50;
          margin-right: 50px;
          margin-left: 85px;
        ">:</span>
    <input type="password" name="pass" id="pass" /><span class="success" id="succpass"></span><span class="error" id="passerror">
    </span>
  </div>
  <div class="uandp">
    <label for="cpass">Confirm Password </label><span style="
          font-size: 22px;
          font-weight: bold;
          color: #4caf50;
          margin-right: 50px;
          margin-left: 12px;
        ">:</span>
    <input type="password" name="cpass" id="cpass" /><span class="success" id="succcpass"></span><span class="error" id="cpasserror"></span>
  </div>
  <input type="submit" name="submit" class="btn" value="Submit" />
</form>


<?php include 'includes/footer.php' ?>