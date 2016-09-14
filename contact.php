/* 
*  the contact form was based on http://tuttoaster.com/create-an-ajaxjqueryphp-contact-form/
*  but fixed and upgraded by
*  @author Gabor Jaszfalvi
*  2016
*/


<?php

//Prefedined Variables
$to = "codegabor@gmail.com";
$subject = "Message from I-Love-Dublin";

if($_POST) {
	// Collect POST data from form
	$name = stripslashes($_POST['name']);
	$email = stripslashes($_POST['email']);
	$comment = stripslashes($_POST['comment']);

	// Define email variables
	$message = date('d/m/Y')."\n" . $name . " (" . $email . ") sent the following comment:\n" . $comment;
	$headers = 'From: '.$email.'\r\n\'Reply-To: ' . $email . '\r\n\'X-Mailer: PHP/' . phpversion();

	//Validate
	$header_injections = preg_match("#(\r|\n)(to:|from:|cc:|bcc:)#", $comment);

	if( ! empty($name) && ! empty($email) && ! empty($comment) && ! $header_injections ) {
		if( mail($to, $subject, $message, $headers) ) {
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
}
?>