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
    dots: true,
    dotsEach: 1,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>',
    ],
    responsive: {
      0: {},
      600: {
        items: 3,
      },
      991: {
        items: 4,
      },
    },
  });

  // init Isotope
  // isotope
  var $grid = $(".gallery-isotope-grid").isotope({
    // options
    // filter: "*",
  });
  // filter items on button click
  $(".gallery-isotope-nav").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
  // Get the container element
  var btnContainer = document.getElementById("gallery-isotope-nav");

  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.querySelectorAll("#gallery-isotope-nav li");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (event) {
      var current = btnContainer.getElementsByClassName("active");
      current[0].className = current[0].className.replace("active", "");
      // target.className += " active";
      setTimeout(function () {
        event.target.classList.add("active");
      }, 10);
    });
  }
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);
});
