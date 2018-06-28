$(document).ready(function() {
  $('.marquee').marquee({
    duration: 5000,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true
  });

  // 模拟点击客服按钮
  $('.kefu').click(function() {
    $('#WIDGET-TRIGGER').click();
  });

  new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true
  });

  setTimeout(function() {
    $('#time1').html(dayjs().format('hh:mm:ss'));
    $('#msg1').show();

    setTimeout(function() {
      $('#time2').html(dayjs().format('hh:mm:ss'));
      $('#msg2').show();
    }, 1000);
  }, 1000);
});
