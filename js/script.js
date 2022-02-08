$(document).ready(function () {
  $('.small-nav-page').click(function () {
    $('.small-dropdown').slideToggle();
    $('.small-arrow').toggleClass('right-rotate');
  });

  $('.carousel-animate').children().addClass('animate__animated animate__slideInUp');

  //    Masonry init
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item, .grid-item-1',
    columnWidth: 0,
    // columnWidth: '.grid-sizer',
    // percentPosition: true,
    // gutter: '10px'
  });
});
