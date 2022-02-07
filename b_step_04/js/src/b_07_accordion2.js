// b_07_accordion2.js

(function($){

  //? 기능 정리 ----------------
  /*
  1. .nav_title에 마우스 올릴 때 뒤에 오는 .sub_list 나타나도록
  */

  // ? 변수 ----------------------
  var accor2 = $('.accor2');
  var accorLi = accor2.find('li');
  var accorTitle = accorLi.find('.nav_title')
  var accorSub = accor2.find('.sub_list')
  var timed = 100

  //? 기능 구현 ------------------
  accorTitle.on('mouseenter', function(){
    $(this).next(accorSub).stop().slideDown();
    $(this).parent().siblings('li').find(accorSub).slideUp();
  });

  accorTitle.children('button').on('focus', function(){
    // i = 포커스가 잡히는 버튼 기준 부모 위치의 li의 index
    var i = $(this).parents('li').index();
    accorLi.eq(i).find(accorSub).stop().slideDown();
    accorLi.eq(i).siblings().find(accorSub).stop().slideUp();
  });

  // .accor2 영역에서 마우스가 벗어날 경우 sub_list가 사라진다.
  accor2.on('mouseleave', function(){
    accorSub.stop().delay(timed).slideUp()
  });

})(jQuery);