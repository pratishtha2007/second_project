$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
loop:true,
margin:30,
dots:true,
merge:true,
responsiveClass:true,
autoplay:true,
autoplayTimeout:500,
autoplayHoverPause:false,
responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:5
    }
}
})
})