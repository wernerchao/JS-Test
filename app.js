$(function() {
    //Get the form
    var form = $('#ajax-contact');
    //Serialize the form data
    var formData = $(form).serialize();
    
    //Get the error/success message
    var formMessages = $('#form-messages');
    
    //Set up an event listener for the contact form
    $(form).submit(function(event) {
        //Stop the browser from submitting the form
        event.preventDefault();
    });
    
    //Submit the form using AJAZ
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    })
    
    .done(function(response) {
       //Make sure that the formMessages div has the 'success' class
       $(formMessages).removeClass('error');
       $(formMessages).addClass('success'); 
       
    //Set the message text
    $(formMessages).text(response);
    
    //Clear the form
    $('#name').val('');
    $('#email').val('');
    $('#phone').val('');
    $('#message').val('');
    })
    
    .fail(function(data) {
        //Make sure that the formMessages div has the 'error' class
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');
        
        //Set the message text
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured')
        }
    });
    
    });