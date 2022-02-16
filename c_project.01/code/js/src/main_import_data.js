// main_import_data.js


(function($){
//? 구현할 기능 -----------
/*
- 분리된 html 문서를 하나로 합쳐서 사용할 수 있도록 처리
*/


//? 변수 ------------
//* common 영역 변수 ---------------------
var headBox = $('#headBox');
var footBox = $('#footBox');

var baseUrl_common = "../page/common/";
var importPage_common = ['headBox.html', 'footBox.html'];


//* main 영역 변수 -----------------------
var slideBox = $('#slideBox')
var newBox = $('#newBox')
var subBox = $('#subBox')
var bestBox = $('#bestBox')
var galleryBox = $('#galleryBox')
var sponserBox = $('#sponserBox')

var baseUrl_main = "../page/main/";
var importPage_main = ['slideBox.html', 'newBox.html', 'subBox.html', 'bestBox.html', 'galleryBox.html', 'sponserBox.html'];
var mainSelect = [slideBox, newBox, subBox, bestBox, galleryBox, sponserBox]


//? 기능 수행 ------------
//* common 영역 불러오기 ---------------------
headBox.load(baseUrl_common + importPage_common[0])
footBox.load(baseUrl_common + importPage_common[1])


//* main 영역 불러오기 -----------------------
// slideBox.load(baseUrl_main + importPage_main[0])
// newBox.load(baseUrl_main + importPage_main[1])
// subBox.load(baseUrl_main + importPage_main[2])
// bestBox.load(baseUrl_main + importPage_main[3])
// galleryBox.load(baseUrl_main + importPage_main[4])
// sponserBox.load(baseUrl_main + importPage_main[5])

// var i = 0;
// for( ; i < importPage_main.length ; i += 1 ){
//   mainSelect[i].load(baseUrl_main + importPage_main[i])
// }

//* 배열.forEach(function(data, index){})
//* $.each(배열, function(index, data){})

$.each(mainSelect, function(index, selector){
  selector.load(baseUrl_main + importPage_main[index], function(){
    if(index === 0) {
      $('body').append('<script src="../js/src/main_ad_slide.js" class="pc_slide"></script>')
    }
  });
});



//? 이벤트 -----------


})(jQuery);