// b_02_slide_horizontal_indicator.js


(function($){
//? 구현할 기능 -----------
/*
- 인디케이터 버튼을 클릭시, 해당하는 광고 내용이 나타나도록 만들기
>> 인디케이터 버튼을 클릭하면 그 순서값 파악
>> 순서에 맞는 광고가 나타나도록 조치 : .horizontal_slide의 가로 이동 (margin-left)
*/


//? 변수 ------------
var slideSet = $('.slide_set');
var indicator = slideSet.find('.indicator');
var indiLi = indicator.find('li');
var indiLink = indiLi.children('a');

var slide = slideSet.find('.slide');
var horizonSlide = slide.children('.horizontal_slide');

var i = 0;
var timed = 500;


//? 이벤트 -----------
indiLink.on('click', function(e){
  e.preventDefault();

  i = $(this).parent().index();
  var percent = -100 * i
  // horizonSlide.css({ marginLeft : percent + '%' })
  horizonSlide.stop().animate({ marginLeft : percent + '%' }, timed);

  indiLi.eq(i).addClass('action');
  indiLi.eq(i).siblings().removeClass('action');

})


})(jQuery);