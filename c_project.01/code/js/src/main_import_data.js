// main_import_data.js


(function($){
//? 구현할 기능 -----------
/*
- 분리된 html 문서를 하나로 합쳐서 사용할 수 있도록 처리
*/

setTimeout(function(){
  var deviceCk = $.check_Type;
  // console.log(deviceCk);

//? 변수 ------------
//* 전체 공통 ------------------
var body = $('body')

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
headBox.load(baseUrl_common + importPage_common[0], function(){
  var headMenu = '<script src="../js/src/commonFile/navBox.js" class="headMenu"></script>';
  if(deviceCk === 'smartphone' || deviceCk === 'tablet'){
    body.append(headMenu)
  } else {
    body.remove($('.headMenu'));
  }
});
// (deviceCk === 'smartphone' || deviceCk === 'tablet') ? $('body').append(headMenu) : $('body').remove($('.head_script'));
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


//* 반응형 영역별 자바스크립트 호출 ----------------------------
$.each(mainSelect, function(index, selector){
  selector.load(baseUrl_main + importPage_main[index], function(){
    if(index === 0) {
      if(deviceCk === 'desktop'){
        body.remove($('.laptop_slideBox'));
        body.remove($('.tablet_slideBox'));
        body.remove($('.smartphone_slideBox'));
        body.append('<script src="../js/src/desktop/slideBox.js" class="desktop_slideBox"></script>')
      } else if (deviceCk === 'laptop') {
        body.remove($('.desktop_slideBox'));
        body.remove($('.tablet_slideBox'));
        body.remove($('.smartphone_slideBox'));
        body.append('<script src="../js/src/laptop/slideBox.js" class="laptop_slideBox"></script>')
      } else if (deviceCk === 'tablet') {
        body.remove($('.desktop_slideBox'));
        body.remove($('.laptop_slideBox'));
        body.remove($('.smartphone_slideBox'));
        body.append('<script src="../js/src/tablet/slideBox.js" class="tablet_slideBox"></script>')
      } else if (deviceCk === 'smartphone') {
        body.remove($('.desktop_slideBox'));
        body.remove($('.laptop_slideBox'));
        body.remove($('.tablet_slideBox'));
        body.append('<script src="../js/src/smartphone/slideBox.js" class="smartphone_slideBox"></script>')
      }

    } else if(index === 1) {
      //importPage_main[1]일 때, 즉 newBox.html이 import되었을 때 그 이후에 (콜백함수) 아래의 조건문이 실행
      if(deviceCk === 'desktop'){
        body.remove($('.laptopNewBox'));
        body.remove($('.tabletNewBox'));
        body.remove($('.smartphoneNewBox'));
        body.append('<script src="../js/src/desktop/newBox.js" class="desktopNewBox"></script>')
      } else if (deviceCk === 'laptop') {
        body.remove($('.desktopNewBox'));
        body.remove($('.tabletNewBox'));
        body.remove($('.smartphoneNewBox'));
        body.append('<script src="../js/src/laptop/newBox.js" class="laptopNewBox"></script>')
      } else if (deviceCk === 'tablet') {
        body.remove($('.desktopNewBox'));
        body.remove($('.laptopNewBox'));
        body.remove($('.smartphoneNewBox'));
        body.append('<script src="../js/src/tablet/newBox.js" class="tabletNewBox"></script>')
      } else if (deviceCk === 'smartphone') {
        body.remove($('.desktopNewBox'));
        body.remove($('.laptopNewBox'));
        body.remove($('.tabletNewBox'));
        body.append('<script src="../js/src/smartphone/newBox.js" class="smartphoneNewBox"></script>')
      }
      // jquery_rwd_set.js 에서 너비 변경으로 인해 기기가 변경될 시 새로고침(location.reload();)이 되도록 설정해 놓았기 때문에, else if도 동작한다.
 
    } else if(index === 3) {

      if(deviceCk === 'desktop'){
        body.remove($('.laptopBestBox'));
        body.remove($('.tabletBestBox'));
        body.remove($('.smartphoneBestBox'));
        body.append('<script src="../js/src/desktop/bestBox.js" class="desktopBestBox"></script>');
      } else if (deviceCk === 'laptop') {
        body.remove($('.desktopBestBox'));
        body.remove($('.tabletBestBox'));
        body.remove($('.smartphoneBestBox'));
        body.append('<script src="../js/src/laptop/bestBox.js" class="laptopBestBox"></script>')
      } else if (deviceCk === 'tablet') {
        body.remove($('.desktopBestBox'));
        body.remove($('.laptopBestBox'));
        body.remove($('.smartphoneBestBox'));
        body.append('<script src="../js/src/tablet/bestBox.js" class="tabletBestBox"></script>')
      } else if (deviceCk === 'smartphone') {
        body.remove($('.desktopBestBox'));
        body.remove($('.laptopBestBox'));
        body.remove($('.tabletBestBox'));
        body.append('<script src="../js/src/smartphone/bestBox.js" class="smartphoneBestBox"></script>')
      }
      
    } else if (index === 4) {
      body.append('<script src="../js/src/galleryBox.js"></script>')
    } else if (index === 5) {
      if(deviceCk === 'desktop'){
        body.remove($('.laptop_sponserBox'));
        body.remove($('.tablet_sponserBox'));
        body.remove($('.smartphone_sponserBox'));
        body.append('<script src="../js/src/desktop/sponserBox.js" class="desktop_sponserBox"></script>');
      } else if (deviceCk === 'laptop') {
        body.remove($('.desktop_sponserBox'));
        body.remove($('.tablet_sponserBox'));
        body.remove($('.smartphone_sponserBox'));
        body.append('<script src="../js/src/laptop/sponserBox.js" class="laptop_sponserBox"></script>');                
      } else if (deviceCk === 'tablet') {
        body.remove($('.desktop_sponserBox'));
        body.remove($('.laptop_sponserBox'));
        body.remove($('.smartphone_sponserBox'));
        body.append('<script src="../js/src/tablet/sponserBox.js" class="tablet_sponserBox"></script>');
      } else if (deviceCk === 'smartphone') {
        body.remove($('.desktop_sponserBox'));
        body.remove($('.laptop_sponserBox'));
        body.remove($('.tablet_sponserBox'));
        body.append('<script src="../js/src/smartphone/sponserBox.js" class="smartphone_sponserBox"></script>');
      }
    }
  });
});


}, 300); // setTimeout()
//* 시간이 너무 짧으면(ex. 10) jquery_rwd_set.js에서 데이터를 불러와 동작하기 이전에 함수가 실행되어 버릴 수 있다. jquery_rwd_set.js의 완전한 동작이 전제된 후에 작동하여야 하므로, 어느 정도 시간을 주는 것이 안정적이다.

//? 이벤트 -----------


})(jQuery);