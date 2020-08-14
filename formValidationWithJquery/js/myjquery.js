$("document").ready(function () {
  /*----variable for submit form data----*/

  var validName = false;
  var validUsername = false;
  var validMobile = false;
  var validPass = false;
  var validCPass = false;
  var validcountry = false;

  /*----error massage----*/

  $("#nameerror").hide();
  $("#unerror").hide();
  $("#mnerror").hide();
  $("#passerror").hide();
  $("#cpasserror").hide();
  $("#counerror").hide();

  /*----success massage----*/

  $("#succname").hide();
  $("#succun").hide();
  $("#succnumber").hide();
  $("#succpass").hide();
  $("#succcpass").hide();

  /*----all events----*/

  $("#name").focusout(function () {
    checkName();
  });
  $("#un").focusout(function () {
    checkUserName();
  });
  $("#country").click(function () {
    checkCountry();
  });
  $("#number").focusout(function () {
    checkMobile();
  });
  $("#pass").focusout(function () {
    checkPass();
  });
  $("#cpass").focusout(function () {
    checkCpass();
  });

  /*----all functions----*/

  function checkName() {
    var name = $("#name").val().trim();
    if (name == "") {
      $("#nameerror").html("Please enter your name!");
      $("#nameerror").show("slow");

      $("#name").css("border", "2px solid red");
      $("#succname").hide();
    } else {
      $("#name").css("border", "2px solid #4caf50");
      $("#succname").html("Good");
      $("#succname").show("slow");
      $("#nameerror").hide();
      validName = true;
    }
  }

  function checkUserName() {
    var username = $("#un").val().trim();
    var unlength = username.length;
    var firstchar = username.charAt(0);
    if (unlength == 0) {
      $("#unerror").html("Please enter your username!");
      $("#unerror").show("slow");

      $("#un").css("border", "2px solid red");
      $("#succun").hide();
    } else if (unlength < 5 || unlength > 10) {
      $("#unerror").html("Username must be at least 5 char!");
      $("#unerror").show("slow");

      $("#un").css("border", "2px solid red");
      $("#succun").hide();
    } else if (firstchar >= "0" && firstchar <= "9") {
      $("#unerror").html("Username cannot start with a number!");
      $("#unerror").show("slow");

      $("#un").css("border", "2px solid red");
      $("#succun").hide();
    } else {
      $("#succun").html("Good");
      $("#succun").show("slow");
      $("#un").css("border", "2px solid #4caf50");
      $("#unerror").hide();
      validUsername = true;
    }
  }

  function checkCountry() {
    var country = $("#country").val();
    var conuntryCode = "";
    if (country == "bangladesh") {
      conuntryCode = "+880";
      $("#counCode").html(conuntryCode);
      $("#counCode").show();
      $("#counerror").hide();
      validcountry = true;
    } else if (country == "india") {
      conuntryCode = "+91";
      $("#counCode").html(conuntryCode);
      $("#counCode").show();
      $("#counerror").hide();
      validcountry = true;
    } else if (country == "china") {
      conuntryCode = "+86";
      $("#counCode").html(conuntryCode);
      $("#counCode").show();
      $("#counerror").hide();
      validcountry = true;
    } else if (country == "malaysia") {
      conuntryCode = "+60";
      $("#counCode").html(conuntryCode);
      $("#counCode").show();
      $("#counerror").hide();
      validcountry = true;
    } else if (country == "saudi") {
      conuntryCode = "+966";
      $("#counCode").html(conuntryCode);
      $("#counCode").show();
      $("#counerror").hide();
      validcountry = true;
    } else {
      $("#counerror").html("Please select a country!");
      $("#counerror").show("slow");
      $("#counCode").hide();
      validcountry = false;
    }
  }

  function checkMobile() {
    var mn = $("#number").val().trim();
    var country = $("#country").val();
    var mnlength = mn.length;
    var firsttwoDigit = mn.slice(0, 2);
    var firstthreeDigit = mn.slice(0, 3);
    if (mn == "") {
      $("#mnerror").html("Please enter your mobile number!");
      $("#mnerror").show("slow");

      $("#number").css("border", "2px solid red");
      $("#succnumber").hide();
    } else {
      if (country == "bangladesh") {
        if (
          firstthreeDigit != "018" &&
          firstthreeDigit != "017" &&
          firstthreeDigit != "016" &&
          firstthreeDigit != "015" &&
          firstthreeDigit != "013" &&
          firstthreeDigit != "019"
        ) {
          $("#mnerror").html("Number format is not correct for Bangladesh!");
          $("#mnerror").show("slow");

          $("#number").css("border", "2px solid red");
          $("#succnumber").hide();
        } else if (mnlength != 11) {
          $("#mnerror").html(
            "Invalid! Bangladesh Mobile number have 11 digit!"
          );
          $("#mnerror").show("slow");
          $("#number").css("border", "2px solid red");
          $("#succnumber").hide();
        } else {
          $("#succnumber").html("Good");
          $("#succnumber").show("slow");
          $("#number").css("border", "2px solid #4caf50");
          $("#mnerror").hide();
          validMobile = true;
        }
      } else if (country == "china") {
        if (firsttwoDigit < 13 || firsttwoDigit > 19) {
          $("#mnerror").html("Number format is not correct for China!");
          $("#mnerror").show("slow");
          $("#number").css("border", "2px solid red");
          $("#succnumber").hide();
        } else if (mnlength != 11) {
          $("#mnerror").html("Invalid! China Mobile number have 11 digit!");
          $("#mnerror").show("slow");
          $("#number").css("border", "2px solid red");
          $("#succnumber").hide();
        } else {
          $("#succnumber").html("Good");
          $("#succnumber").show("slow");
          $("#number").css("border", "2px solid #4caf50");
          $("#mnerror").hide();
          validMobile = true;
        }
      } else if (country == "saudi") {
        if (
          firstthreeDigit != "011" &&
          firstthreeDigit != "058" &&
          firstthreeDigit != "051" &&
          firstthreeDigit != "017" &&
          firstthreeDigit != "014" &&
          firstthreeDigit != "013" &&
          firstthreeDigit != "012"
        ) {
          $("#mnerror").html("Number format is not correct for Saudi Arabia!");
          $("#mnerror").show("slow");
          $("#number").css("border", "2px solid red");
          $("#succnumber").hide();
        } else if (mnlength != 10) {
          $("#mnerror").html(
            "Invalid! Saudi Arabia Mobile number have 10 digit!"
          );
          $("#mnerror").show("slow");
          $("#number").css("border", "2px solid red");
          $("#succnumber").hide();
        } else {
          $("#succnumber").html("Good");
          $("#succnumber").show("slow");
          $("#number").css("border", "2px solid #4caf50");
          $("#mnerror").hide();
          validMobile = true;
        }
      } else {
        $("#mnerror").html("At first select the country!");
        $("#mnerror").show("slow");
        $("#number").css("border", "2px solid red");
        $("#succnumber").hide();
      }
    }
  }

  function checkPass() {
    var pass = $("#pass").val().trim();
    var digit = countDigit(pass);
    if (pass == "") {
      $("#passerror").html("Please enter your password!");
      $("#passerror").show("slow");
      $("#pass").css("border", "2px solid red");
      $("#succpass").hide();
    } else if (pass.length < 4) {
      $("#passerror").html("Password must be at least 4 char!");
      $("#passerror").show("slow");
      $("#pass").css("border", "2px solid red");
      $("#succpass").hide();
    } else if (digit == 0) {
      $("#passerror").html("Please enter at least 1 digit!");
      $("#passerror").show("slow");
      $("#pass").css("border", "2px solid #ea7c19");
      $("#succpass").hide();
    } else if (pass.length >= 4 && pass.length <= 5) {
      $("#passerror").html("week!");
      $("#passerror").show("slow");
      $("#pass").css("border", "2px solid #ea7c19");
      $("#succpass").hide();
    } else {
      $("#succpass").html("strong!");
      $("#succpass").show("slow");
      $("#pass").css("border", "2px solid #4caf50");
      $("#passerror").hide();
      validPass = true;
    }
  }

  //   count digit from password

  function countDigit(x) {
    var ch = "";
    var c = 0;
    for (var i = 0; i < x.length; i++) {
      ch = x.charAt(i);
      if (ch >= 0 && ch <= 9) {
        c++;
      }
    }
    return c;
  }

  function checkCpass() {
    var pass = $("#pass").val().trim();
    var cpass = $("#cpass").val();
    if (cpass == "") {
      $("#cpasserror").html("Please enter your password again!");
      $("#cpasserror").show("slow");
      $("#cpass").css("border", "2px solid red");
      $("#succcpass").hide();
    } else if (pass != cpass) {
      $("#cpasserror").html("wrong password!");
      $("#cpasserror").show("slow");
      $("#cpass").css("border", "2px solid red");
      $("#succcpass").hide();
    } else {
      $("#succcpass").html("Good");
      $("#succcpass").show("slow");
      $("#cpass").css("border", "2px solid #4caf50");
      $("#cpasserror").hide();
      validCPass = true;
    }
  }

  /*----test form----*/

  $("#form").submit(function () {
    if (
      validName == true &&
      validUsername == true &&
      validcountry == true &&
      validMobile == true &&
      validPass == true &&
      validCPass == true
    ) {
      return true;
    } else {
      return false;
    }
  });
});
