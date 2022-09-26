$(document).ready(function () {

});

window.onload = function () {
  //랜덤 캐릭터 기능 (0~2)
  let rNum = Math.floor(Math.random() * 3);
  let rClass = 'ab-sns-charac0' + rNum;
  let rTag = $('.ab-sns');
  rTag.addClass(rClass);
  // if (rNum == 0) {

  // } else if (rNum == 1) {

  // } else if (rNum == 2) {

  // }
  //메뉴기능 (헤더펼치기)
  let header = $('.header');
  let gnb = $('.gnb');
  let gnbH = gnb.height();

  gnb.mouseenter(function () {
    header.css('height', gnbH);
  }); //hover와 mouseover도 있는데, 걔네는 여러번실행된다고보면됨.

  gnb.mouseleave(function () {
    header.css('height', 70);
  });

  // 비주얼 슬라이드
  new Swiper('.sw-visual', {
    slidesPerView: 8,
    loop: true,
    navigation: {
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next'
    }
  });
};