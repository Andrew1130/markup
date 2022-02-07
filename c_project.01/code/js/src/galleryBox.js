// galleryBox.js


(function($){


  //? 변수 ------------------------------
  var gallery = $('.gallery_imgs ');
  // var galContent = gallery.find('.gallery_content');
  var galImg = gallery.find('img');
  var galList = $('.listArea');
  var galLi = galList.find('li');
  var galA = galLi.find('a');


  //? 함수 ---------------------------
  var imgFn = function(n){
    galImg.eq(n).addClass('on');
    galImg.eq(n).siblings().removeClass('on');
  }

  var AFn = function(k){
    galLi.eq(k).addClass('on');
    galLi.eq(k).siblings().removeClass('on');
  }


  //? 이벤트 -----------------------------
  galA.on('click', function(e){
    e.preventDefault()
    var i = $(this).parent().index();
    console.log(i)

    imgFn(i)
    AFn(i)

  });


})(jQuery);