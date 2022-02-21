// modal.js


(function($){

// card를 클릭시 modal 나타나게 만들기
// modal 클릭시 modal 사라지게 만들기


//* ----------------------------------
//* 변수 ----------------------
var cardArea = $('.card_area');
var cardLi = cardArea.find('li');
var cardBtn = cardLi.children('button');

var cardModal = $('.card_modal');
var indexEl = cardModal.find('.index')
var modalClose = cardModal.find('.close')
var modalBg = cardModal.find('.modal_bg')

var INDEXNUM = 0;


//* 함수 ---------------------
var fnCloseModal = function(){
  cardModal.fadeOut();
};


//* 이벤트 -------------------------
cardBtn.on('click', function(e){
  e.preventDefault();
  INDEXNUM = $(this).parent().index();
  indexEl.text(INDEXNUM + 1);
  cardModal.fadeIn();
});

modalClose.on('click', function(e){
  e.preventDefault();
  fnCloseModal();
})

// cardModal.on('click', function(e){
//   $(this).fadeOut()
//   e.preventDefault();
// })

modalBg.on('click', function(e){
  e.preventDefault();
  fnCloseModal();
})

})(jQuery);