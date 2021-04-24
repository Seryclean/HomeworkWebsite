$(document).ready(function(){
    $("#bt").on('click',function(){
        $("body").toggleClass("newcolorA");
    });
});

$('.sliderA').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });