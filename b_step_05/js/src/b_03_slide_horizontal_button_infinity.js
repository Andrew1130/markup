// b_03_slide_horizontal_button_infinity.js


(function($){
//? 구현할 기능 -----------
/*
- 버튼 클릭시 .horizon_slide 가로로 이동하게 만들기 (무한)
>> next 버튼을 클릭했을 때 .horizon_slide 가로 1칸 이동 ( marginLeft : -100% )
>> 움직이고 난 후 내부 div의 첫번째를 마지막으로 강제 이동
>> 동시에 .horizotal_slide를 원위치로 이동 ( margin-left:0 )
*/



//? 변수 ------------
var slideSet = $('.slide_set');
var slideBtnWrap = slideSet.find('.slide_btn');
var button = slideBtnWrap.find('button');

var slide = slideSet.find('.slide');
var horizonSlide = slide.children('.horizontal_slide');
var horizonDiv = horizonSlide.children('div'); // 01-02-03-04-05

var permission = true; 
// 출입 패스권 (승인)
// permission + if 구조로 함수를 제어하려면, permission이 함수 외부에서 일단 선언되어야 한다.



//? 함수 -------------
var nextBtnFn = function(){
  permission = false; // 출입 패스권 (승인취소)

  horizonSlide.stop().animate({ marginLeft : -100 + "%" }, function(){
  horizonDiv.eq(0).appendTo(horizonSlide); // 02-03-04-05-01
  
  horizonSlide.css({ marginLeft: 0 })
  horizonDiv = horizonSlide.children('div');// 함수 외부에서는 horizonDiv의 순서가 appendTo로 변경되기 이전의 순서로 되어 있으므로, appendTo가 실행된 이후의 값으로 덮어 써 주어야 한다. (02-03-04-05-01)

  permission = true;

  });
}

var prevBtnFn = function(){
  permission = false; 

  horizonDiv.eq(-1).prependTo(horizonSlide); // div의 맨 마지막 순서를 맨 앞으로 붙인다.
  horizonSlide.css({ marginLeft: -100+ '%' }); // 맨 마지막 요소가 맨 앞으로 와서, 맨 마지막 요소가 나타나는데, 애니메이션 적용을 위해 일단 한 칸 밀어 둔다.

  horizonSlide.stop().animate({ marginLeft: 0 }, function(){
  horizonDiv = horizonSlide.children('div');

  permission = true;

  }); // 애니메이션을 적용해 한 칸 밀면서 맨 마지막 요소를 불러오고, 이때의 div를 함수에 갱신한다.

}


//? 기능 수행 -----------


//? 이벤트 -----------
//* next 버튼 클릭시 수행
button.eq(0).on('click', function(e){
  e.preventDefault();

  if(permission) {
     nextBtnFn()
  }// if()
})

//* prev 버튼 클릭시 수행
button.eq(1).on('click', function(e){
  e.preventDefault();

  if(permission) {
    prevBtnFn()
  }// if()
})


})(jQuery);