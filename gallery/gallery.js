$(document).ready(function(){
    $("#up").click(function(event){
        event.preventDefault();
        $("html, body").animate({
        scrollTop: 0}, '300');
        return false;
    });
});

        $(document).ready(function () {
        $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        });

        $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        });

        $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate( {
        scrollTop: $($(this).attr('href')).offset().top - 100
        });
        });

        $('#up').on('click', function () {
        $('html, body').animate(  {
        scrollTop: 0
        });
        });

        const nav = $("#navigationBar");
        const navTop = nav.offset().top;
        $(window).on("scroll", stickyNavigation);
        function stickyNavigation() {
        var body = $("body");
        if($(window).scrollTop() >= navTop) {
        body.css("padding-top", nav.outerHeight() + "px");
        body.addClass("fixedNav");
        } else {
        body.css("padding-top", 0);
        body.removeClass("fixedNav");
        }
        }
        });
