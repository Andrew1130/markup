// b_02_slide_position_indicator.js


(function($){
//? 구현할 기능 -----------
/*
1. 인디케이터를 선택시, 그에 따른 이미지를 나타나게 만든다.

step 1 : 기본형
(1) 인디케이터(.indicator)를 선택시 그 인디케이터가 몇 번째인지 확인 필요
(2) .slide_wrapper 내부의 div가 몇번째가 나타나야 하는지 알아야 함
(3) 나타나야 하는 요소 외의 다른 div는 사라지게 만들어야 함
(4) .slide_wrapper 내부의 div에 .action 처리(추가/해제)
(5) .indicator 내부의 li에서 action 처리(추가/해제)

step 2 : 이미지가 부드럽게 나타났다가 사라지도록 하기
(1) .slide_wrapper 내부의 div가 나타나지만 보이지 않게 처리(display:block)
(2) .slide_wrapper 내부의 div의 .action으로 처리된 요소를 서서히 사라지게 만들기
(3) 나타난 요소에 .action을 처리, 이전 요소에서는 .action을 삭제

*/



//? 변수 ------------
var slideSet = $('.slide_set');
var indiWrap = slideSet.find('.indicator');
var indiUl = indiWrap.children('ul');
var indiLi = indiUl.children('li');
var indiLink= indiLi.children('a');

var slidePart = slideSet.find('.slide');
var slideWrap = slidePart.find('.slide_wrapper');
var slideDiv = slideWrap.children('div');
var i = 0, j = i;
var timed = 500;



//? 함수 ------------
var indiCheckFn = function(){
  indiLi.eq(i).addClass('action');
  indiLi.eq(i).siblings().removeClass('action');
}

var slideDivFn = function(){
  slideDiv.eq(i).stop().show();
  slideDiv.eq(j).stop().fadeOut(timed/2, function(){
    slideDiv.eq(i).addClass('action');
    slideDiv.eq(i).siblings().removeClass('action');
    j = i; //* i는 index이므로 변수이지만 j는 함수 외부에 선언된 게 전부이므로, 별도로 식을 적어 i와 j 값을 매 클릭시마다 동일하게 해 주어야 한다.
  });
}



//? 선행 기능 ----------------
slideDiv.eq(i).show(); // css에서 사라지게 한 후 jq를 통해 다시 나타나게 함



//? 이벤트 -----------
//* --------------------------------------------------------
//* Step 1 
//* --------------------------------------------------------
/*
  indiLink.on('click', function(e){
    e.preventDefault();

    i = $(this).parent().index(); // (1)

    slideDiv.eq(i).addClass('action')
    slideDiv.eq(i).siblings().removeClass('action') // (2), (3), (4)

    indiLi.eq(i).addClass('action')
    indiLi.eq(i).siblings().removeClass('action') // (5)
  });
*/


//* --------------------------------------------------------
//* Step 2
//* --------------------------------------------------------
  indiLink.on('click', function(e){
    e.preventDefault(e);
    i = $(this).parent().index();
    indiCheckFn();
    slideDivFn();
  });

})(jQuery);