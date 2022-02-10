// b_03_slide_horizontal_button_infinity_02.js


(function($){
//? 구현할 기능 -----------
/*
- 다음 버튼을 클릭시 .horizontal_slide가 움직이도록 처리
>> 수행 전 .horizontal_slide 내부에 있는 div의 마지막 요소를 복제하여 앞으로 이동
>> .horizontal_slide 영역은 내부 기존 개수보다 +!된 값만큼 가로값을 늘려주기
>> 보이는 내용은 무조건 1번째 내용이 보이도록 처리
*/



//? 변수 ------------
var slideSet = $('.slide_set');
var slideBtnWrap = slideSet.find('.slide_btn');
var button = slideBtnWrap.find('button');

var slide = slideSet.find('.slide');
var horizonSlide = slide.children('.horizontal_slide');
var horizonDiv = horizonSlide.children('div');
var origindivLen = horizonDiv.length;

var permission = true;
var i = 0



//? 함수 --------------------
var nextBtnFn = function(e) {
  if(permission){
    permission = false;
    i += 1;

    if(i >= origindivLen){
      horizonSlide.css({ marginLeft : 100 + '%' });
      i = 0;
    } // i가 5보다 커질 때 horizonSlide에 ml을 100% 주고 i를 0으로 만든다.
    horizonSlide.stop().animate({ marginLeft : -100 * i + '%' }, function(){
      permission = true;
    }); // i=0이면 if문에 의해 ml은 100%이며 그로 인해 clone된 div가 즉시 나타난다. 이때 animate에 의해서는 ml이 0%으로 움직이는데, left: -100%;에 의해 margin:0일 때는 광고_01이 나타나게 된다.

  } // if(permission)
}

var PrevBtnFn = function(e) {
  if(permission){
    permission = false;
    i -= 1;
    
    horizonSlide.stop().animate({ marginLeft : -100 * i + '%' }, function(){
      //* animate가 실행이 끝나고 나서 하단의 조건문이 실행된다. (콜백 함수)
      if(i < 0) {
        i = origindivLen - 1
        horizonSlide.css({ marginLeft: -100 * i + '%' }) 
      } // i가 음수일 경우 clone된 5번째 박스가 나타나게 되는데, 이 박스는 움직임을 자연스럽게 보이게 하기 위해 있는 클론일 뿐 실제 쓰일 내용은 아니므로, origindivLen-1(4)의 값 * -100% 만큼 marginLeft를 주어 원본인 5번째 박스가 나타나도록 한다.

    permission = true
    });

  } // if(permission)
}



//? 기능수행 (수행 및 체크) --------------------
var cloneDiv = horizonDiv.eq(-1).clone(); // 맨 마지막에 있는 div를 복사
horizonSlide.prepend(cloneDiv) // 복사한 div를 맨 앞에 붙여넣기
var newHorizontalDiv = horizonSlide.children('div')
var newdivLen = newHorizontalDiv.length;
horizonSlide.css({ width: 100 * newdivLen + '%', left: -100 + '%' }) // 1개가 늘어난 만큼 전체 컨테이너 너비도 늘려주고, 1개가 늘어나 class action이 붙은 슬라이드가 밀려났기 때문에 그 슬라이드가 다시 나타나도록 조치 (현재 horizonSlide에는 position:relative가 걸려 있음)
newHorizontalDiv.css({ width: (100 / newdivLen) + '%' })  // 갯수가 6개가 되었으므로, div 1개가 차지하는 비율이 부모를 100으로 보았을 때 1/6씩 차지하도록 값 설정



//? 이벤트 -----------
button.eq(0).on('click', function(e){
  e.preventDefault();
  nextBtnFn()
}); // button.eq(0).on('click')

button.eq(1).on('click', function(e){
  e.preventDefault();
  PrevBtnFn()
}); // button.eq(1).on('click')


})(jQuery);