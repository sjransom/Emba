// Slow scroll

$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

// Modal
$("#sticky").modal({
  escapeClose: false,
  clickClose: false,
  showClose: false
});


// Instafeed
var feed = new Instafeed({
  get: 'user',
  userId: '7966533289',
  accessToken: '7966533289.1677ed0.fd3fb3f9fd1645f888177c1ea2914ac3',
  limit: '6',
  template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>'
});
feed.run();