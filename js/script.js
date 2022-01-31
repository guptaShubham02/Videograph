$( document ).ready(function(){
   $('.small-nav-page').click(function(){
       $('.small-dropdown').slideToggle();
       $('.small-arrow').toggleClass('right-rotate');
   });

   $('.carousel-animate').children().addClass('animate__animated');
   $('.carousel-animate').children().addClass('animate__slideInUp');
});
