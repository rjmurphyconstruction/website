/*
 Project - Learn Education Template
 */

$(document).ready(function () {
  //animated scroll menu
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
      $('.navbar-sticky').addClass('is-stick');
    }
    if (scroll <= 0) {
      $('.navbar-sticky').removeClass('is-stick');
    }
  });

  //back to top
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.scrollToTop').click(function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });

  //courses carousel
  $(".service-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });

  //Testimonial carousel
  $(".testi-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  //wow animations
  var wow = new WOW(
    {
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 100, // distance to the element when triggering the animation (default is 0)
      mobile: false        // trigger animations on mobile devices (true is default)
    }
  );
  wow.init();
});
