(function($) {
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

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

  var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 100, mobile: false });
  wow.init();

  var slider = new MasterSlider();
  slider.control('arrows');
  slider.control('timebar', {insertTo: '#masterslider'});
  slider.control('bullets');
  slider.setup('masterslider', {
    width: 1600,
    height: 750,
    space: 0,
    layout: 'fullwidth',
    fillMode: 'stretch',
    loop: true,
    preload: 0,
    instantStartLayers: true,
    autoplay: true
  });
})(jQuery);
