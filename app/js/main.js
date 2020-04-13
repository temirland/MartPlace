$(function(){
    
    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "12px",
        readOnly: true
        
    });

    
    
    
    $('.week__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-slide__week'),
        nextArrow: $('.next-slide__week'),
        variableWidth: true,
        variableHeight: true
        
        
    });

    var mixer = mixitup('.products__inner-box');

    $('.products__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev-slide'),
        nextArrow: $('.next-slide'),
        variableWidth: true,
        variableHeight: true
        
        
    });



  
});