$(function(){
//    $('.anchor').click(function(){
//		$('html, body').animate({
//        scrollTop: $( $.attr(this, 'href') ).offset().top - 80}, 750);
//		return false;
//	});
    // grab target from URL hash (i.e. www.mysite.com/page-a.html#target-name)
});


jQuery(document).ready(function($) {

    $('#header').hcSticky({
        stickTo: 'body'
    });

    var header = $("#header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 150) {
            header.addClass("active");
        } else {
            header.removeClass("active");
        }
    });

    $('.slider-kv').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
//      speed: 300,
    });
    $('.slider-products').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 425,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

//    var hash= window.location.hash
//if ( hash == '' || hash == '#' || hash == undefined ) return false;
//      var target = $(hash);
//      headerHeight = 120;
//      target = target.length ? target : $('[name=' + hash.slice(1) +']');
//      if (target.length) {
//        $('html,body').stop().animate({
//          scrollTop: target.offset().top - 125 //offsets for fixed header
//        }, 'linear');
//      }
});

jQuery(document).ready(function(){
// run on DOM ready
// grab target from URL hash (i.e. www.example.com/page-a.html#target-name)

var target = window.location.hash;

// only try to scroll to offset if target has been set in location hash

if ( target != '' ){
    var $target = jQuery(target);
    jQuery('html, body').stop().animate({
    'scrollTop': $target.offset().top + 240}, // set offset value here i.e. 50
    500,
    'swing',function () {
    window.location.hash = target + 240 ;
    });
}
});
