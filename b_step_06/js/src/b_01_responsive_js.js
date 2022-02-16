// b_01_responsive_js.js


(function($){
//? 구현할 기능 -----------
/*
- 사용하고 있는 브라우저 또는 디바이스 환경의 가로크기를 기준으로 움직임을 파악
1. 현재의 크기에서 브라우저의 크기가 변화했는지 파악 -> $(window), on
('resize')

2. 현재의 가로값 체크, 변화된 내용에서 가로값이 변화했는지 여부 파악 
(1) 선택자.width() : 해당하는 요소의 가로값을 파악
(2) 선택자.innerWidth() : 요소의 가로값을 파악(padding을 포함)
(3) 선택자.outerWidth() : 요소의 가로값 파악(padding+border 포함)
(4) 선택자.outerWidth(true) 요소의 가로값 파악(padding+border+margin 포함)
 1) 제이쿼리에만 존재하는 기능
*/


//? 변수 ------------
var win = $(window);

var beforeW = win.width(); 
// var cssW = $('body').css('width')

// console.log(beforeW) // 숫자만 반환
// console.log(cssW) // px 포함하여 문자열로 반환

var deviceSize = 1024;
var deviceType = ['pc', 'handhelds'];

var beforeDeviceType;
var nowDeviceType;


var exWrap = $('.ex_wrap')
var baseUrl = '../page/rwdHtml/'
var deviceHtml = ['pc.html', 'handhelds.html']



//? 함수 ------------------------------
var deviceCheckFn = function(nowWidth){

  if(nowWidth >= deviceSize){
    nowDeviceType = deviceType[0];
    exWrap.load(baseUrl + deviceHtml[0])
  } else {
    nowDeviceType = deviceType[1];
    exWrap.load(baseUrl + deviceHtml[1])
  }
  // console.log(nowDeviceType, nowWidth);
  return nowDeviceType

}; // deviceCheckFn(nowWidth)

beforeDeviceType = deviceCheckFn(beforeW);


//? 이벤트 -----------
win.on('resize', function(){
  // console.log('브라우저 크기 변화')
  var afterW = win.width();
  deviceCheckFn(afterW)

  if(beforeDeviceType !== nowDeviceType){
    location.reload(); // 새로고침 (제이쿼리가 제대로 작동하지 않을 때 입력해볼 수 있는 코드)

    console.log('디바이스 환경이 변화되었습니다.');
    console.log(beforeDeviceType, nowDeviceType);
    beforeDeviceType = nowDeviceType;
    beforeW = afterW
  }

});


})(jQuery);