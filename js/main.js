(function ($) {
  "use strict";

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".testimonial-slider-active").owlCarousel({
    loop: true,
    margin: 17,
    items: 4,
    responsiveClass: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>',
    ],
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);
});
