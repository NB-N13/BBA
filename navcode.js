//Page Load Animation
$(document).ready(function() {
  $('.loading-screen').show().css('opacity', '1');

  setTimeout(function() {
    $('.loading-screen').animate({
      opacity: 0
    }, 400, 'linear', function() {
      $('.loading-screen').remove();
    });
  }, 100);
});

//Scrolling Toggle
$(document).ready(function() {
  $('[n13-scroll="off"]').click(function() {
    $('.body-background').addClass('no-scroll');
  });

  $('[n13-scroll="on"]').click(function() {
    $('.body-background').removeClass('no-scroll');
  });
});
