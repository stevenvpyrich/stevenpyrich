$(function() {
  var scrolloffset = 55; //variable for menu height


  $(window).on('activate.bs.scrollspy', function () {

    var hash = $('.site-nav').find('a.active').attr('href');

    if(hash !== '#layout-hero') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }

  });

  $('#siteModal').on('show.bs.modal', function (event) {
    $(this)
      .find('.modal-content img')
      .attr('src', $(event.relatedTarget).data('highres'));
  });

  //replace IMG inside carousels with a background image
  $('#my-carousel .fade .carousel-item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });


  //Use smooth scrolling when clicking on navigation
  $('.navbar-nav a:not(.dropdown-toggle)').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-scrolloffset
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
});
