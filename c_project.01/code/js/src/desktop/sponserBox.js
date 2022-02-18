// sponserBox.js"


//? ------------------------------------------------
//? 배열 & 구현 기능 영역
//? ------------------------------------------------

//? 배열 ---------------
//* json파일 호출로 대체

//? 구현할 기능 -----------
/*
1. JS로 스폰서 항목 생성 및 이미지 넣기
2. 생성된 스폰서 항목에 IS기법 적용하기
3. 시간이 지날 때마다 스폰서박스가 자동 슬라이드 되도록 하고 마우스를 올리면 슬라이드가 정지하도록 처리
*/


//? ------------------------------------------------
//? 코드 영역
//? ------------------------------------------------



var jsonData = '../json/sponserBoxData.json'
$.getJSON(jsonData, function(data){
  var sponserBoxData = data
  console.log(sponserBoxData)




//TODO 1 : 스폰서 항목 생성 및 이미지 넣기 --------------
//? 자바스크립트 -------------------
//* 함수 ---------------
//* 변수 ------------
var sponserboxArea = document.querySelector('.sponsor_area')
var baseUrl = "../../img/main_page_re/main_page_re/all_device/h_sponsorBox/"



//* 함수 ---------------
var makeSponserContentFn = function(image, image_description){
  var sponserboxAreaUl = sponserboxArea.querySelector('ul')
  var makeLi = document.createElement('li')
  makeLi.innerHTML = '<div class="img_area"><a href="#"><span>'+ image_description +'</span></a></div>'

  var SelImgCon = makeLi.querySelector('.img_area')
  SelImgCon.style.backgroundImage = 'url('+ baseUrl +''+ image +')'; 

  sponserboxAreaUl.append(makeLi)
}


//* 반복문으로 여러번 만들기 ---------------
var i = 0;
for( ; i<sponserBoxData.length ; i+=1 ) {
  makeSponserContentFn(sponserBoxData[0].image, sponserBoxData[0].image_description)
}




//? 제이쿼리 -------------------
(function($){
//* 변수 ------------
var sponserBox = $('#sponserBox')
var sponserboxWrap = $('.sponserWrap')
var sponserboxAreaUl = sponserboxWrap.find('ul')
var sponserboxAreaLi = sponserboxWrap.find('li')
var sponserboxAreaDiv = sponserboxAreaUl.find('div')
var sponserBoxbtn = $('.slide_operation')

var permission = true;
var i = 1
var timed = 5000;



//* 함수 ---------------
var sponserBoxMovingFn = function(){
  permission = false; // 출입 패스권 (승인취소)

  sponserboxAreaUl.stop().animate({ marginLeft : -150 + "px" }, 
  function(){
  sponserboxAreaLi.eq(0).appendTo(sponserboxAreaUl); // 02-03-..-10-01
  sponserboxAreaUl.css({ marginLeft: 0 }) 
  // -150 가고 앞에 거 떼면 결과적으로 -300 가게 되므로, -150만 가도록 조치
  sponserboxAreaLi = sponserboxAreaUl.children('li');
  // 함수 외부에서는 sponserboxAreaLi의 순서가 appendTo로 변경되기 이전의 순서로 되어 있으므로, appendTo가 실행된 이후의 값으로 덮어 써 주어야 한다. (02-03-..-10-01)

  permission = true;

  });
} //* 무한 슬라이드 : 요소 강제이동형 함수


var slideGoFn = function(){
  autoPlay = setInterval(function(){
    sponserBoxbtn.trigger('click'); //* click이라는 이벤트를 발생시킨다.
  }, timed);
} // slideGoFn() : 자동으로 슬라이드 움직이게 만들기

var slideStopFn = function(){
  clearInterval(autoPlay);
}; // slideStopFn() : 슬라이드 자동 이동 멈추도록 하기


slideGoFn()


//TODO 2 : IS기법 적용 --------------
//* 사전 기능 실행 ---------------
// sponserboxAreaDiv.eq(1).css({ "backgroundPosition": "-300px 0" })
// sponserboxAreaDiv.eq(2).css({ "backgroundPosition": "-450px 0" })
// ...
// sponserboxAreaDiv.eq(9).css({ "backgroundPosition": "-1500px 0" })

var k = 1;
for( ; k<sponserBoxData.length ; k+=1 ) {
  sponserboxAreaDiv.eq(k).css({ 
    "backgroundPosition": -150 * k+1 + 'px' })
}



//TODO 3 : 슬라이드 처리 --------------
//* 이벤트 -----------
sponserBoxbtn.on('click', function(e){
  e.preventDefault()
  sponserBoxMovingFn()
})

sponserBox.on('mouseenter', function(){
  slideStopFn()
})

sponserBox.on('mouseleave', function(){
  slideGoFn()
})


})(jQuery);



}) // $.getJSON (jsonData = '../json/sponserBoxData.json')