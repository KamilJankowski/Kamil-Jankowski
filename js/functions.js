$(document).ready(function() {
    //body fade in effect
    $('body').hide();
    $('body').fadeIn(1000);
      
      //website height size
$size = $(window).height();
$('#portfolio').css('height', $size);
$('#services').css('height', $size);
$('#technology').css('height', $size);
$('#about-me').css('height', $size);
$('#contact').css('height', $size);
    
    
});