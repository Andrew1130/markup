// import_common_data.js


(function($){
  //? 구현할 기능 -----------
  /*
  - 분리된 html 문서를 하나로 합쳐서 사용할 수 있도록 처리
  */

setTimeout(function(){
  var deviceCk = $.check_Type;
  // jquery_rwd_set.js


  //? 변수 ------------
  //* 전체 공통 ------------------
  var body = $('body')
  
  
  //* common 영역 변수 ---------------------
  var headBox = $('#headBox');
  var footBox = $('#footBox');
  
  var baseUrl_common = "../page/common/";
  var importPage_common = ['headBox.html', 'footBox.html'];
  
  
  //? 기능 수행 ------------
  //* common 영역 불러오기 ---------------------
  headBox.load(baseUrl_common + importPage_common[0], function(){

    /* 
    반응형 제작시 필요 코드
    var headMenu = '<script src="../js/src/commonFile/navBox.js" class="headMenu"></script>';
    if(deviceCk === 'smartphone' || deviceCk === 'tablet'){
      body.append(headMenu)
    } else {
      body.remove($('.headMenu'));
    }
    */

  });

  footBox.load(baseUrl_common + importPage_common[1])


}, 300); // setTimeout()


})(jQuery);