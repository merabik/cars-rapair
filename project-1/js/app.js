$(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slide(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 2500);
                return false;
            }
        }
    });

    // Menu 
    $(document).on("click",".open-menu",function() {
        $('.full-menu').removeClass('bounceOutLeft').addClass('bounceInLeft');
        $("#menu-icon").attr('src',"img/cancel.png");
        $(".menu").removeClass('open-menu').addClass('close-menu');
        $('.full-menu').show();
    });

    $(document).on("click",".close-menu",function() {
        $('.full-menu').removeClass('bounceInLeft').addClass('bounceOutLeft');
        $("#menu-icon").attr('src',"img/icon.png");
        $(".menu").removeClass('close-menu').addClass('open-menu');
    });

});


// window.sr = ScrollReveal();
// sr.reveal('.navbar', {
// 	duration: 1500,
// 	origin:'bottom'
// });