
<?php include 'Database.php' ?>

<?php

class Validation
{
    public $error;
    public function validate($data)
    {
        $userName = $data['userName'];
        $email = $data['email'];
        $pass = $data['pass'];
        $cPass = $data['cPass'];

        $uN = $this->userName($userName);
        $em = $this->email($email);
        $pas = $this->password($pass);
        $cpas = $this->cPassword($cPass, $pass);
        if ($uN) {
            return $uN;
        } elseif ($em) {
            return $em;
        } elseif ($pas) {
            return $pas;
        } elseif ($cpas) {
            return $cpas;
        } else {
            $success = "<span style='color: green'>Registration Successful !</span>";
            return $success;
        }
    }

    private function userName($username)
    {
        $userName = $username;
        $length = strlen($userName);
        if ($userName == "") {
            $this->error = "Please enter your username !";
            return $this->error;
        } else {
            if ($length < 5) {
                $this->error = "Username must need 5 char !";
                return $this->error;
            } else {
                $fc = substr($userName, 0, 1);
                if (is_numeric($fc)) {
                    $this->error = "Username cannot begin with a number !";
                    return $this->error;
                }
            }
        }
    }

    private function email($emailData)
    {
        $email = $emailData;
        if ($email == "") {
            $this->error = "Please enter your email !";
            return $this->error;
        } else {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $this->error = "Invalid Email !";
                return $this->error;
            } else {
                $obj = new Database;
                $checkEmail = $obj->findEmail($email);
                if ($checkEmail == true) {
                    $this->error = "This email is already exist !";
                    return $this->error;
                }
            }
        }
    }

    private function password($passData)
    {
        $pass = $passData;
        $length = strlen($passData);
        if ($pass == "") {
            $this->error = "Please enter your password !";
            return $this->error;
        } else {
            if ($length < 5) {
                $this->error = "Password must need 5 char !";
                return $this->error;
            }
        }
    }

    private function cPassword($cpassData, $chackPass)
    {
        $cpass = $cpassData;
        if ($cpass == "") {
            $this->error = "Enter your password again !";
            return $this->error;
        } else {
            if ($cpass != $chackPass) {
                $this->error = "Password not matched !";
                return $this->error;
            }
        }
    }
}

?>