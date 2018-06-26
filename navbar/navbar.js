function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY - 60){
        $('.navbar').addClass("scrolled");
        $('.nav-link').addClass("scrolled");
    }
    else{
        $('.navbar').removeClass("scrolled");
        $('.nav-link').removeClass("scrolled");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}