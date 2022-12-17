$('#newsletter-form').submit(function(event) {
    event.preventDefault(); // prevent the form from being submitted
  
    // get the email address
    const email = $('input[name=email]').val();
  
    // send the email address to the PHP script
    $.ajax({
      type: 'POST',
      url: 'signup-newsletter.php',
      data: { email: email },
      success: function(data) {
        console.log('Result: ' + data);
      }
    });
  });