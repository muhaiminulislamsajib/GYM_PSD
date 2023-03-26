
$(document).ready(function() {
    $(function() {
        var header = $(".nav_main");
      
        $(window).scroll(function() {    
            var scroll = $(this).scrollTop();
            if (scroll >= 20) {
                header.addClass("scrolled");
            } else {
                header.removeClass("scrolled");
            }
        });
      
    });

    $('.testi_main').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    new VenoBox({
        selector: '.my-video-links',
    });
}); 


$('.counter').counterUp({
    delay: 10,
    time: 1000
});
