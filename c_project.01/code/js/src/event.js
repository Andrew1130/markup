// event.js



//? 배열 --------------------------------
//* json 호출로 대체


var dataList = []
$.ajax({url:'../json/event_modalbar.json'}).done(function(modalBardata){
  $.ajax({url:'../json/event_modalwindow.json'}).done(function(modalWindowdata){
    dataList[0] = modalBardata;
    dataList[1] = modalWindowdata;

    console.log(dataList[0])
    console.log(dataList[1])

    //code 수행



//? 구현할 기능 -----------



//? 자바스크립트 ------------------------------
//* 함수식 -------------
var makeModalBarFn = function(title, date, pngImg, svgImg) {
  var modal = document.querySelector('.modal')
  var makeDl = document.createElement('dl')

  makeDl.innerHTML = '<div class = bgImg_area><i class="circle"></i><dt><button type="button"><h2>'+ title +'</h2><i class="checkBtn"></i></button></dt><dd>'+ date +'</dd></div>'

  var modalDiv = makeDl.querySelector('div')

  // var modalDiv = modal.querySelector('div')
  // console.log(modalDiv)
  //* .querySelector는 첫 번째 인자에만 접근한다. 위와 같이 쓰면 .modal에 있는 첫 번째 div를 선택하라는 의미가 된다.

  modalDiv.style.backgroundImage = 'url('+ pngImg +')';
  modalDiv.style.backgroundImage = 'url('+ svgImg +')';
  modal.append(makeDl)
}

var makeModalWindowFn = function ( modal_title, modal_content_1, mc_img_1, modal_content_2, mc_img_2_01, mc_img_2_02,  modal_content_3 , mc_img_3, modal_content_4 ) {
  var modalBox = document.querySelector('.modal_box')

  modalBox.innerHTML = '<ul class="titlepart clearfix"><li><div class = "modal_circle"></div></li><li><h3>'+ modal_title +'</h3></li><li><div class = "modal_closebtn"></div></li></ul><div class="contentpart"><p>'+ modal_content_1 +'</p><div class="mc_img_1"></div><p>'+ modal_content_2 +'</p><ul class="clearfix middle_img_area"><li><div class="mc_img_2_01"></div></li><li><div class="mc_img_2_02"></div></li></ul><p>'+ modal_content_3 +'</p><div class="mc_img_3"></div><p>'+ modal_content_4 +'</p></div>'


  var Sel_mc_img_1 = modalBox.querySelector('.mc_img_1');
  var Sel_mc_img_2_01 = modalBox.querySelector('.mc_img_2_01');
  var Sel_mc_img_2_02 = modalBox.querySelector('.mc_img_2_02');
  var Sel_mc_img_3 = modalBox.querySelector('.mc_img_3');

  Sel_mc_img_1.style.backgroundImage = 'url('+ mc_img_1 +')';
  Sel_mc_img_2_01.style.backgroundImage = 'url('+ mc_img_2_01 +')';
  Sel_mc_img_2_02.style.backgroundImage = 'url('+ mc_img_2_02 +')';
  Sel_mc_img_3.style.backgroundImage = 'url('+ mc_img_3 +')';

}



//* 반복문 -------------
var i = 0
for( ; i<modalBardata.length ; i+=1 ) {
  makeModalBarFn(modalBardata[i].title, modalBardata[i].date, modalBardata[i].pngImg, modalBardata[i].svgImg)
}



(function($){



//? jQuery -----------
// jQuery로만 작성시, jQurey 내부에서는 innerHTML로 인해 생성된 태그들이 makeModalBarFn 함수 범위 내에서만 인식되는 문제가 있어, 태그 생성은 js로 하고 생성된 태그의 컨트롤은 jQurey로 진행

//* 변수
var modal = $(".modal")
var modalDl = modal.find("dl")
var bgimgArea = modalDl.find(".bgImg_area")

var modalBackground = $("#modalWindow")
var modalWindowArea = $(".modal_window")
var modalBox = $(".modal_box")
var titlePart = modalBox.find('ul')
var titleLi = titlePart.find('li')
var modalCloseBtn = $(".modal_closebtn")



//* 함수


//* 사전 기능 실행


//* 이벤트


// bgimgArea.on('mouseenter', function(){
//   var k = $(this).parent().index();
//   console.log(k)
//   modalDl.eq(k).css({ backgroudColor : "#ccc" })
// });


bgimgArea.on('click', function(){

  var i = $(this).parent().index();

  // 선택한 창에 맞는 모달 윈도우 데이터를 입력해서 창을 만들기
  makeModalWindowFn( 
    modalWindowdata[i].modal_title, 
    modalWindowdata[i].modal_content_1, 
    modalWindowdata[i].mc_img_1, 
    modalWindowdata[i].modal_content_2, 
    modalWindowdata[i].mc_img_2_01, 
    modalWindowdata[i].mc_img_2_02,
    modalWindowdata[i].modal_content_3,   
    modalWindowdata[i].mc_img_3, 
    modalWindowdata[i].modal_content_4
    )

  // 만들어진 모달 윈도우를 나타나게 하기  
  modalBackground.fadeIn()
  modalWindowArea.fadeIn()

  var modalCloseBtn = $(".modal_closebtn")
  console.log(modalCloseBtn)

  // 창 닫기
  modalCloseBtn.on('click', function(){
    modalBackground.fadeOut()
    modalWindowArea.fadeOut()
  })

});



})(jQuery);


}) // $.ajax_data2.json
}) // $.ajax_data1.json