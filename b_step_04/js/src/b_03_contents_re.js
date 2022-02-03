(function($){
  var exWrap = $('.ex_wrap')
  exWrap.html('<p>Lorem ipsum dolor sit amet, <span>consectetur</span> adipisicing elit. <b>Harum,</b> amet.</p>')

  var exHtmlCheck = exWrap.html();
  var exTextCheck = exWrap.text();
  var exConCheck = exWrap.contents(); // exWrap에 있는 내용을 그대로 가져온다.

  console.log( exHtmlCheck );
  console.log( exTextCheck );
  console.log( exConCheck );


  exWrap.html('<div class="in_wrap"></div>')
  exWrap.children('div').html( exConCheck )
  exConCheck.wrap('<div class="inner"></div>') // exConCheck 아래에 자식 요소로 태그 범위를 새로 만든다. 이 때 exConCheck의 내용도 새로 만든 범위로 옮겨진다.

  console.log( exConCheck.wrap() )


  // -------------------------------------------
  var inner = $('.inner')

  // before : 기준 요소 상단에 오름차순으로 배치된다.
  inner.before ('<p>before01</p>');
  inner.before ('<p>before02</p>');
  inner.before ('<p>before03</p>');

  // after : 기준 요소 하단에 내림차순으로 배치된다.
  inner.after ('<p>After01</p>');
  inner.after ('<p>After02</p>');
  inner.after ('<p>After03</p>');

  // append : 기준 요소 하위로(자식으로) 배치된다
  inner.append('<a href="#">append_01</a><br />');
  inner.append('<a href="#">append_02</a><br />');
  inner.append('<a href="#">append_03</a><br />');
  

  inner.append('<div class="link_area"></div>');
  var linkarea = inner.children('.link_area');


    // linkarea 내부에 inner 내부에 있는 a요소를 옮겨 담겠다.
    linkarea.append( inner.find('a') );

    // linkarea 내부에 있는 a요소를 inner 내부에 옮겨 담겠다.
    linkarea.find('a').appendTo(inner);


  // ----------------------------------------

  // prepend : 기준 요소 하위로(자식으로) 역순으로 배치된다.
  inner.prepend('<button>버튼삽입 1</button>');
  inner.prepend('<button>버튼삽입 2</button>');
  inner.prepend('<button>버튼삽입 3</button>');


  inner.prepend(linkarea); // 부모 요소 안에서 해당 요소를 최상위로 옮긴다.
  var btn = inner.find('button');
  linkarea.prepend(btn); // 버튼들을 linkarea 내부에 역순으로 옮겨 담겠다.
  linkarea.find('button').prependTo(inner) // linkarea에서 버튼들을 찾아서, 그 버튼들을 inner 내부에 역순으로 옮겨 담겠다.

})(jQuery);

