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


new VenoBox({
    selector: '.my-video-links',
});