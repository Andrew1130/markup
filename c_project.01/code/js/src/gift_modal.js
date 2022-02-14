// gift_modal.js


//? 배열 -------------------------------------------
//* json 파일로 대체 --------------



$.ajax({

  url:"../json/gift_modal.json",
  context: document.body

}).done(function(data){

  var modalWindowdata = data;



//? 자바스크립트 ------------------------------

//* 함수식 -------------
var makeModalWindowFn = function ( modal_title, modal_content_1, mc_img_1 ) {
  var modalBox = document.querySelector('.modal_box')

  modalBox.innerHTML = '<ul class="titlepart clearfix"><li><div class = "modal_circle"></div></li><li><h3>'+ modal_title +'</h3></li><li><div class = "modal_closebtn"></div></li></ul><div class="contentpart"><p>'+ modal_content_1 +'</p><div class="mc_img_1"></div></div>'


  var Sel_mc_img_1 = modalBox.querySelector('.mc_img_1');
  Sel_mc_img_1.style.backgroundImage = 'url('+ mc_img_1 +')';
}; //! 여기서 ;를 안써주면 jquery가 작동하지 않으니 주의



//? 제이쿼리 ------------------------------

(function($){
//* 변수 ------------
var cardBox = $('.cardBox')
var cardArea = cardBox.find('.card_area')
var cardLi = cardArea.find('li')
var cardLiDetailButtonWrap = cardLi.find('.top')
var cardLiDetailButton = cardLiDetailButtonWrap.find('a')

var modalBackground = $("#modalWindow")
var modalWindowArea = $(".modal_window")
var modalBox = $(".modal_box")
var titlePart = modalBox.find('ul')
var titleLi = titlePart.find('li')
var modalCloseBtn = $(".modal_closebtn")


//* 이벤트 -----------

cardLiDetailButton.on('click', function(e){

  e.preventDefault()
  var i = $(this).parent().parent().parent().index();
  console.log(i)

  // 선택한 창에 맞는 모달 윈도우 데이터를 입력해서 창을 만들기
  makeModalWindowFn( 
    modalWindowdata[i].modal_title, 
    modalWindowdata[i].modal_content_1, 
    modalWindowdata[i].mc_img_1
    )

  // 만들어진 모달 윈도우를 나타나게 하기  
  modalBackground.fadeIn()
  modalWindowArea.fadeIn()

  var modalCloseBtn = $(".modal_closebtn")

  // 창 닫기
  modalCloseBtn.on('click', function(){
    modalBackground.fadeOut()
    modalWindowArea.fadeOut()
  })

})


})(jQuery);


}) // $.ajax > .done(function(data)