// menu.js





//? 배열 -------------------------------
//* json 호출로 대체


//? 구현할 기능
/*
1. 탭메뉴를 누르면 각 메뉴에 맞는 데이터가 나오도록 만들기
+ 2. 태그 검색이 가능하도록 만들기 (구현예정)
*/

var dataList = []
$.ajax({url:'../json/menu/menuData_coffee.json'}).done(function(coffee_Data){
$.ajax({url:'../json/menu/menuData_tea.json'}).done(function(tea_Data){
$.ajax({url:'../json/menu/menuData_beverage.json'}).done(function(beverage_Data){
$.ajax({url:'../json/menu/menuData_dessert.json'}).done(function(dessert_Data){
$.ajax({url:'../json/menu/menuData_theme.json'}).done(function(theme_Data){
    dataList[0] = coffee_Data;
    dataList[1] = tea_Data;
    dataList[2] = beverage_Data;
    dataList[3] = dessert_Data;
    dataList[4] = theme_Data;

    // console.log(dataList[0])
    // console.log(dataList[1])

 


//* Javascript ---------------------------------------------------
//? 함수식 -------------------------
var fnMakeLi = function(tit, con, img, tag_01, tag_02, tag_03, tag_04){

  var cardArea = document.querySelector('.card_area')
  var makeLi = document.createElement('li'); // html 문서에 li를 생성
  
  makeLi.innerHTML = '<div class="img"></div><h2><a href="#">'+ tit +'</a></h2><p>'+ con +'</p>'+'<div class="tag_area"><ul><li class="tag_css tag_01"><a href="#">'+ tag_01 +'</a></li><li class="tag_css tag_02"><a href="#">'+ tag_02 +'</a></li><li class="tag_css tag_03"><a href="#">'+ tag_03 +'</a></li><li class="tag_css tag_04"><a href="#">'+ tag_04 +'</a></li></ul></div>'; 
  // 생성한 li에 있던 내용은 지우고, = 우측의 내용을 삽입

  var SelectorImg = makeLi.querySelector('.img');
  var baseUrl = "../img/menu/"
  SelectorImg.style.backgroundImage = 'url('+ baseUrl +''+ img +')'; // img라는 클래스 이름을 가진 곳에 url('+ img +') 형식으로 링크 삽입

  cardArea.append(makeLi); //card_area라는 클래스 이름을 가진 영역의 하위에, 자식 위치로 하여 생성되었던 li를 이동

};




//? 반복문으로 여러번 만들기 ---------------------------
var i=0;
for(; i<coffee_Data.length; i+=1) {
  fnMakeLi( coffee_Data[i].title, coffee_Data[i].content, coffee_Data[i].img, coffee_Data[i].tag_01, coffee_Data[i].tag_02, coffee_Data[i].tag_03, coffee_Data[i].tag_04 );
  // fnMakeLi 함수의 매개 변수가 7개 (tit, con, img, tag_01, tag_02, tag_03, tag_04) 이므로, 함수 작동에도 7개의 변수 대입 필요.
  // 변수는 배열에서 만들어 놓았던 데이터를 가져와서 대입
}








//* jQuery ---------------------------------------------------

(function($){


//? 변수 ---------------------
var tag_03 = $('.tag_03')
var tag_04 = $('.tag_04')

var cardArea = $('.card_area')
var navBar = $('.navBar')
var navBarLi = navBar.find('li')

// var navBarList = [coffee, tea, beverage, dessert, theme]



//? 사전 기능 실행 ---------------------
  // console.log(tag_03)
  // console.log(tag_03.eq(1).text())

  
  // k번째의 tag_03 및 tag_04의 내부 텍스트가 ""일 경우, css를 제거
  var k = 0 
  for(; k<coffee_Data.length; k+=1) {
    if (tag_03.eq(k).text() === "") {
        tag_03.eq(k).removeClass('tag_css');
    }
    if (tag_04.eq(k).text() === "") {
      tag_04.eq(k).removeClass('tag_css');
  }
  }



//? 함수 --------------------------  
var nulltagBlindFn = function(){
  var k = 0;
  var tag_03 = $('.tag_03')
  var tag_04 = $('.tag_04')
  console.log(k) 
  for(; k<coffee_Data.length; k+=1) {
    if (tag_03.eq(k).text() === "") {
        tag_03.eq(k).removeClass('tag_css');
    }
    if (tag_04.eq(k).text() === "") {
      tag_04.eq(k).removeClass('tag_css');
  }
  }
}


//? 이벤트 --------------------
navBarLi.eq(0).on('click', function(e){
  e.preventDefault();
  cardArea.empty();

  var i=0;
  for(; i<coffee_Data.length; i+=1) {
    fnMakeLi( coffee_Data[i].title, coffee_Data[i].content, coffee_Data[i].img, coffee_Data[i].tag_01, coffee_Data[i].tag_02, coffee_Data[i].tag_03, coffee_Data[i].tag_04 );
  }

  nulltagBlindFn()  

});

navBarLi.eq(1).on('click', function(e){
  e.preventDefault();
  cardArea.empty();

  var i=0;
  for(; i<tea_Data.length; i+=1) {
    fnMakeLi( tea_Data[i].title, tea_Data[i].content, tea_Data[i].img, tea_Data[i].tag_01, tea_Data[i].tag_02, tea_Data[i].tag_03, tea_Data[i].tag_04 );
  }

  nulltagBlindFn() 

});

navBarLi.eq(2).on('click', function(e){
  e.preventDefault();
  cardArea.empty();

  var i=0;
  for(; i<beverage_Data.length; i+=1) {
    fnMakeLi( beverage_Data[i].title, beverage_Data[i].content, beverage_Data[i].img, beverage_Data[i].tag_01, beverage_Data[i].tag_02, beverage_Data[i].tag_03, beverage_Data[i].tag_04 );
  }

  nulltagBlindFn() 

});

navBarLi.eq(3).on('click', function(e){
  e.preventDefault();
  cardArea.empty();

  var i=0;
  for(; i<dessert_Data.length; i+=1) {
    fnMakeLi( dessert_Data[i].title, dessert_Data[i].content, dessert_Data[i].img, dessert_Data[i].tag_01, dessert_Data[i].tag_02, dessert_Data[i].tag_03, dessert_Data[i].tag_04 );
  }

  nulltagBlindFn() 

});

navBarLi.eq(4).on('click', function(e){
  e.preventDefault();
  cardArea.empty();

  var i=0;
  for(; i<theme_Data.length; i+=1) {
    fnMakeLi( theme_Data[i].title, theme_Data[i].content, theme_Data[i].img, theme_Data[i].tag_01, theme_Data[i].tag_02, theme_Data[i].tag_03, theme_Data[i].tag_04 );
  }

  nulltagBlindFn() 

});



})(jQuery);


}) // $.ajax_data5.json
}) // $.ajax_data4.json   
}) // $.ajax_data3.json
}) // $.ajax_data2.json 
}) // $.ajax_data1.json 
