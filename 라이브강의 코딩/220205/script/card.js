// script


//? 객체 만들기
var data = [
  {'title':'제목1', 'content':'내용작성1', img:'../img/background/benjamin-voros-phIFdC6lA4E-unsplash.jpg'},
  {'title':'제목2', 'content':'내용작성2', img:'../img/background/konstantin-kleine-V1NVvXmO_dk-unsplash.jpg'},
  {'title':'제목3', 'content':'내용작성3', img:'../img/background/benjamin-voros-phIFdC6lA4E-unsplash.jpg'},
  {'title':'제목4', 'content':'내용작성4', img:'../img/background/benjamin-voros-phIFdC6lA4E-unsplash.jpg'},
  {'title':'제목5', 'content':'내용작성5', img:'../img/background/benjamin-voros-phIFdC6lA4E-unsplash.jpg'},
  {'title':'제목6', 'content':'내용작성6', img:'../img/background/benjamin-voros-phIFdC6lA4E-unsplash.jpg'},
  {'title':'제목7', 'content':'내용작성7', img:'../img/background/benjamin-voros-phIFdC6lA4E-unsplash.jpg'},
  {'title':'제목8', 'content':'내용작성8', img:'../img/background/benjamin-voros-phIFdC6lA4E-unsplash.jpg'},
  {'title':'제목9', 'content':'내용작성9', img:'../img/background/benjamin-voros-phIFdC6lA4E-unsplash.jpg'},
];


//? 자바스크립트로 객체 값을 html로 전송
var cardArea = document.querySelector('.card_area'); // html 문서 전체에서 () 내부에 있는 속성을 선택
cardArea.innerHTML = '<ul></ul>' // cardArea 내부에 있는 html을 삭제하고 ul을 삽입

var cardUl = cardArea.querySelector('ul');


var fnMakeLi = function(tit, con, img){
  var makeLi = document.createElement('li'); // html 문서에 li를 생성
  
  makeLi.innerHTML = '<div class="img"></div><strong>'+ tit +'</strong><br /><span>'+ con +'</span>';

  var SelectorImg = makeLi.querySelector('.img');
  SelectorImg.style.backgroundImage = 'url('+ img +')';

  cardUl.append(makeLi);
};


//? 반복문으로 여러번 만들기
var i=0;
for(; i<data.length; i+=1) {
  console.log( data[i].title, data[i].content, data[i].img )
  fnMakeLi( data[i].title, data[i].content, data[i].img );
}



//* 코드 해설 -----------------------------------------------

//* a.innerHtml = "" : a 내부에 있는 기존 내용을 삭제하고 "" 에 있는 html을 새로 채워넣기
//* a.append(b) : a 하위에 자식으로 b를 넣기



// var cardArea = document.getElementsByClassName('card_area')[0]
// var cardArea = document.querySelector('.card_area');
// var cardArea = document.querySelectorAll('card_area')[0];

// document.getElementById('card')
// document.getElementsByTagName('div')

// var cardArea = document.querySelector('div');
// var cardArea = document.querySelectorAll('div')[1];


// cardArea.innerHTML = '<li><strong>title</strong><span>contents</span></li>'