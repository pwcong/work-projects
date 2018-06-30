$(document).ready(function() {
  // swiper切换
  var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    }
  });

  // slider切换
  // var bannerSlider = new Slider($('#banner_tabs'), {
  //   time: 3000,
  //   delay: 400,
  //   event: 'hover',
  //   auto: true,
  //   mode: 'fade',
  //   controller: $('#bannerCtrl'),
  //   activeControllerCls: 'active'
  // });
  // $('#banner_tabs .flex-prev').click(function() {
  //   bannerSlider.prev();
  // });
  // $('#banner_tabs .flex-next').click(function() {
  //   bannerSlider.next();
  // });

  // 滑动至顶部
  $('#top').click(function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      200
    );
  });
});
