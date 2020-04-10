$(function(){



    $('.products__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev-slide'),
        nextArrow: $('.next-slide'),
        

    });

  
    var mixer = mixitup('.products__inner-box');
});