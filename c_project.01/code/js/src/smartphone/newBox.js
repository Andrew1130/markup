// newBox.js


//? ------------------------------------------------
//? 배열 & 구현 기능 영역
//? ------------------------------------------------

//? 배열 ---------------
//* Json 파일 호출로 대체



//? 구현할 기능 -----------
/*
1. 인디케이터를 누르면 이미지가 3장씩 변경되도록
- 인디케이터 1개에 이미지를 3개 할당
- 사진 담는 영역을 넓게 해서 사진을 9개 담고, 그 영역을 감싸는 상위 영역을 overflow hidden 
- 인디케이터 누를 때마다 마진을 주어서 이동하도록
*/



//? ------------------------------------------------
//? 코드 영역
//? ------------------------------------------------


var jsonData = '../json/newBoxData.json'
$.getJSON(jsonData, function(data){
  var newBoxData = data
  console.log(newBoxData)




//? 자바스크립트 -------------------
//* 변수 ------------
// var newBoxArea = document.querySelector('.newBox_area')
// var makeUl = document.createElement('ul')


//* 함수 ---------------
var makenewBoxContentFn = function(newBox_img_alt, newBox_img){
  var newBoxArea = document.querySelector('.newBox_area')
  var newBoxAreaUl = newBoxArea.querySelector('ul')
  var makeLi = document.createElement('li')
  makeLi.innerHTML = '<div><a href="#"><span>'+ newBox_img_alt +'</span></a></div>'

  var SelImgCon = makeLi.querySelector('div')
  SelImgCon.style.backgroundImage = 'url('+ newBox_img +')'; 

  newBoxAreaUl.append(makeLi)
}


//* 반복문으로 여러번 만들기
var i = 0;
for( ; i<newBoxData.length ; i+=1 ) {
  makenewBoxContentFn(newBoxData[i].newBox_img_alt, newBoxData[i].newBox_img)
}




//? 제이쿼리 -------------------

(function($){


//* 변수 ------------
var newBoxIndiArea = $('.area_indicator')
var Indibtn = newBoxIndiArea.find('li')



//* 사전 기능 실행 ---------
// newBoxAreaUl.css({ marginLeft: -11.111111 + '%' })


//* 이벤트 -----------


Indibtn.eq(0).on('click', function(e){
  
  e.preventDefault()
  $(this).addClass('act')
  $(this).siblings().removeClass('act')
  var newBoxAreaUl = $('.newBox_area_con')
  newBoxAreaUl.animate({ marginLeft: 0 + '%' })

})

Indibtn.eq(1).on('click', function(e){
  
  e.preventDefault()
  $(this).addClass('act')
  $(this).siblings().removeClass('act')
  var newBoxAreaUl = $('.newBox_area_con')
  newBoxAreaUl.animate({ marginLeft: -100 + '%' })

})

Indibtn.eq(2).on('click', function(e){
  
  e.preventDefault()
  $(this).addClass('act')
  $(this).siblings().removeClass('act')
  var newBoxAreaUl = $('.newBox_area_con')
  newBoxAreaUl.animate({ marginLeft: -200 + '%' })

})


})(jQuery);


}) // $.getJSON (jsonData = '../json/newBoxData.json')