$(document).ready(function(){
    $('#nav-icon0,#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });
});


$(function() {

    // Owl Carousel
    let owl = $(".owl-carousel");
    owl.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>'
        ],
        responsive:{ // уменьшаем кол-во слайдов
            0:{ // ширина от 0 px
                items:1
            },
            570:{ // ширина от 570 px
                items:2
            },
            807:{ // от 807 px
                items:3
            },
        }
    });

});

