// b_08_gallery.js

(function($){

  
//? 구현할 기능 ---------------------
/*
1. 갤러리 영역에 이미지를 변경하도록
2. 버튼을 클릭시 해당 버튼의 순서를 기억 -> 이미지의 순번에 맞는 이미지가 나타나게
3. 해당하는 순서에 맞는 구성에 .on을 추가, 이외에는 제거
*/


//? 변수 ------------------------
var galleryArea = $('.gallery_area');
var galleryContent = galleryArea.children('.gallery_content');
var galImg = galleryContent.children('img');
var galleryList = galleryArea.children('.gallery_list');
var galLi = galleryList.children('li');
var galBtn = galLi.children('button');


//? 이벤트 ---------------------
galBtn.on('click', function(e){
  e.preventDefault();
  var i = $(this).parent().index();
  galImg.eq(i).addClass('on');
  galImg.eq(i).siblings().removeClass('on');
  galLi.eq(i).addClass('on');
  galLi.eq(i).siblings().removeClass('on');
})


})(jQuery);