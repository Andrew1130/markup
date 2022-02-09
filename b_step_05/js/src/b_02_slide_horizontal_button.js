// b_02_slide_horizontal_button.js


(function($){
//? 구현할 기능 -----------
/*
- .slide_set_2 내부에 있는 버튼 클릭 시, 광고 내용이 이동하여 처리
>> 버튼을 클릭할 때마다 변수의 값이 증가하거나 감소하도록 만들기
>> 처리되는 변수값을 기준으로 슬라이드 광고가 이동하도록 조치

*/



//? 변수 ------------
var slideSet_2 = $('.slide_set_2');
var slideBtnWrap = slideSet_2.find('.slide_btn');
var button = slideBtnWrap.find('button');

var slide = slideSet_2.find('.slide');
var horizonSlide = slide.children('.horizontal_slide');
var horizonDiv = horizonSlide.children('div');

var i = 0;
var horizonDivLen = horizonDiv.length;



//? 함수 ------------
var btnClickFn = function(){ 
  var percent

  // i값이 0보다 작을 경우, 이전 버튼을 비활성 (사라지게)
  // i의 값이 (horizonDivLen-1)보다 클 경우, 다음 버튼을 비활성

  if( i<=0 ) {
    i = 0; 
    button.eq(1).hide()
    button.eq(0).show()
  } else if ( i >= horizonDivLen-1 ) { 
    i = horizonDivLen -1
    button.eq(0).hide()
    button.eq(1).show()
   } else {
    button.eq(0).show()
    button.eq(1).show()
   }
   console.log(i)

  percent = -100 * i
  horizonSlide.stop().animate({ marginLeft : percent + '%' })
}

//? 선행기능 ------------------
btnClickFn();


//? 이벤트 -------------------
  button.on('click', function(e){
    e.preventDefault();

    var btnNext = $(this).hasClass('next_btn');
    (btnNext) ? i += 1 : i -= 1 ;
    btnClickFn(); 

  });  

})(jQuery);