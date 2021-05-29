$(document).ready(function(){
    $('#nav-icon0,#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 3,
    slideToClickedSlide: true,
    grabCursor: true,
});





