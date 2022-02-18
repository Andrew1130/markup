// bestBox.js"


//? ------------------------------------------------
//? 배열 & 구현 기능 영역
//? ------------------------------------------------

//? 배열 ---------------
//* json 호출로 대체 --------


//? 구현할 기능 -----------
/* 
1. 카드 js로 생성하기
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
for( ; i<4 ; i+=1 ) {
  makeBestBoxCardFn(bestBoxData[i].id, bestBoxData[i].image, bestBoxData[i].image_description, bestBoxData[i].title, bestBoxData[i].contents, bestBoxData[i].date)
}



}) // $.getJSON (jsonData = '../json/newBoxData.json')