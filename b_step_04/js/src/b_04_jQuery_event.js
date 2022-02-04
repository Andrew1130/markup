// b_04_jQuery_event.js

(function($){
  var exWrap = $('.ex_wrap');
  var exP = exWrap.find('p');

  /*
    - find() 함수 : 선택된 태그(객체)의 모든 자식태그들을 검색해서 배열로 반환
    - children() 함수는 선택된 태그(객체)의 바로 1단계 아래 자식을 검색, 배열로 반환
  */

  var exInnerText = exP.children('span');
  var evt = exWrap.find('.evt');
  var evtLi = evt.children('li');

  exInnerText.text('이벤트처리 전')

  evt.css ({marginTop : '30px'})



  //? 마우스 이벤트 ------------------------------------------------------

  //* 클릭(마우스를 눌렀다 뗀 경우) 이벤트 ---------------------------
  // evtLi 첫번째에 클릭 이벤트 발생
  evtLi.eq(0).on('click',function(){
    exInnerText.text('li 첫번째 요소를 클릭하였습니다.');
  });

  evtLi.eq(1).on('click', function(evt){
    // 매개변수.preventDefault(); >> 기존 내장 기능을 작동하지 않도록 한다.
    evt.preventDefault();
    exInnerText.text('li 두번째 요소 및 a를 클릭하였습니다.');
  });



  //* 더블클릭 이벤트 ---------------------------
  evtLi.eq(2).on('dblclick', function(){
    exInnerText.text('li_03을 더블클릭 하였습니다.')
  });



  //* 마우스를 누르거나 뗀 경우 ---------------------------
  // 마우스를 누른 경우 : mousedown
  evtLi.eq(3).on('mousedown', function(e) {
    console.log(e.button)
    exInnerText.text( '마우스를 눌렀습니다.' );
    evtLi.eq(3).css({ 'backgroundColor': '#d7d' });
  });

  // 마우스를 뗀 경우 : mouseup
  evtLi.eq(3).on('mouseup', function(){
    exInnerText.text( '마우스를 뗐습니다.' );
    evtLi.eq(3).css({ 'backgroundColor': '#fa6' });
  });



  //* 마우스가 올라가거나 벗어난 경우 ---------------------------
  // 마우스가 올라간 경우 : mouseenter

  /*
  evtLi.eq(4).on('mouseenter', function(){
    exInnerText.text('마우스를 올렸습니다.');
    evtLi.eq(4).css({ 'backgroundColor': '#6af' })
  });
  */

    // 마우스가 벗어난 경우 : mouseleave
  /*
  evtLi.eq(4).on('mouseleave', function(){
    exInnerText.text('마우스가 벗어났습니다.');
    evtLi.eq(4).css({ 'backgroundColor': '#fa6' })
  });
  */

  evtLi.eq(4).on('mouseleave', function(){
    exInnerText.text('마우스가 벗어났습니다.');
    $(this).css({ 'backgroundColor': '#fa6' })
  });



  // removeAttr('style') 로도 원상회복이 가능
  evtLi.eq(5).on('mouseenter', function(){
    exInnerText.text('마우스를 올렸습니다.');
    evtLi.eq(5).css({ 'backgroundColor': '#6af' })
  });

  evtLi.eq(5).on('mouseleave', function(){
    exInnerText.text('마우스가 벗어났습니다.');
    $(this).removeAttr('style');
  });



  //? 기타 이벤트 ------------------------------------

  //* focus ----------------------------

  // 포커스가 잡힐 때
  evtLi.eq(6).children('a').on('focus', function(){
    exInnerText.text('포커스 처리되었습니다.');
    evtLi.eq(6).css({'backgroundColor':'#ccc'})
  })

  // 포커스가 빠져나갈 때
  evtLi.eq(6).children('a').on('blur', function(){
    exInnerText.text('포커스에서 벗아났습니다.');
    evtLi.eq(6).removeAttr('style');
  })



  //* scroll ------------------------------------
  var win = $(window);
  win.on('scroll', function(){
    // win.scrollTop()을 parseInt()로 감싸서, 콘솔 로그에 정수만 나오도록 처리
    var scrollCk = parseInt(win.scrollTop());
    console.log(scrollCk);

    if(scrollCk >= 700){
      $('.code_exam').css({ backgroundColor : '#adf' });
    } else {
      $('.code_exam').removeAttr('style')
    }
  }); 

  evtLi.eq(7).on('click', function(e){
    e.preventDefault();
    // win.scrollTop(600); -> 이렇게 해도 되나, 간혹 작동하지 않을 수 있다고 함
    $('html').animate({ scrollTop:600 + 'px' }) // (권장)
  });



  //* animate --------------------------------------

  // win.on('resize', function(e){
  //   var winW = $(this).width();
  //   if (winW >= 1024){
  //     $('.code_exam').css({ backgroundColor : '#add' });
  //   } else {
  //     $('.code_exam').css({ backgroundColor : '#fff' });
  //   }
  // })


  /* 위와 같이 css로도 표현이 가능하지만, 
  아래와 같이 .stop().animate()로도 표현이 가능 */

  win.on('resize', function(e){
    var winW = $(this).width();
    if (winW >= 1024){
      $('.code_exam').stop().animate({ backgroundColor : '#add' }, 500)
    } else {
      $('.code_exam').stop().animate({ backgroundColor : '#fff' }, 500)
    }
  })



  //? $(this) -------------------------------

  //* 대명사 역할
  evtLi.eq(4).on('mouseenter', function(){
    exInnerText.text('마우스를 올렸습니다.');
    $(this).css({ 'backgroundColor': '#6af' }) 
    // 여기서 $(this)는 앞에 언급하였던 evtLi.eq(4)를 의미한다.
  });


  //* 범위 내 임의의 1개를 가리키는 역할
  evtLi.on('mouseenter', function(){
    exInnerText.text('전체를 대상으로 하는 호버 이벤트가 발생하였습니다.');
    $(this).css({ 'fontWeight':'700' }) 
    // 여기서 $(this)는 evtLi라는 범위 내에서, 사용자가 마우스를 올린 그 1개의 li를 의미한다.
  });

  evtLi.on('mouseleave', function(){
    exInnerText.text('전체를 대상으로 하는 호버 이벤트가 종료되었습니다.');
    $(this).css({ 'fontWeight':'500' }) 
  });



  // 이벤트
  // click, dblclick, mouseenter, mouseleave, focus, blur, scroll, resize
  // window, document, $(this)


})(jQuery);