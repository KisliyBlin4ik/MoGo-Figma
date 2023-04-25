$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
});
//https://www.youtube.com/watch?v=chJQofBSx94
//скрипт из ролика

$( '.header__link' ).on("click", function(){//при клике на ссылку в бургер меню, закрывает его
    $('.header__burger').click();
  });


//<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
//подключть для работы скрипта jquery

new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1,
    loop: true,
    initialSlide: 1,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});