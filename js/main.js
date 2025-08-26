
$('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['o’neul', 'Value', "Menu", "Room", ""],
    showActiveTooltip: true,
    responsiveWidth: 1400,
});



$(".btn_ham").click(function () {
    $(".mgnb_wrap").animate({ "left": "0" });
});
$(".btn_colse").click(function () {
    $(".mgnb_wrap").animate({ "left": "100%" });
});




const menu_list = new Swiper(".menu_list", {
    slidesPerView: 1, //한 줄에 보이는 슬라이드 갯수
    spaceBetween: 20,
    breakpoints: {
        1500: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 2000,
})






const room_list = new Swiper(".room_list", {
    slidesPerView: 1, //한 줄에 보이는 슬라이드 갯수
    spaceBetween: 20,
    breakpoints: {
        1500: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 1.5,
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 2000,
});



























































