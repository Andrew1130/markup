// b_03_slide_horizontal_button_infinity_03.js


(function($){
  //? 구현할 기능 -----------
  /*
  - 다음 버튼을 클릭시 .horizontal_slide가 움직이도록 처리
  >> 수행 전 .horizontal_slide 내부에 있는 div의 마지막 요소를 복제하여 앞으로 이동
  >> .horizontal_slide 영역은 내부 기존 개수보다 +!된 값만큼 가로값을 늘려주기
  >> 보이는 내용은 무조건 1번째 내용이 보이도록 처리
  */
  
  
  
  //? 변수 ------------
  var part = $('.part');
  var slideSet = $('.slide_set');
  var slideBtnWrap = slideSet.find('.slide_btn');
  var button = slideBtnWrap.find('button');

  var indiArea = slideSet.find('.indicator');
  var indiUl = indiArea.children('ul');
  var indiLi = indiUl.children('li');
  var indiLink = indiLi.children('a');
  var indiP = indiArea.find('p');
  var indiPNow = indiP.find('.now');
  var indiPTotal = indiP.find('.total');
  
  var slide = slideSet.find('.slide');
  var horizonSlide = slide.children('.horizontal_slide');
  var horizonDiv = horizonSlide.children('div');
  var origindivLen = horizonDiv.length;
  
  var permission = true;
  var i = 0
  var timed = 5000;
  var autoPlay;
  
  
  
  //? 함수 --------------------
  var nextBtnFn = function() {
    if(permission){
      permission = false;
      i += 1;
  
      if(i >= origindivLen){
        horizonSlide.css({ marginLeft : 100 + '%' });
        i = 0;
      } // i가 5보다 커질 때 horizonSlide에 ml을 100% 주고 i를 0으로 만든다.
      horizonSlide.stop().animate({ marginLeft : -100 * i + '%' }, function(){
        indiPNowFn();
        permission = true;
      }); // i=0이면 if문에 의해 ml은 100%이며 그로 인해 clone된 div가 즉시 나타난다. 이때 animate에 의해서는 ml이 0%으로 움직이는데, left: -100%;에 의해 margin:0일 때는 광고_01이 나타나게 된다.
  
    } // if(permission)
  } // nextBtnFn()
  
  var PrevBtnFn = function() {
    if(permission){
      permission = false;
      i -= 1;
      
      horizonSlide.stop().animate({ marginLeft : -100 * i + '%' }, function(){
        //* animate가 실행이 끝나고 나서 하단의 조건문이 실행된다. (콜백 함수)
        if(i < 0) {
          i = origindivLen - 1
          horizonSlide.css({ marginLeft: -100 * i + '%' }) 
        } // i가 음수일 경우 clone된 5번째 박스가 나타나게 되는데, 이 박스는 움직임을 자연스럽게 보이게 하기 위해 있는 클론일 뿐 실제 쓰일 내용은 아니므로, origindivLen-1(4)의 값 * -100% 만큼 marginLeft를 주어 원본인 5번째 박스가 나타나도록 한다.

        indiPNowFn()
  
      permission = true
      });
  
    } // if(permission)
  } // PrevBtnFn()
  
  var indicatorFn = function(){
    indiLi.eq(i).addClass('action');
    indiLi.eq(i).siblings().removeClass('action');
  } // indicatorFn() : 인디케이터 버튼 작동

  var indiPNowFn = function(){
    indiPTotal.text(origindivLen);
    indiPNow.text(i+1);
  }; // indiPNowFn() : 인디케이터 좌측 인덱스 작동

  var slideGoFn = function(){
    autoPlay = setInterval(function(){
      // nextBtnFn();
      // indicatorFn();

      button.eq(0).trigger('click'); //* click이라는 이벤트를 발생시킨다.
    }, timed);
  } // slideGoFn() : 자동으로 슬라이드 움직이게 만들기
  
  var slideStopFn = function(){
    clearInterval(autoPlay);
  }; // slideStopFn() : 슬라이드 자동 이동 멈추도록 하기
  


  //? 기능수행 (수행 및 체크) --------------------
  var cloneDiv = horizonDiv.eq(-1).clone(); // 맨 마지막에 있는 div를 복사
  horizonSlide.prepend(cloneDiv) // 복사한 div를 맨 앞에 붙여넣기
  var newHorizontalDiv = horizonSlide.children('div')
  var newdivLen = newHorizontalDiv.length;
  horizonSlide.css({ width: 100 * newdivLen + '%', left: -100 + '%' }) // 1개가 늘어난 만큼 전체 컨테이너 너비도 늘려주고, 1개가 늘어나 class action이 붙은 슬라이드가 밀려났기 때문에 그 슬라이드가 다시 나타나도록 조치 (현재 horizonSlide에는 position:relative가 걸려 있음)
  newHorizontalDiv.css({ width: (100 / newdivLen) + '%' })  // 갯수가 6개가 되었으므로, div 1개가 차지하는 비율이 부모를 100으로 보았을 때 1/6씩 차지하도록 값 설정
  
  indiPNowFn();
  slideGoFn(); // 슬라이드 자동 이동을 최초로 실행


  //? 이벤트 -----------
  button.eq(0).on('click', function(e){
    e.preventDefault();
    nextBtnFn();
    indicatorFn();
  }); // button.eq(0).on('click')
  
  button.eq(1).on('click', function(e){
    e.preventDefault();
    PrevBtnFn();
    indicatorFn();
  }); // button.eq(1).on('click')
  
  indiLink.on('click', function(e){
    e.preventDefault();
    i = $(this).parent().index();
    horizonSlide.stop().animate({ marginLeft : -100 * i + '%' });
    indicatorFn();
    indiPNowFn();
  }); // indiLink.on('click')

  part.on('mouseenter', function(){
    slideStopFn()
  }); // 마우스가 .part에 올라갔을 때는 자동 이동을 정지

  part.on('mouseleave', function(){
    slideGoFn()
  }); // 마우스가 .part에서 떠났을 때는 자동 이동을 다시 수행

})(jQuery);