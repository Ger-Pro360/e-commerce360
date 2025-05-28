AOS.init();

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 50) {
    $(".navbar").addClass("navbar-scrolled");
  } else {
    $(".navbar").removeClass("navbar-scrolled");
  }
});

$(window).on('load', function () {
  $('.loader').fadeOut('slow');
});

$(document).ready(function () {
  $('.counter').each(function () {
    var $this = $(this), countTo = $this.attr('data-count');
    $({ countNum: $this.text() }).animate({ countNum: countTo }, {
      duration: 3000,
      easing: 'swing',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      }
    });
  });
});