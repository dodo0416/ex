var swipermainpage = new Swiper(".mainpage", {
  pagination: {
    el: ".mainpage .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".mainpage .swiper-button-next",
    prevEl: ".mainpage .swiper-button-prev",
  }, spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swipermainpage6 = new Swiper(".mainpage6", {
  navigation: {
    nextEl: ".mainpage6 .swiper-button-next",
    prevEl: ".mainpage6 .swiper-button-prev",
  }, spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".mainpage6 .swiper-pagination",
    clickable: true,
  },
});

$(function () {
  $("nav.inner i").click(function () {
    $("nav").toggleClass("on");
    $(this).toggleClass("fa-xmark")
  });

  $(".mobile").click(function () {
    $("nav").toggleClass("on");
    $(this).toggleClass("fa-xmark")
  });

  $('.gnbmenu').click(function () {
    $(this).next(".snb").stop().slideToggle(300);
    return false
  });
});
