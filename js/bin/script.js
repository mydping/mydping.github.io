$(document).ready(function () {
    $('.parallax').parallax();
    $(".button-collapse").sideNav({edge:'right',closeOnClick: true });
    $('.materialboxed').materialbox();
    $('#about-me h6').css('line-height','25px');
    $('#about-me h6, #projects .card-reveal p').addClass('pink-text text-darken-3');
    $('#about-me a, #projects h2 a').addClass('grey-text text-darken-4');
    $('footer a').addClass('grey-text text-lighten-4');
    $('footer a').hover(function(){$(this).toggleClass('text-darken-4')});
    $('#mobile-demo, body').css('background-color','#fcfcfc');
    $('figure img').css('border','5px solid #ad1658');
    $('#skills li').addClass('chip');
    $('#about-me .chip').addClass('waves-effect');
    $('.card').css('padding','0');
    $('.scrollspy').scrollSpy({scrollOffset:0});
    $('#pinpush').pushpin({ top:550});//550
    $('#close-menu').click(function(){  $('#pinpush').fadeOut(); });
    $('i').addClass('fa');
    $('#header nav, span.badge, .floating, .page-footer, #pinpush, #mobile-demo').addClass('pink pink-lighten-3');
    $('footer li a, footer p').addClass('grey-text text-lighten-3');
    $('footer h5').addClass('white-text');
    $('img').addClass('responsive-img');
    $('.card-image').addClass('waves-effect waves-block waves-light');
    $('.card-image img').addClass('activator');
});