// bestBox.js"


//? ------------------------------------------------
//? 배열 & 구현 기능 영역
//? ------------------------------------------------

//? 배열 ---------------
//* json 호출로 대체 --------


//? 구현할 기능 -----------
/* 
1. 카드 js로 생성하기
2. 버튼 클릭시 내용 1칸씩 움직이도록 만들기
*/

var jsonData = '../json/bestBoxData.json'
$.getJSON(jsonData, function(data){
  var bestBoxData = data
  console.log(bestBoxData)




//? ------------------------------------------------
//? 코드 영역
//? ------------------------------------------------



//TODO.1 : JS로 카드 생성 -----------------------------
//? 자바스크립트 -------------------
//* 변수 ------------
var bestBoxCardArea = document.querySelector('.card_area_control')
var baseUrl = "../img/main_page_re/main_page_re/all_device/f_bestBox/"



//* 함수 ---------------
var makeBestBoxCardFn = function(id, image, image_description, title, contents, date){
  var bestBoxCardAreaUl = bestBoxCardArea.querySelector('ul')
  var makeLi = document.createElement('li')
  makeLi.innerHTML = '<span class="blind">bestBox_'+ id +'</span><div class="card_image"><span class="blind">'+ image_description +'</span></div><h2>'+ title +'</h2><p>'+ contents +'</p><div class="card_date"><span>'+ date +'</span></div>'

  var SelImgCon = makeLi.querySelector('.card_image')
  SelImgCon.style.backgroundImage = 'url('+ baseUrl +''+ image +')'; 

  bestBoxCardAreaUl.append(makeLi)
}


//* 반복문으로 여러번 만들기 ---------------
var i = 0;
for( ; i<bestBoxData.length ; i+=1 ) {
  makeBestBoxCardFn(bestBoxData[i].id, bestBoxData[i].image, bestBoxData[i].image_description, bestBoxData[i].title, bestBoxData[i].contents, bestBoxData[i].date)
}





//TODO.2 : 카드 움직이게 하기 -----------------------------
//? 제이쿼리 -------------------
(function($){
//* 변수 ------------
var bestBoxAreaCardLi = $('.card_area_control')
var bestBoxAreaCardUl = bestBoxAreaCardLi.find('ul')
var bestBoxAreaCard = bestBoxAreaCardUl.children('li')

var bestBoxButtonWrap = $('.bestBox_buttons')
var bestBoxButton = bestBoxButtonWrap.find('button')

var permission = true;
var i = 1



//* 함수 ---------------
var nextBtnFn = function(){
  permission = false; // 출입 패스권 (승인취소)

  bestBoxAreaCardUl.stop().animate({ marginLeft : -280 + "px" }, 
  function(){
  bestBoxAreaCard.eq(0).appendTo(bestBoxAreaCardUl); // 02-03-04-05-01
  bestBoxAreaCardUl.css({ marginLeft: 0 }) 
  // -280 가고 앞에 거 떼면 결과적으로 -560 가게 되므로, -280만 가도록 조치
  bestBoxAreaCard = bestBoxAreaCardUl.children('li');
  // 함수 외부에서는 bestBoxAreaCard의 순서가 appendTo로 변경되기 이전의 순서로 되어 있으므로, appendTo가 실행된 이후의 값으로 덮어 써 주어야 한다. (02-03-04-05-01)

  permission = true;

  });
} //* 무한 슬라이드 : 요소 강제이동형 함수

var prevBtnFn = function(){
  permission = false; 

  bestBoxAreaCard.eq(-1).prependTo(bestBoxAreaCardUl); // li의 맨 마지막 순서를 맨 앞으로 붙인다.
  bestBoxAreaCardUl.css({ marginLeft: -280 + 'px' }); // 맨 마지막 요소가 맨 앞으로 와서, 맨 마지막 요소가 나타나는데, 애니메이션 적용을 위해 일단 한 칸 밀어 둔다.

  bestBoxAreaCardUl.stop().animate({ marginLeft: 0 }, function(){
  bestBoxAreaCard = bestBoxAreaCardUl.children('li');

  permission = true;

  }); // 맨 마지막 순서가 맨 앞으로 가고(-280) css로 ml처리(-280) 되어 -560 되어있는 걸 여기서 ml처리(0) 하여 결과적으로 -280만큼만 가는 애니메이션이 동작한다.
}



//* 이벤트 -----------
bestBoxButton.eq(0).on('click', function(e){
  // console.log("nextbtn")
  nextBtnFn()
});

bestBoxButton.eq(1).on('click', function(){
  // console.log("prevbtn")
  prevBtnFn()
});


})(jQuery);




}) // $.getJSON (jsonData = '../json/newBoxData.json')