// b_02_jQuery_selector.js


(function($){
  // console.log($.fn);

  /*
    body { background-color: #afc}
  */

  // var body = document.getElementsByTagName('body')[0];
  // var body = document.querySelector('body');

  var body = $('body') //* 선택자는 변수로 만들어주는 게 좋다.
  body.css ({'background-color' : '#acf'});



//? jQuery를 이용한 css 표현 --------------------

  // 선택자1 : $('css선택자')
  // css표현 : 선택자.css({'속성명':'값', '속성명':'값' ... }); -> 단, 속성명을 camelcase로 쓰는 경우 ''을 생략할 수 있다.

  $('.ex_wrap').css({
    'background-color':'#fff',
    'border':'1px solid #777'
  });

  var box = $('#box');
  // 숫자와 문자를 나눠 적는 것이 좋다.
  box.css({ 'backgroundColor':'#dfd', 'padding': 20 + 'px' });


  // box > h3 {}
  $('#box > h3').css({ fontSize: 1.3+'rem' })
  var boxH3 = box.children('h3');
  boxH3.css({ fontWeight: 700, marginBottom: 20+'px' });

  // box h3 {}
  $('#box h3').css({ textIndent: 15+'px' });
  var boxFindH3 = box.find('h3')
  boxFindH3.css({ 'color': "#a5f" });



//? 정렬 ---------------------------------------

  // 선택자
  var boxP = box.children('p');
  box.children('ol').addClass('list_wrap');
  var boxList =  box.children('.list_wrap');

  // css 기능 적용
  boxP.css({ backgroundColor: '#fa5', marginBottom: 20 + 'px' });
  boxList.css({ 'border':'1px solid #555', 'marginBottom': 10+'px' });



//? 순번 지정 ---------------------------------

  // 선택자에 순서 eq(순번) : 순번은 첫번째가 0
  boxList.eq(0).css({ backgroundColor : '#fff', padding: '10px' })
  boxList.eq(1).css({ backgroundColor : '#ccf', padding: '10px' })
  boxList.eq(2).css({ backgroundColor : '#fcc', padding: '10px' })
  



//? 순번 지정 활용 ---------------------------------

  var boxListEq_01 = boxList.eq(0); // 매 하위단계별로 변수 지정하는 것이 좋다. (그렇지 않으면 아래처럼 길게 써야 한다)
  // $('#box').children('.list_wrap').eq(0).children('li')
  var boxUl_01_li = boxListEq_01.children('li');

  boxUl_01_li.eq(0).css({ backgroundColor:'green' });
  boxUl_01_li.eq(1).css({ fontWeight: 700 });
  boxUl_01_li.eq(-1).css({ backgroundColor:'aqua' });
  boxUl_01_li.eq(-2).css({ fontWeight: 700 });
  boxUl_01_li.eq(0).next().css({ backgroundColor:'yellow' }); // eq(0)의 바로 다음 순서에 적용
  boxUl_01_li.eq(0).nextAll().css({ fontSize: 1.2 + 'rem' }); // eq(0)의 다음에 있는 모든 순서에 적용

  boxUl_01_li.eq(3).prev().css({ 'textTransform': 'uppercase' });
  boxUl_01_li.eq(3).prevAll().css({ 'textIndent' : '30px' });



  // ----------------------------------
  var boxOl_li = boxList.eq(-1).children('li')
  boxOl_li.css ({ fontWeight: 700 });
  boxOl_li.eq(3).css ({ backgroundColor: 'yellow' });
  boxOl_li.eq(3).siblings().css ({ 'textIndent' : '20px' }); // eq(3)을 제외한 나머지 형제 요소들에 적용
  boxOl_li.eq(4).siblings('li').css ({ fontSize: 1.2 + 'rem' });

  var olEq5 = boxOl_li.eq(0)
  boxOl_li.not( olEq5 ).css ({ 'textTransform': 'uppercase' }); // eq(0)이 아닌 나머지 boxOl_li에 적용



//? 부모 선택자 ---------------------------------

  var box2 = $('#box');
  var box2_other = box2.children('.other_list');
  var box2_li = box2_other.children("li");
  var other = $('#other');

  // box2_li.eq(2).css({ 'backgroundColor':"#7af" });
  other.css({ 'backgroundColor':"#7af" });
  other.children('button').css({backgroundColor: "#a7f", fontWeight: 700});
  other.parent().css ({ 'textIndent' : '30px' }); // ul . other_list
  other.parent().parent().css ({ textAlign: 'center '}) // div # box
  // other.parents().css({}) // other 위 모든 부모 요소에 적용
  other.parents('.list_wrap').css({ border : '4px solid #333' }); // other 위 모든 부모 요소 중 class가 list_wrap인 영역에 한정하여 적용

  other.css({ 'marginRight':'200px' })


  /* jQuery.animate() 메소드 동작하지 않는 것들 : 
      transition, animation, transform, boderRadius
  */

})(jQuery);