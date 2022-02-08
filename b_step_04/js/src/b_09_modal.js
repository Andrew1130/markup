// b_09_modal.js


/* 
사용자 속성(attr([속성명]))을 가져오는 방법
var testLi = $('.modal_list').find('li').eq(0);
var checkAttr = testLi.attr('data-img');
var checkAttr2 = testLi.attr('data-narr');
console.log( checkAttr, checkAttr2 ); 
*/



(function($){
//? 구현할 기능 ----------------
/*
1. 버튼을 클릭시 해당하는 요소에 있는 부모의 속성값(img, narr)을 파악
2. .modal_content 에 배경이미지를 담고, p요소에 글자를 변경 ( css, text )
3. .modal_window 나타나도록 함 (show, fadeIn, slideDown ... )
4. .modal_window의 닫기버튼을 클릭시 .modal_window를 사라지도록 함 (hide, fadeOut, slideUp ...)
*/


//? 변수 --------------------
var modal = $('.modal');
var modalLi = modal.find('li');
var modalBtn = modalLi.children('button');

var modalWindow = $('.modal_window');
var modalClose = modalWindow.find('.close_btn');
var closeBtn = modalClose.children('button');

var modalContent = modalWindow.find('.modal_content');
var modalP = modalContent.children('p');

var bigImgUrl = '../../img/gallery/img/album/view/'
var timed = 300;


//? 함수 --------------------
var imgUrlFn = function(data){
  var url = 'url("'+ bigImgUrl + data +'")';
  return url
}


//* + button들에 이미지 넣기
var smallimgInsert = function(data){

  var i = 0
  for(; i<modalLi.length ; i+=1){
    var img = modalLi.eq(i).attr('data-img');
    modalBtn.eq(i).css({ backgroundImage : imgUrlFn(img) });
  }
  
}

smallimgInsert()


//? 이벤트 ------------------
modalBtn.on('click', function(e){
  e.preventDefault();

  //* 이미지와 기능 가져오기 (1번)
  var par =  $(this).parent();
  var img = par.attr('data-img');
  var narr = par.attr('data-narr');

  //* .modal_content에 사진, 내용 담기 (2번)
  modalContent.css({ backgroundImage : imgUrlFn(img) });
  modalP.text(narr);

  //* .modal_window 나타나게 만들기 (3번)
  // modalWindow.show();
  modalWindow.fadeIn(timed, function(){
    // closeBtn.focus()
  });

  //* .modal_window의 닫기버튼을 클릭시 .modal_window를 사라지게 하기 (4번)
  closeBtn.on('click', function(e){
    e.preventDefault();
    modalWindow.fadeOut(timed);
  });

})


})(jQuery)