// matchMedia.js


(function($){

  var win = $(window);
  var winWidth = win.outerWidth();
  var primaryDevice = 1280;
  var NowDevice;
  var AfterDeivce;
  var headBox = $('#headBox');



  //? 함수 ----------------------------

  var fnJQDevice = function(device){
    (device <= primaryDevice) ? AfterDeivce = 'moblie' : AfterDeivce = 'pc';
    if(NowDevice !== AfterDeivce) {
      NowDevice = AfterDeivce;
      // console.log(NowDevice)
    } 
  }

  var fnDeviceHeader = function(device){
    if(device === 'moblie'){
      headBox.load('../temp/moblieHeader.html', function(){});
    } else if(device === 'pc') {
      headBox.load('../temp/pcHeader.html', function(){});
    }
  }

  fnJQDevice(winWidth);
  fnDeviceHeader(NowDevice);


/*
  
//? Jquery 표현 -------------------------------------------------

  win.on('resize', function(){
    var AfterDeivce
    var winWidth2 = win.outerWidth();
    if(winWidth !== winWidth2) {
      if(winWidth2 <= primaryDevice){
        AfterDeivce = 'moblie';
      } else {
        AfterDeivce = 'pc'
      }

      if(NowDevice !== AfterDeivce) {
        NowDevice = AfterDeivce;
        // console.log(NowDevice)
      } 

      fnDeviceHeader(NowDevice)
      // console.log가 여러번 출력되는 문제를 해결하기 위해
      // NowDevice와 AfterDeivce가 값이 다른 경우에만 콘솔이 출력되도록 처리
    } 
  });


*/
  
//? javascript 표현 -------------------------------------------------


  var setWidth = window.matchMedia("screen and (min-width:"+primaryDevice+"px)");
  // console.log(setWidth)

  setWidth.addEventListener('change', function(){
    var AfterDeivce;

    /*
    if(setWidth.matches === true){
      AfterDeivce = 'pc';
    } else {
      AfterDeivce = 'moblie'
    }
    */

    //* matchMedia 메소드는 그 속성값으로 matches를 갖는데, 너비값이 일치하면 true를 반환하고 일치하지 않으면 false를 반환한다. 즉 여기서는 min-width가 1280px 이상이면 true를 반환하고, 미만이면 false를 반환한다. 아래의 삼항 연산자는 위 성질을 이용한 것이다.
    (setWidth.matches === true) ? AfterDeivce = 'pc' : AfterDeivce = 'moblie'

    
    //* NowDevice가 AfterDeivce와 다르면 NowDevice의 값에 AfterDeivce의 값을 덮어 써 준다.
    /*
    NowDevice는 함수 바깥의 값이기 때문에, 함수 작동과는 무관하다. 함수 작동과 관계 있는 값은 AfterDeivce 뿐이다. 
    즉, AfterDeivce의 값이 NowDevice의 값과 달라지는 경우만 NowDevice의 값이 변경되고, NowDevice의 값이 변경되는 경우만 console.log(NowDevice); 및 fnDeviceHeader(NowDevice); 의 값이 변경된다.
    */
    if(NowDevice !== AfterDeivce) {
      NowDevice = AfterDeivce;
    }

    console.log(NowDevice);
    fnDeviceHeader(NowDevice);
 });

})(jQuery);

  

//? 구현할 기능 -----------

//? 변수 ------------

//? 이벤트 -----------


  
      