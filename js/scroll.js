let showAbout = $('#main-header').height() / 4;
let showSkills = $('#main-header').height() + $('#about').height() / 2;
let showPortfolio = $('#main-header').height() + $('#about').height() + $('#skills').height() / 1.5;
let showContact = $('#main-header').height() + $('#about').height() + $('#skills').height() + $('#portfolio').height()/ 1.5;

$(window).scroll(function () {
    if ($(document).scrollTop() >= showAbout) {

        $(".about").css({
            "animation-name": "showme"
        });
    }
    if ($(document).scrollTop() >= showSkills) {
        $("#skills").css({
            "animation-name": "showmeup"
        });
    }
    if ($(document).scrollTop() >= showPortfolio) {
        $('.port').css({
            "animation-name": "showmeup"
        });
    }
    if ($(document).scrollTop() >= showContact) {
        $('#contact').css({
            "animation-name": "showmeup"
        });
    }
});