/* 
 * the contact form was based on http://tuttoaster.com/create-an-ajaxjqueryphp-contact-form/
 * but fixed and upgraded by
 * @author Gabor Jaszfalvi
 * 2016
 */

$(function() {
    // clear the fields on focus
    $('#name').focus(function() {
		$(this).val('');
	});
    $('#email').focus(function() {
		$(this).val('');
	});
    $('#comment').focus(function() {
		$(this).val('');
	});
 
    // when the Send is clicked
    $('input#submit').click(function() {
        // declare the variables
        var username = $('#name').val(),
            email = $('#email').val(),
            comment = $('#comment').val();
        
        //Error texts
        var name_error =    document.getElementById('name_error');
        var email_error =   document.getElementById('email_error');
        var comment_error = document.getElementById('comment_error');

        //Error Count
        var error_count=0;

        //Regex String for email validation
        var email_regex = /^([A-Za-z0-9_\.-]+)@([\dA-Za-z\.-]+)\.([A-Za-z\.]{2,6})$/;

        //Test Username
        if(username === '') {
            name_error.style.display = "block";
            error_count += 1;
        } else {name_error.style.display = "none";}

        //Test Email
        if(!email_regex.test(email)) {
                email_error.style.display = "block";
                error_count += 1;
        } else {email_error.style.display = "none";}

        //Blank Comment?
        if(comment === '') {
            comment_error.style.display = "block";
            error_count += 1;
        } else {comment_error.style.display = "none";}

        // run the php post
        if(error_count === 0) {
            $.ajax({
                type: "post",
                url: "contact.php",
                data: "name=" + username + "&email=" + email + "&comment=" + comment,
                error: function() {/* troubleshooting */},
                success: function () {
                    $('.success').slideDown('slow');
                    $('#name').val('');
                    $('#email').val('');
                    $('#comment').val('');
                }
            });
        } else { /* troubleshooting */ }
        return false;
    });
});


