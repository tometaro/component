
//スクロールヘッダー
$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $('.Header').addClass('Header-Bg');
  } else {
    $('.Header').removeClass('Header-Bg');
  }
});

//ハンバーガーメニュー
$('.Navi-Toggle').on("click", function() {
  $('.Header').toggleClass('Navi-Open');
  return false;
});

//ナビゲーション外タッチで閉じる
$(".Navi-Shadow").click(function() {
  $('.Header').removeClass('Navi-Open');
  return false;
});

//タブ
$('.Tab-Btn').on('click',function(){
  var index = $('.Tab-Btn').index(this);
  $('.Tab-Inner').css('display','none');
  $('.Tab-Inner').eq(index).css('display','block');
  $('.Tab-Btn').removeClass('Tab-Btn--Active');
  $(this).addClass('Tab-Btn--Active');
});

//アコーディオン
$(".Accordion dt").on("click", function() {
  $(this).next().slideToggle();
});

//カルーセル
$(function(){
    var slideWidth = $('.Carousel-Wrapper li').outerWidth();
    var slideNum = $('.Carousel-Wrapper li').length;
    var slideSetWidth = slideWidth * slideNum;
    $('.Carousel-Wrapper').css('width', slideSetWidth);

    var slideCurrent = 0;// 現在地を示す変数

    var sliding = function(){
      // slideCurrentが0以下だったら
      if( slideCurrent < 0 ){
      slideCurrent = slideNum - 1;
   // slideCurrentがslideNumを超えたら
    }else if( slideCurrent > slideNum - 1 ){  // slideCUrrent >= slideNumでも可
      slideCurrent = 0;
    }
    $('.Carousel-Wrapper').stop().animate({
      left: slideCurrent * -slideWidth
    });
    }
    // 前へボタンが押されたとき
    $('.Carousel-prev').click(function(){
      slideCurrent--;
      sliding();
    });

    // 次へボタンが押されたとき
    $('.Carousel-next').click(function(){
      slideCurrent++;
      sliding();
    });

});

