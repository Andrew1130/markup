// b_08_gallery_02.js


(function($){


  //? 변수 ------------------------------
  var gallery = $('.gallery_area_2');
  var galContent = gallery.find('.gallery_content');
  var galImg = galContent.find('img');
  var galUl = gallery.find('.gallery_list');
  var galLi = galUl.find('li');
  var galBtn = galLi.find('button');


  //? 함수 ---------------------------
  var imgFn = function(n){
    galImg.eq(n).addClass('on');
    galImg.eq(n).siblings().removeClass('on');
  }

  var btnFn = function(k){
    galLi.eq(k).addClass('on');
    galLi.eq(k).siblings().removeClass('on');
  }


  //? 이벤트 -----------------------------
  galBtn.on('click', function(e){
    e.preventDefault()
    var i = $(this).parent().index();

    imgFn(i)
    btnFn(i)

  });


})(jQuery);