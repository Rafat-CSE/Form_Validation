
<?php include 'config.php' ?>

<?php


class Database
{
    public $hostName = HOST_NAME;
    public $userName = USER_NAME;
    public $userPass = USER_PASS;
    public $dbName = DB_NAME;

    public $db;
    public $error;

    // -------create a constructor-------

    public function __construct()
    {
        $this->connect();
    }

    // -------Database connection-------

    private function connect()
    {
        $this->link = new mysqli($this->hostName, $this->userName, $this->userPass, $this->dbName);
        if (!$this->link) {
            $this->error = "Database not connected";
        }
    }

    // -------if email is already exist or not-------

    public function findEmail($enterUserEmail)
    {
        $sql = "SELECT * FROM info_tbl WHERE email='$enterUserEmail'";
        if ($row = mysqli_query($this->link, $sql)) {
            if (mysqli_num_rows($row) > 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}
?>