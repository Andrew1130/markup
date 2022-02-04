// b_05_jQuery_show_hide.js

(function($){

  var exWrap = $('.ex_wrap');
  var galleryImg = exWrap.find('.gallery_img');
  var btnArea = exWrap.find('.btn');
  var btnList = btnArea.children('li');

  var view = btnList.eq(0);
  var fade = btnList.eq(1);
  var slide = btnList.eq(2);
  var classSet = btnList.eq(3);

  var timed = 500;

  // galleryImg.css({ 'display':'block' })



  //? viewer ( show / hide / toggle ) -------------
  // 이미지가 작아졌다 커지면서 나타나거나 사라짐
  //* .stop() >> timed보다 짧은 시간에 이벤트가 발생했을 때 기존 이벤트에 의한 애니메이션은 무시하고 가장 최근의 이벤트만을 실행하도록 함

  var viewBtn =  view.children('button');

  viewBtn.eq(0).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().show(timed); // 숫자는 밀리초 단위
  });

  viewBtn.eq(1).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().hide(timed);
  });

  viewBtn.eq(2).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().toggle(timed);
  });



  //? fade ( fadeIn / fadeOut / fadeToggle ) -------------
  // 이미지가 흐렸다가 선명해지면서 나타나거나, 흐려지며 사라짐
  
  var fadeBtn = fade.children('button');

  fadeBtn.eq(0).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().fadeIn(timed);
  })

  fadeBtn.eq(1).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().fadeOut(timed);
  })

  fadeBtn.eq(2).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().fadeToggle(timed);
  })



  //? slide ( slideDown / slideUp / slideToggle ) ------------
  // 이미지가 위에서 아래로 내려오면서 나타나고, 아래에서 위로 올라가며 사라진다.

  var slideBtn = slide.children('button');

  slideBtn.eq(0).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().slideDown(timed);
  })

  slideBtn.eq(1).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().slideUp(timed);
  })

  slideBtn.eq(2).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().slideToggle(timed);
  })



  //? class ( addClass / removeClass / toggleClass ) ------------
  // 클래스를 해당 위치에 생성시키거나 삭제한다.

  var classBtn = classSet.children('button');

  classBtn.eq(0).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().addClass('on');
  })

  classBtn.eq(1).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().removeClass('on');
  })

  classBtn.eq(2).on('click', function(e){
    e.preventDefault();
    galleryImg.stop().toggleClass('on');
  })




})(jQuery);