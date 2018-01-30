(function($) {
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
    width: 1400,
    height: 600,
    space: 0,
    layout: 'fullwidth',
    loop: true,
    preload: 0,
    instantStartLayers: true,
    autoplay: true
  });
})(jQuery);
