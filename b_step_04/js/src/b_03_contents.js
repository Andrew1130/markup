// b_03_contents.js


(function($){
  
  // var exw = document.getElementsByClassName('ex_wrap')[0]
  // exw.innerHTML = '<p>내용작성</p>'

  var exWrap = $('.ex_wrap')
  exWrap.html('<p><span>내용</span>작성</p>');
  // exWrap.text('<p>내용작성</p>');

  // 선택자.html() : 요소를 삽입
  // 선택자.text() : 글자를 삽입

  var exHtmlCheck = exWrap.html();
  var exTextCheck = exWrap.text();
  var exConCheck = exWrap.contents();

  console.log( exHtmlCheck );
  console.log( exTextCheck );
  console.log( exConCheck );

  exWrap.html('<div class="in_wrap"></div>')
  exWrap.children('div').html( exConCheck );


  exConCheck.wrap('<div class="inner"></div>')
  console.log( exConCheck.wrap() )


  // -------------------------------------------
  var inWrap = exWrap.children('.in_wrap')

  inWrap.before ('<p>before은 어디에 생성이 될 것인가? - 01</p>');
  inWrap.before ('<p>before은 어디에 생성이 될 것인가? - 02</p>');
  inWrap.before ('<p>before은 어디에 생성이 될 것인가? - 03</p>');
  inWrap.before ('<p>before은 어디에 생성이 될 것인가? - 04</p>');

  inWrap.after ('<p>after는 어디에 생성이 될 것인가? - 01</p>');
  inWrap.after ('<p>after는 어디에 생성이 될 것인가? - 02</p>');
  inWrap.after ('<p>after는 어디에 생성이 될 것인가? - 03</p>');
  inWrap.after ('<p>after는 어디에 생성이 될 것인가? - 04</p>');

  inWrap.append('<a href="#">append_01</a><br />');
  inWrap.append('<a href="#">append_02</a><br />');
  inWrap.append('<a href="#">append_03</a><br />');
  inWrap.append('<a href="#">append_04</a><br />');

  inWrap.append('<div class="link_area"></div>');
  var linkarea = inWrap.children('.link_area');

  // linkarea 내부에 inWrap 내부에 있는 a요소를 옮겨 담겠다.
  linkarea.append( inWrap.find('a') );

  // inWrap 내부에 있는 br요소를 linkarea 내부에 옮겨 담겠다.
  inWrap.find('br').appendTo(linkarea);

  
  // ----------------------------------------

  inWrap.prepend('<button>버튼삽입 1</button>');
  inWrap.prepend('<button>버튼삽입 2</button>');
  inWrap.prepend('<button>버튼삽입 3</button>');


  inWrap.prepend(linkarea); // 부모 요소 안에서 해당 요소를 최상위로 옮긴다.
  var btn = inWrap.find('button');
  btn.prependTo(linkarea);


  // before
  // after
  // append / appendTo
  // prepend / prependTo

})(jQuery);