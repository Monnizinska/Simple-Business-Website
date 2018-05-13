
$(window).scroll(function () {
    if ($(document).scrollTop() > 100) {

        
        $("#main-nav").css({
            "background-color": "white"
        });

        $(".nav-item").css({
            "color": '#678e96',
            "opacity": 1.0
        });
        
    } else {

        $("#main-nav").css({
            "background-color": "transparent"
        });
        $(".nav-item").css({
            "color": "transparent"
        });
    }
});
