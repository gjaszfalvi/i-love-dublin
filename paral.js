/* 
 * This script animates the nav click on the page
 * Based on Keith Clark Parallax by jQuery idea
 * http://keithclark.co.uk/articles/practical-css-parallax/smooth-scroll-jquery/
 */

var container = $('.container');

(function() {
  $('nav > ul > li').click(function() {
      console.log("li clicked");
      var ahref = $(this).find('a').attr('href');
    
    container.animate({
        scrollTop: container.scrollTop() + $(ahref).offset().top
    }, 500);
    return false;
  });
}());


$(container).scroll (function(){

   var scroll = $(container).scrollTop();                
      
   if (scroll > 0 ) {
       $('nav').addClass('scrolled');
   }
  
    if (scroll <= 0 ) {
      $('nav').removeClass('scrolled');
    }
  
});

