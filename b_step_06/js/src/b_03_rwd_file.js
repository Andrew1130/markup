// b_03_rwd_file.js


(function($){
//? 구현할 기능 -----------

//? 변수 ------------

//? 이벤트 -----------

//TODO : &.이름 = : 다른 js 파일에서 사용하기
//* 원래는 setTimeout 없이도 사용 가능하나, 원래의 js 파일에서 json 파일을 불러온 경우 아래와 같이 setTimeout을 사용해야 한다. (원래의 js 파일[jquery_rwd_set.js]에서 json 데이터를 불러와서 그 js가 실행된 이후에 이 js[b_03_rwd_file.js]가 실행되어야 한다는 의미로 보임) 
//* 위의 경우, 원래의 js 파일에서 불러왔던 js 파일을 동일하게 불러오면 setTimeout 없이도 사용 가능하다.


// setTimeout(function(){

  var jsonData = '../data/device_type.json'
  $.getJSON(jsonData, function(data){
    var checkType = $.check_Type;
    console.log(checkType)
  
  })

// }, 100);



})(jQuery);