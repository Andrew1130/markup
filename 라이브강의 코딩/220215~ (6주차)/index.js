// index.js
// --------------------------
// 시나리오 작성
/*
 1. '.btn'을 클릭시 '.box'가 fade처리되어 나타나게 만들기
 (1) .btn 클릭이벤트 수행 -> $('.btn').on(click, 수행())
 (2) fade 처리되어 나타나게 -> $('.box').fadeIn()
 (3) 
*/
// -------------------------

(function(){
//? 기본 변수
var elBtn = $('.btn');
var elBox = $('.box');


//? 기본변수에 기능 처리
// elBox.css({display:'none'});


// -------------------------
//? 함수
var BoxViewerFn = function(check){
  if(check){
    elBox.fadeIn();
  } else {
    elBox.fadeOut();
  }
}

//? 우선 수행되는 기능
BoxViewerFn(false);


// -------------------------
//? 이벤트
elBtn.on('click', function(e){
  e.preventDefault();
  BoxViewerFn(true);
});


})(jQuery);



// ----------------------------------------------

/*
자바스크립트
1. 선택자 선택 과정이 길다 (그나마 편하게 하려면 querySelector를 써야함)
2. 이벤트 메소드는 addEventListener()
3. fadeIn()의 개념이 없다. 따라서 아래와 같이 처리해야 한다.
  - display: none, display:block
  - opacity : (0 ~ 100)/100;
  - SetTimeout, SetInterval / clearInterval

*/

var elBtn = document.querySelector('.btn');
var elBox = document.querySelector('.box');
elBox.style.display = "none";

elBtn.addEventListener('click', function(e){
  e.preventDefault();
  elBox.style.display = "block"
  elBox.style.opacity = viewOp;

  if(viewOp <= 100){
    setTimeout(function(){
      viewOp += 1;
      elBox.style.opacity = viewOp/100;
    }, 10);
  }

});



//* -------------------------------------------
//* Javascript에 비한 jQuery의 장점
//* -------------------------------------------
/*
1. 코드 작성이 간결해짐
2. 편리성 - 크로스브라우징(단일 문법으로 여러 브라우저에서 동시에 사용가능), 애니메이션
*/


// 1. javascript에서 선택자를 지정하기
var elBtn = document.querySelector('.btn');
var elBtn = document.getElementsByClassName('.btn')[0];
var elBtn = document.getAttribute('class', 'btn');

// 2. javascript가 크로스브라우징을 지원하지 않는 예시
elBtn.addEventListener()
elBtn.addAttachment() // addEventListener()가 지원 안되는 경우 사용해야 함


//* -------------------------------------------
//* jQuery를 Javascript로 바꿔 쓰는 이유
//* -------------------------------------------
/*
1. 구형 브라우저가 사라져가는 추세 >> jQuery의 장점 중 하나인 크로스브라우징이 사라져가는 추세
2. 선택자, 이벤트가 많이 필요하지 않아지는 추세 >> jQuery의 장점 중 하나인 간결성이 희석되는 추세
3. jQuery에 비해 호출 속도가 빠름 >> 애니메이션 끊김이 적다.
4. react를 사용하는 회사에서는 순수 javascript 사용을 요구
*/



//* ajax로 json 2개 이상 불러오기 ---------------------------------------------

var dataList = [];
// 1 ---------------------------
$.ajax({url:'../data/data1.json'}).done(function(data){
  dataList[0] = data;
})

$.ajax({url:'../data/data2.json'}).done(function(data){
  dataList[1] = data;
})

setTimeout(function(){
  console.log(dataList);
}, 1000);

// 2 (권장) ---------------------------
$.ajax({url:'../data/data1.json'}).done(function(data){
  $.ajax({url:'../data/data2.json'}).done(function(data){
    dataList[0] = data1;
    dataList[1] = data2;

    //code 수행
  })
})