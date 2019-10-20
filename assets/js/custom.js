$(function(){
//    $('.anchor').click(function(){
//		$('html, body').animate({
//        scrollTop: $( $.attr(this, 'href') ).offset().top - 120}, 750);
//		return false;
//	});
//    $('#customFile').on('change',function(){
//        var fileName = $(this).val();
//        $(this).next('.custom-file-label').html(fileName);
//    });

//    $(window).on("scroll", function() {
//        if($(window).scrollTop() > 100) {
//            $("#header").addClass("active");
//        } else {
//            //remove the background property so it comes transparent again (defined in your css)
//           $("#header").removeClass("active");
//        }
//    });




//    var header = $("#header");
//    $(window).scroll(function() {
//        var scroll = $(window).scrollTop();
//
//        if (scroll >= 150) {
//            header.addClass("active");
//        } else {
//            header.removeClass("active");
//        }
//    });

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
});
