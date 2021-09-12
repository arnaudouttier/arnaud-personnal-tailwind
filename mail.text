<?php

if(!empty($_POST['email']);
    $email = $_POST['email'];
}

$message = "<p>Bonjour!</p>";
$message .= "<p>$email a essayé de vous contacter depuis votre sire arnaudouttier.github.io/ao</p>";

$to_email = 'arnoutti@gmail.com';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Biloo <noreply@ydomain.com>';

mail($to_email, $message, implode("\r\n", $headers));

?>

