$(function() {
  /////////é€è‡³æŸåœ°////////////
  $('.dis_add')
    .mouseenter(function() {
      $('.hide_add').css({ display: 'block' });
    })
    .mouseleave(function() {
      $('.hide_add').css({ display: 'none' });
    });
  $('.hide_add ul li a').click(function() {
    $('.hide_add').css({ display: 'none' });
  });
  $('.hide_add ul li').click(function() {
    $('.hide_add ul li')
      .find('a')
      .removeClass('selected');
    $(this)
      .find('a')
      .addClass('selected');
  });
  $('.hide_add ul li a').click(function() {
    $('.hide_add').css({ display: 'none' });
  });
  /////////////////////////
  $('.dao_list a').click(function() {
    $(this)
      .addClass('color')
      .siblings()
      .removeClass('color');
  });
  /*æŽ§åˆ¶æ˜¾ç¤ºæˆ–æ¶ˆå¤±1	*/
  $('.cates').mouseenter(function() {
    var cat = $(this).attr('mt-ct');
    $('.b-' + cat + '')
      .show()
      .siblings()
      .hide();
  });
  $('.important').mouseleave(function() {
    $('.import_list').hide();
  });
  /*ä¾§è¾¹æ æ¯å—åˆ’ä¸Šçš„æ—¶å€™æ·»åŠ é¢œè‰²å—*/
  $('aside ul li').mouseenter(function() {
    $(this)
      .addClass('yanses')
      .siblings()
      .removeClass('yanses');
  });
  /*æ»šåŠ¨ä¹‹åŽå›ºå®šå®šä½*/
  $(window.document).scroll(function() {
    if ($(window).scrollTop() > 500) {
      $('.dao_hang').addClass('fixed_dh');
      $('aside').css({ display: 'none' });
      $('.advertisement').css({ display: 'none' });
      /*ä¾§è¾¹æ çš„å‡ºçŽ°å’Œæ¶ˆå¤±*/
      $('.important')
        .mouseenter(function() {
          $('aside').css({ display: 'block', background: '#fff' });
        })
        .mouseleave(function() {
          $('aside').css({ display: 'none' });
        });
    }
    if ($(window).scrollTop() < 500) {
      $('.dao_hang').removeClass('fixed_dh');
      $('aside').css({ display: 'block' });
      $('.advertisement').css({ display: 'block' });
      /*ä¾§è¾¹æ çš„å‡ºçŽ°å’Œæ¶ˆå¤±*/
      $('.important').mouseleave(function() {
        $('aside').css({ display: 'block' });
      });
    }
  });
  //////////////////////////////
  //ç‚¹å‡»é¡µé¢ç§»åŠ¨åˆ°å¯¹åº”ä½ç½®
  $('.fixed_position_1 ul li').click(function() {
    $('html,body').animate(
      {
        scrollTop:
          $('.as')
            .eq($(this).index())
            .offset().top - 100
      },
      500
    );
  });
  //æ»šåŠ¨æ¡ç§»åŠ¨åˆ°å¯¹åº”çš„ä½ç½®ï¼Œå¯¹åº”çš„æ ‡ç­¾é«˜äº®æ˜¾ç¤º
  $(window.document).scroll(function() {
    for (var i = 0; i < $('.as').length; i++) {
      if (
        $(window).scrollTop() >
        $('.as')
          .eq(i)
          .offset().top -
          300
      ) {
        $('.fixed_position_1 ul li')
          .eq(i)
          .addClass('addcss')
          .siblings('.fixed_position_1 ul li')
          .removeClass('addcss');
      }
    }
  });
  //æ¥¼å±‚çš„å‡ºçŽ°æˆ–æ¶ˆå¤±
  $(window.document).scroll(function() {
    if ($(window).scrollTop() > 500) {
      $('.fixed_position_1').css({ display: 'block' });
    }
    if ($(window).scrollTop() < 500) {
      $('.fixed_position_1').css({ display: 'none' });
    }
  });
  ///////////////////////
  /*æŽ§åˆ¶æ˜¾ç¤ºæˆ–æ¶ˆå¤±2	*/
  $('.dog').mouseenter(function() {
    var dogs = $(this).attr('dg-floor');
    var dog = $(this).attr('dg-ct');
    $('.f-' + dogs + '-' + dog + '')
      .show()
      .siblings()
      .hide();
  });
  /*æ·»åŠ è‰²å—*/
  $('.detailed_navigation ul li').mouseenter(function() {
    $(this)
      .addClass('yadi')
      .siblings()
      .removeClass('yadi');
  });
  ///////////////////////////
  var i = 0;
  var clone = $('.lunbobanner .lunboimg li')
    .first()
    .clone();
  $('.lunbobanner .lunboimg').append(clone);
  var size = $('.lunbobanner .lunboimg li').size();
  /*è‡ªåŠ¨è½®æ’­*/
  var t = setInterval(moveL, 5000);
  /*å®šæ—¶å™¨çš„å…³é—­ä¸Žå¼€å¯*/
  $('.kongzhianniu').hover(
    function() {
      clearInterval(t);
    },
    function() {
      t = setInterval(moveL, 5000);
    }
  );

  $('.btnr').click(function() {
    moveL();
  });
  function moveL() {
    i++;
    if (i == size) {
      $('.lunboimg').css({ left: 0 });
      i = 1;
    }
    $('.lunboimg')
      .stop()
      .animate({ left: -i * 1200 }, 500);
  }

  $('.btnl').click(function() {
    moveR();
  });
  function moveR() {
    i--;
    if (i == -1) {
      $('.lunboimg').css({ left: -(size - 1) * 1200 });
      i = size - 2;
    }
    $('.lunboimg')
      .stop()
      .animate({ left: -i * 1200 }, 500);
  }
  /////////////////////////////////
  var offset = $('.toolbar-item-weixin').offset();
  $('.add_scar').click(function(event) {
    var addcar = $(this);
    var img = addcar
      .parent()
      .parent()
      .find('img')
      .attr('src');
    var flyer = $('<img class="u-flyer" src="' + img + '">');
    var tops = $(window).scrollTop();

    flyer.fly({
      start: {
        left: event.pageX, //å¼€å§‹ä½ç½®ï¼ˆå¿…å¡«ï¼‰#flyå…ƒç´ ä¼šè¢«è®¾ç½®æˆposition: fixed
        top: event.pageY - tops, //å¼€å§‹ä½ç½®ï¼ˆå¿…å¡«ï¼‰
        width: 0, //ç»“æŸæ—¶å®½åº¦
        height: 0 //ç»“æŸæ—¶é«˜åº¦
      },
      end: {
        left: offset.left, //ç»“æŸä½ç½®ï¼ˆå¿…å¡«ï¼‰
        top: offset.top + 40, //ç»“æŸä½ç½®ï¼ˆå¿…å¡«ï¼‰
        width: 0, //ç»“æŸæ—¶å®½åº¦
        height: 0 //ç»“æŸæ—¶é«˜åº¦
      }
    });
  });
});
