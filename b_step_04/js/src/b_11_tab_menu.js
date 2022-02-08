// b_11_tab_menu.js

/*
ajax -> 비동기 방식
실시간으로 필요에 따라 변경
동기식은 서버에서 응답을 받아야만 다음 동작이 이루어지는데,
비동기식은 서버에 요청을 보낸 후 서버에서 응답이 오지 않아도 동작할 수 있다.
*/

(function($){

//? ----------------------------------------
//? STEP 1 : Json 데이터 불러오기
//? ----------------------------------------

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
      // console.log(data)
      console.log(tabTitle.indexOf(data)) // 0, 16, 30, 42
      return tabTitle.indexOf(data) === index; 
      //* tabTitle 이라는 배열 중에서 index가 0, 16, 30, 42에 해당하는 데이터만 골라서(필터링해서) 반환
    });

    console.log(tabTitleCheck)



  //? 탭메뉴 내용 구성에 맞는 목록 체크 --------------------------
    var tabMenuSet;
    var tabMenuFn = function(n) {  
      tabMenuSet = dataFile.filter(function(data){
        // console.log(data)
        return data.type === tabTitleCheck[n];
        //* dataFile(data) 이라는 배열 중에서, type이 tabTitleCheck[n]에 해당되는 데이터만 골라서(필터링해서) 반환 
      });
    }

    // tabMenuFn(0)
    // console.log(tabMenuSet) 
    //* tabMenuFn의 n에 숫자가 대입되어야 내부의 filter 함수가 작동한다.

    // tabMenuFn(2)
    // console.log(tabMenuSet)



    //* title 구성 : tabTitleCheck
    //* title에 따른 메뉴 구성 : 함수 호출 > tabMenuFn(순서);
    //* title에 따른 메뉴 구성 : 구성사용 > tabMenuSet;



//? --------------------------------------------------------
//? STEP 2 : 불러온 Json data 기반으로 구성 배치
//? --------------------------------------------------------



  //TODO : 변수 (1차 기존 요소)
  var tabArea = $('.tab_area');
  var tabTitle = tabArea.find('.tab_title')
  var tabContent = tabArea.find('.tab_content');

  //* tabTitle 내부에 탭메뉴 제목부 구성 (tabTitleCheck 이용)
  tabTitle.html('<ul></ul>');
  var tabTUl = tabTitle.children('ul');
  var titleEl = '<li><button type="button"></button></li>'
  var tabTLen = tabTitleCheck.length;  

  for( i=0 ; i<tabTLen ; i+=1  ){
    tabTUl.append(titleEl);
    tabTUl.find('button').eq(i).text(tabTitleCheck[i])
  }

  // $.each(tabTitleCheck, function(index, data){
  //   tabTUl.append(titleEl);
  //   tabTUl.find('button').eq(index).text(data)
  // });

  var tabTLi = tabTitle.find('li');
  var tabBtn = tabTLi.find('button'); 
  tabTLi.css({ width: (100 / tabTLen) + '%' });
  tabTLi.eq(0).addClass('on');




//? --------------------------------------------------------
//? STEP 3 : 내용을 구성하기 위한 세팅 및 함수 처리
//? --------------------------------------------------------



  tabContent.html('<ul class="tab_list"></ul>')
  var tabConMenu = tabContent.find('.tab_list');
  var tabListSet = '<li><div class="img_con"><span></span></div><dl><dt></dt><dd class="text_con"></dd><dd class="link_con"><a href="#">자세히보기</a></dd></dl></li>';

  
  var tabMenuSetFn = function(p){
    tabMenuFn(p);
    tabConMenu.empty(); // ul 이하에 있던 기존 내용은 일단 모두 지운다.
    // tabConMenu.text( JSON.stringify(tabMenuSet) );
    

    var l = 0;
    var tabSetLen = tabMenuSet.length;
    var tSet, hrefText, liIdx; // for문 내부에 var을 쓰는 것은 좋지 않으므로, for문 외부에 변수를 선언
    
    for(  ;  l < tabSetLen ; l += 1 ) {

      tabConMenu.append(tabListSet);
      tSet = tabMenuSet[l]
      hrefText = './' + tSet.couse + './' + tSet.link;
      liIdx = tabConMenu.children('li').eq(l);

      liIdx.find('dt').text(tSet.menu);
      liIdx.find('.text_con').text(tSet.account);
      liIdx.find('a').attr({href:hrefText});

      //background-image설정 빠져있음

    } // for

  }; // tabMenuSetFn();

  tabMenuSetFn(0);



//? --------------------------------------------------------
//? STEP 4 : 탭메뉴 처리 설정
//? --------------------------------------------------------


    //TODO : 구현할 기능
    /*
    1. 선택된 버튼의 순서를 파악
    2. 선택된 버튼의 내용에 맞는 구성을 설정
    */


    //TODO : 변수
    var tabTLi = tabTitle.find('li');
    var tabBtn = tabTLi.find('button'); 
    

    //TODO : 이벤트
    tabBtn.on('click', function(e){
      e.preventDefault();
      var k = $(this).parent().index();

      tabBtn.parent().eq(k).addClass('on');
      tabBtn.parent().eq(k).siblings().removeClass('on');

      tabMenuSetFn(k); // 내비게이션 버튼을 클릭할 때 내비게이션 버튼의 index가  tabMenuSetFn 함수에 대입된다.

    });



  }); // $.ajax

})(jQuery);