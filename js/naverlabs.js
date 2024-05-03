var swiper = new Swiper(".naverlabs-slide", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
// 슬라이드

const gnb = document.querySelector('.nav');
const menuButton = document.querySelector('.mt-bars');
menuButton.addEventListener('click', function () {
  gnb.classList.add("on");
});
const closeButton = document.querySelector('.t-xmark');
closeButton.addEventListener('click', function () {
  gnb.classList.remove("on");
});
// 버튼


