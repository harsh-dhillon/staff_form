<?php

include('db_config.php');

// Taking all 4 values from the form data.
$full_name =  $_REQUEST['full_name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$occupation = $_REQUEST['occupation'];

// Performing insert query execution
// here our table name is staff_info_table
$sql = "INSERT INTO staff_info_table(full_name, email, phone, occupation) VALUES ('$full_name','$email', '$phone', '$occupation')";

if(mysqli_query($conn, $sql)){
    $entry_data = 'Full name - '.$full_name. '\nPhone - '.$phone. '\nEmail - '.$email. '\nOccupation - '.$occupation;
    echo '<script>';
    echo 'alert("Added Following Entry :\n' . $entry_data .'");';
    echo '</script>';
    $_SESSION['message'] = 'Data added successfully';
}

// Close connection
mysqli_close($conn);
?>
