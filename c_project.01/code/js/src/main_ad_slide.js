// main_ad_slide.js



(function($){

/*
- 외부 데이터 불러와서 확인
>> $.ajax({ url:'jsondataUrl', dataType:'json', context:document.body }).done(function(data){})
>> $.getJSON('jsondataURL', function(data){})

*/

//? 슬라이드 전체 내용 및 버튼 -----------

var jsonData = $.getJSON('../json/osam_site_main_slide_01_data.json');
jsonData.done(function(data){

  //* 변수 -----------------------------
  var slideData = data;
  var slideType = 'position_slide';
  var dataLen = slideData.length
  var viewBox = $('.slide_set');
  var SetNum = 0;


  //* 함수 -------------------------------
  var slideBtnMakeFn = function(){
    var insertBtn = '<button type="button" class="next_btn"><span class="blind">다음</span></button><button type="button" class="prev_btn"><span class="blind">이전</span></button>';
    slideWrapperCode.prepend(insertBtn)
  } // slideBtnMakeFn : 슬라이드 버튼 html 생성

  var slideDivSetfn = function(n){
    slideWrapperCode.append(slideDivSet);

    // 변수
    var slideN = slideData[n];
    var imgUrl = '../../img/main_slide/';
    var slideDiv = slideWrapperCode.children('div').eq(n);

    var divTitle = slideDiv.find('h3');
    var divContentWrapper = slideDiv.find('.view_content');
    var divContent = divContentWrapper.find('p');
    var divLink = slideDiv.find('a');
    var divImg = slideDiv.find('.image');
    var imgCaption = divImg.find('figcaption') ;
    var imgContent = divImg.find('p') ;

    
    // 기능
    slideDiv.css({ backgroundImage: 'url('+ imgUrl + slideN.background +')'});
    slideDiv.addClass(slideN.image_description);
    divTitle.text(slideN.title);
    divContent.text(slideN.content);
    divLink.attr({href:slideN.link});
    divImg.css({ backgroundImage: 'url('+ imgUrl + slideN.image +')'});
    imgCaption.text(slideN.image_description);
    imgContent.text(slideN.summary);

  }; // slideDivSetfn : 슬라이드 내용에 css 적용 및 text 삽입

  var actionFn = function(i){
    viewCover = $('.view_cover');
    viewCover.eq(0).addClass('action')
    // viewCover.eq(i).addClass('action')
    // viewCover.eq(i).siblings().removeClass('action')

    viewCover.eq(i).stop().fadeIn()
    viewCover.eq(i).siblings('div').stop().fadeOut()

  };  // actionFn : 다음, 이전 버튼 클릭 시 내용 전환 처리


  //* 사전 기능 실행 ------------------------------------------
  var slideWrapperSet = '<div class="slide"><div class="slide_wrapper"></div></div>';
  viewBox.html(slideWrapperSet);

  var slideWrapperCode = viewBox.find('.slide_wrapper');
  slideWrapperCode.addClass(slideType);
  var slideDivSet = '<div class="view_cover"><div class="view_con_wrapper"><div class="view_content"><h3></h3><p></p><div class="link"><a href="#">바로가기<i class="fas fa-arrow-right"></i></a></div></div><figure class="image"><figcaption class="blind"></figcaption><p class="blind"></p></figure></div></div>';

  var i = 0
  for( ; i<dataLen ; i+=1){
    slideDivSetfn(i)
  };

  actionFn(0);
  // viewCover.eq(SetNum).addClass('action')
  slideBtnMakeFn();



  //? 인디케이터 ----------------------------------------

  //* 사전 기능 실행 및 실행 위한 변수 설정 --------------
  var indiWrapper = '<div class="slide_check_part"><ul class="slide_indicator blind_area"></ul><p><em class="now_view"></em> / <span class="total_view"></span></p></div>';
  var indiCode = '<li><a href="#" data-href="#"><span></span></a></li>';
  slideWrapperCode.before(indiWrapper)


  //* 변수 -----------------------------------
  var SlideCheckPart = viewBox.find('.slide_check_part')
  var indiWrapperSelector = viewBox.find('.slide_indicator');
  var viewLenCkNow = SlideCheckPart.find('.now_view');
  var viewLenCkTotal = SlideCheckPart.find('.total_view');
  var indiSelector
  

  //* 함수 -------------------------------
  var indicatorSetFn = function(n){
    indiWrapperSelector.append(indiCode);

    indiSelector = indiWrapperSelector.find('li');
    var indiLiSpan = indiSelector.eq(n).find('span')
    var indiLiLink = indiSelector.eq(n).find('a')

    indiLiSpan.text(slideData[n].summary);
    indiLiLink.attr({'data-href':'.'+slideData[n].image_description})
  }; // indicatorSetFn : 인디케이터에 데이터 삽입

  var indicatorCheckFn = function(n){
    viewLenCkNow.text(n+1);
    viewLenCkTotal.text(dataLen);
  }; // indicatorCheckFn : 인디케이터 인덱스 부분 처리


  //* 반복문으로 indicator 생성 --------------------
  var j = 0
  for(  ; j < dataLen ; j += 1 ) {
    indicatorSetFn(j);
  };


  //* 인디케이터 및 인디케이터 인덱스에 초기값 설정 ------ 
  indicatorCheckFn(SetNum);
  indiSelector.eq(SetNum).addClass('action');



  //? 실제 광고영역 동작처리 ----------------------------
  //* 구현할 기능 ----------------------
  /* 
  - 다음, 이전 버튼을 누르면 광고가 움직이도록 하기
  - 인디케이터를 누르면 광고가 움직이도록 하기
  - 마우스를 광고 위에 올리면 일시정지, 마우스가 광고 위에서 벗어나면 일정시간마다 광고 내용 변경
  */


  //* 변수 ------------------------------
  var nextBtn = viewBox.find('.next_btn')
  var prevBtn = viewBox.find('.prev_btn')

 
  //* 함수 -------------------------------
  var indiSetFn = function(n){
    indiSelector.eq(n).addClass('action');
    indiSelector.eq(n).siblings().removeClass('action');
  }; // indiSetFn : 선택된 인디케이터에 action 부여하고 나머지 인디케이터에서는 action을 삭제

  var actionNumSetFn = function(n){
    if(n >= dataLen){
      n = 0;
      SetNum = n;
    } else if (n < 0){
      n = dataLen-1
      SetNum = n;
    } 
    actionFn(n);
    indicatorCheckFn(n);
    indiSetFn(n)
  }; // actionNumSetFn : actionFn(버튼 클릭 시 내용 전환 및 슬라이드 전환 효과 처리), indicatorCheckFn(인디케이터 인덱스 처리), indiSetFn(인디케이터 처리)가 하나의 값을 공유하여 동시에 동작하도록 처리


  //* 이벤트 --------------------------------
  nextBtn.on('click', function(e){
    $(this).addClass('nexton')
    e.preventDefault();
    SetNum+=1
    actionNumSetFn(SetNum);
  });

  prevBtn.on('click', function(e){
    $(this).addClass('prevon')
    e.preventDefault();
    SetNum-=1
    actionNumSetFn(SetNum);
  });

  indiSelector.find('a').on('click', function(e){
    e.preventDefault();
    var n = $(this).parent().index();
    SetNum = n;
    console.log(n)
    actionNumSetFn(SetNum)
  });


});


//? 변수 ------------

//? 이벤트 -----------

})(jQuery);