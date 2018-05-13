$(function(){

    $(window).scroll(function() {
        
        if ( $(window).scrollTop() > 100 ){
        $("#main-nav").css({opacity: "1.0", color: "#678e96"});
    
            
        }
        else {
            
        $("#main-nav").css({opacity: "0", color: "coral"});
        }           
        
    })
    
});