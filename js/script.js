// Preloder
$(window).on('load', function(){
  $('#loader').fadeOut();
  $('#preloder').delay(200).fadeOut("slow")
});


$(document).ready(function () {
  $(".small-nav-page").click(function () {
    $(".small-dropdown").slideToggle();
    $(".small-arrow").toggleClass("right-rotate");
  });

  $(".carousel-animate")
    .children()
    .addClass("animate__animated animate__slideInUp");

  //    Masonry init
  $(".grid").masonry({
    // options
    itemSelector: ".grid-item, .grid-item-1",
    columnWidth: 0,
  });

  // Counter
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });
});

// Owl Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    nav: false,
    responsive: {
      992: {
        items: 3,
      },
      768: {
        items: 2,
      },
      320: {
        items: 1,
      },
      0: {
        items: 1,
      }
    },
    dotsEach: true,
    autoplay: true,
    autoHeight: false,
    smartSpeed: 1200
  });
});
