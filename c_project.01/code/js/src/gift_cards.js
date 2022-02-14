// gift_cards.js



//* Javascript ---------------------------------------------------

//? 배열 -------------------------------
var data = [
  {'title':'gift_01', 'content':'Lorem ipsum dolor consectetur adipisicing elit', "pngimg":'../img/gift/cardimg.png',
  'svgimg':'../img/gift/cardimg.svg'
},
  {'title':'gift_02', 'content':'Lorem ipsum dolor consectetur adipisicing elit', "pngimg":'../img/gift/cardimg.png',
  'svgimg':'../img/gift/cardimg.svg'
},
  {'title':'gift_03', 'content':'Lorem ipsum dolor consectetur adipisicing elit', "pngimg":'../img/gift/cardimg.png',
  'svgimg':'../img/gift/cardimg.svg'
},
  {'title':'gift_04', 'content':'Lorem ipsum dolor consectetur adipisicing elit', "pngimg":'../img/gift/cardimg.png',
  'svgimg':'../img/gift/cardimg.svg'
},
  {'title':'gift_05', 'content':'Lorem ipsum dolor consectetur adipisicing elit', "pngimg":'../img/gift/cardimg.png',
  'svgimg':'../img/gift/cardimg.svg'
},
  {'title':'gift_06', 'content':'Lorem ipsum dolor consectetur adipisicing elit', "pngimg":'../img/gift/cardimg.png',
  'svgimg':'../img/gift/cardimg.svg'
},
  {'title':'gift_07', 'content':'Lorem ipsum dolor consectetur adipisicing elit', "pngimg":'../img/gift/cardimg.png',
  'svgimg':'../img/gift/cardimg.svg'
},
  {'title':'gift_08', 'content':'Lorem ipsum dolor consectetur adipisicing elit', "pngimg":'../img/gift/cardimg.png',
  'svgimg':'../img/gift/cardimg.svg'
},
  {'title':'gift_09', 'content':'Lorem ipsum dolor consectetur adipisicing elit', "pngimg":'../img/gift/cardimg.png',
  'svgimg':'../img/gift/cardimg.svg'
},
  {'title':'gift_10', 'content':'Lorem ipsum dolor consectetur adipisicing elit', "pngimg":'../img/gift/cardimg.png',
  'svgimg':'../img/gift/cardimg.svg'
},
  {'title':'gift_11', 'content':'Lorem ipsum dolor consectetur adipisicing elit', "pngimg":'../img/gift/cardimg.png',
  'svgimg':'../img/gift/cardimg.svg'
},
  {'title':'gift_12', 'content':'Lorem ipsum dolor consectetur adipisicing elit', "pngimg":'../img/gift/cardimg.png',
  'svgimg':'../img/gift/cardimg.svg'
},
  
];




//? 함수식 -------------------------
var fnMakeLi = function(tit, con, pngimg, svgimg){

  var cardArea = document.querySelector('.card_area')
  var makeLi = document.createElement('li'); // html 문서에 li를 생성
  
  makeLi.innerHTML = '<div class="card_img"></div><h2 tabindex="-1">'+ tit +'</h2><p>'+ con +'</p><div class="button_area"><div class="top"><a href="#"><span>상세보기</span></a></div><ul class="bottom clearfix"><li><a href="#"><span>장바구니</span></a></li><li><a href="#"><span>구매하기</span></a></li></ul></div>'; 
  // 생성한 li에 있던 내용은 지우고, = 우측의 내용을 삽입

  var SelectorImg = makeLi.querySelector('.card_img');
  SelectorImg.style.backgroundImage = 'url('+ pngimg +')';
  SelectorImg.style.backgroundImage = 'url('+ svgimg +')'; // img라는 클래스 이름을 가진 곳에 url('+ img +') 형식으로 링크 삽입

  cardArea.append(makeLi); //card_area라는 클래스 이름을 가진 영역의 하위에, 자식 위치로 하여 생성되었던 li를 이동

};




//? 반복문으로 여러번 만들기 ---------------------------
var i=0;
for(; i<data.length; i+=1) {
  fnMakeLi( data[i].title, data[i].content, data[i].pngimg, data[i].svgimg, );
  // fnMakeLi 함수의 매개 변수가 7개 (tit, con, img, tag_01, tag_02, tag_03, tag_04) 이므로, 함수 작동에도 7개의 변수 대입 필요.
  // 변수는 배열에서 만들어 놓았던 데이터를 가져와서 대입
}


