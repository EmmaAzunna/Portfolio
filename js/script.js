
$(document).ready(function(){
    $('.scroll-up-btn').hide();
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if ($(this).scrollTop() > 100) {
            $('.scroll-up-btn').show().fadeIn();
        } else {
            $('.scroll-up-btn').fadeOut().hide();
        }
    });

//slide up script
$('.scroll-up-btn').click(function(){
    $('html, body').animate({scrollTop : 0},360);
    return false;
});
    // toggle menubar
     $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
     });  
     
    //  owl carousel
    $('.carousel').owlCarousel({
        // navigation:true,
        margin:20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    }); 
  
});

