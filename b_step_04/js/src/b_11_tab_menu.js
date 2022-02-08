// b_11_tab_menu.js

/*
ajax -> 비동기 방식
실시간으로 필요에 따라 변경
동기식은 서버에서 응답을 받아야만 다음 동작이 이루어지는데,
비동기식은 서버에 요청을 보낸 후 서버에서 응답이 오지 않아도 동작할 수 있다.
*/

(function($){

  //* $.getJSON으로도 json 파일 불러오기 가능
  // $.getJSON("../json/menu.json", function(data){
  //   console.log( data );
  // });

  $.ajax ({
    url: "../json/menu.json",
    context: document.body
  }).done(function(data){
    var dataFile = data;
  
    var i =0
    var len = dataFile.length
    var tabTitle = [];
    for(var i=0; i < len; i+=1 ){
      tabTitle.push( dataFile[i].type );
    }
    

  //? 탭메뉴 타이틀 설정 --------------------------------------- 
    //* 배열.filter(function(data, index){}); 
    /* 배열 중에서 원하는 조건에 맞는 데이터만 골라서(필터링해서) 가져오기 위해 사용 */
    //* indexOf() : 문자열이나 배열 등의 형식에서 작성한 요소와 일치하는 순서를 파악 >> 작성한 요소가 여러 개 있을 경우 맨 처음 위치를 반환


    // 중복되는 배열의 값을 정리해주는 기능
    var tabTitleCheck = tabTitle.filter(function(data, index){;
      return tabTitle.indexOf(data) === index;
    });


  //? 탭메뉴 내용 구성에 맞는 목록 체크 --------------------------
    var tabMenuSet;
    var tabMenuFn = function(n) {  
      tabMenuSet = dataFile.filter(function(data){
        return data.type === tabTitleCheck[n];
      });
    }
    tabMenuFn(0);
    console.log(tabMenuSet);


  //* -----------------------------------------------------------------

    //TODO : 구현할 기능
    /*
    1. 선택된 버튼의 순서를 파악
    2. 선택된 버튼의 내용에 맞는 구성을 설정
    */


    //TODO : 변수
    var tabArea = $('.tab_area');
    var tabTitle = tabArea.find('.tab_title')
    var tabTLi = tabTitle.find('li');
    var tabBtn = tabTLi.find('button');
    var tabContent = tabArea.find('.tab_content'); 
    var tabConMenu = tabContent.find('.tab_list');


    //TODO : 이벤트
    tabBtn.on('click', function(e){
      e.preventDefault();
      var i = $(this).parent().index();

      tabBtn.parent().eq(i).addClass('on');
      tabBtn.parent().eq(i).siblings().removeClass('on');

      tabConMenu.text( 'tab 구성' + (i+1) );
    });


  }); // $.ajax

})(jQuery);