(function ($, window, document, undefined) {
  'use strict';

  // init cubeportfolio
  $('#js-grid-agency').cubeportfolio({
    filters: '#js-filters-agency',
    loadMore: '#js-loadMore-agency',
    loadMoreAction: 'click',
    layoutMode: 'grid',
    defaultFilter: '*',
    animationType: 'slideLeft',
    gapHorizontal: 15,
    gapVertical: 0,
    gridAdjustment: 'responsive',
    mediaQueries: [{
      width: 1500,
      cols: 4
    }, {
      width: 1100,
      cols: 4
    }, {
      width: 800,
      cols: 3
    }, {
      width: 480,
      cols: 2
    }, {
      width: 320,
      cols: 1
    }],
    caption: 'zoom',
    displayType: 'fadeIn',
    displayTypeSpeed: 100
  });
})(jQuery, window, document);

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

// Alert Messages
$(document).ready(function() {
  setTimeout(function() {
    $(".notice-alert-messages").fadeOut("slow", function() {
      $(this).remove();
    })
  }, 3000 );
});
