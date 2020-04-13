$(function(){



    $('.products__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev-slide'),
        nextArrow: $('.next-slide'),
        variableWidth: true,
        variableHeight: true
        

    });


    // $('.search__drop-down').on('click', function(){
    //     $(this).children('.drop-down__link').toggleClass('active');
    //     $(this).children('.drop-down__categories').toggleClass('active');
    // });
  
    var mixer = mixitup('.products__inner-box');
});