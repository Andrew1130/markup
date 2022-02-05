// menu.js



//* Javascript ---------------------------------------------------

//? 배열 -------------------------------
var data = [
  {'title':'coffee_01', 'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit', 
  'tag_01':'ICE', 'tag_02':'Flavor', 'tag_03':'Sweet', 'tag_04':'lime',
  img:'../img/menu/menu_01.jpg',
},
  {'title':'coffee_02', 'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit', 
  'tag_01':'ICE', 'tag_02':'SALE', 'tag_03':"", 'tag_04' : "",
  img:'../img/menu/menu_02.jpg',
},
  {'title':'coffee_03', 'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit', 
  'tag_01':'HOT', 'tag_02':'SALE', 'tag_03':"", 'tag_04' : "",
  img:'../img/menu/menu_03.jpg',
},
  {'title':'coffee_04', 'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit', 
  'tag_01':'Summer', 'tag_02':'ICE', 'tag_03':"Tasty", 'tag_04' : "",
  img:'../img/menu/menu_04.jpg',
},
  {'title':'coffee_05', 'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit', 
  'tag_01':'4 season', 'tag_02':'HOT', 'tag_03':"", 'tag_04' : "",
  img:'../img/menu/menu_05.jpg',
},
  {'title':'coffee_06', 'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit', 
  'tag_01':'Dry', 'tag_02':'HOT', 'tag_03':"", 'tag_04' : "",
  img:'../img/menu/menu_06.jpg',
},
  {'title':'coffee_07', 'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit', 
  'tag_01':'Winter', 'tag_02':'Syrup', 'tag_03':"Cream", 'tag_04' : "Milk",
  img:'../img/menu/menu_07.jpg',
},
  {'title':'coffee_08', 'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit', 
  'tag_01':'Sweet', 'tag_02':'HOT', 'tag_03':"", 'tag_04' : "",
  img:'../img/menu/menu_08.jpg',
},
  {'title':'coffee_09', 'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit', 
  'tag_01':'ICE', 'tag_02':'Original', 'tag_03':"", 'tag_04' : "",
  img:'../img/menu/menu_09.jpg',
},
  {'title':'coffee_10', 'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit', 
  'tag_01':'4 season', 'tag_02':'art', 'tag_03':"Oriental", 'tag_04' : "",
  img:'../img/menu/menu_10.jpg',
},
  {'title':'coffee_11', 'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit', 
  'tag_01':'Milk', 'tag_02':'HOT', 'tag_03':"", 'tag_04' : "",
  img:'../img/menu/menu_11.jpg',
},
  {'title':'coffee_12', 'content':'Lorem ipsum dolor sit amet consectetur adipisicing elit', 
  'tag_01':'ICE', 'tag_02':'bubble', 'tag_03':"", 'tag_04' : "",
  img:'../img/menu/menu_12.jpg',
},
  
];




//? 함수식 -------------------------
var fnMakeLi = function(tit, con, img, tag_01, tag_02, tag_03, tag_04){

  var cardArea = document.querySelector('.card_area')
  var makeLi = document.createElement('li'); // html 문서에 li를 생성
  
  makeLi.innerHTML = '<div class="img"></div><h2><a href="#">'+ tit +'</a></h2><p>'+ con +'</p>'+'<div class="tag_area"><ul><li class="tag_css tag_01"><a href="#">'+ tag_01 +'</a></li><li class="tag_css tag_02"><a href="#">'+ tag_02 +'</a></li><li class="tag_css tag_03"><a href="#">'+ tag_03 +'</a></li><li class="tag_css tag_04"><a href="#">'+ tag_04 +'</a></li></ul></div>'; 
  // 생성한 li에 있던 내용은 지우고, = 우측의 내용을 삽입

  var SelectorImg = makeLi.querySelector('.img');
  SelectorImg.style.backgroundImage = 'url('+ img +')'; // img라는 클래스 이름을 가진 곳에 url('+ img +') 형식으로 링크 삽입

  cardArea.append(makeLi); //card_area라는 클래스 이름을 가진 영역의 하위에, 자식 위치로 하여 생성되었던 li를 이동

};




//? 반복문으로 여러번 만들기 ---------------------------
var i=0;
for(; i<data.length; i+=1) {
  fnMakeLi( data[i].title, data[i].content, data[i].img, data[i].tag_01, data[i].tag_02, data[i].tag_03, data[i].tag_04 );
  // fnMakeLi 함수의 매개 변수가 7개 (tit, con, img, tag_01, tag_02, tag_03, tag_04) 이므로, 함수 작동에도 7개의 변수 대입 필요.
  // 변수는 배열에서 만들어 놓았던 데이터를 가져와서 대입
}







//* jQuery ---------------------------------------------------


(function($){

  var tag_03 = $('.tag_03')
  var tag_04 = $('.tag_04')

  console.log(tag_03)
  console.log(tag_03.eq(1).text())

  var k = 0



  // k번째의 tag_03 및 tag_04의 내부 텍스트가 ""일 경우, css를 제거

  for(; k<data.length; k+=1) {
    if (tag_03.eq(k).text() === "") {
        tag_03.eq(k).removeClass('tag_css');
    }
    if (tag_04.eq(k).text() === "") {
      tag_04.eq(k).removeClass('tag_css');
  }
  }



  /*

  if (tag_03.eq(0).text() === "") {
    tag_03.eq(0).removeClass('tag_css');
  }

  if (tag_03.eq(1).text() === "") {
    tag_03.eq(1).removeClass('tag_css');
  }

  if (tag_03.eq(2).text() === "") {
    tag_03.eq(2).removeClass('tag_css');
  }

  ...

  if (tag_03.eq(11).text() === "") {
    tag_03.eq(11).removeClass('tag_css');
  }

  */


})(jQuery);