// main_ad_slide.js



(function($){
//? 구현할 기능 -----------
/*
- 외부 데이터 불러와서 확인
>> $.ajax({ url:'jsondataUrl', dataType:'json', context:document.body }).done(function(data){})
>> $.getJSON('jsondataURL', function(data){})

*/

var jsonData = $.getJSON('../json/osam_site_main_slide_01_data.json');
jsonData.done(function(data){
  //* 변수
  var slideData = data;
  var slideType = 'position_slide';
  var dataLen = slideData.length
  var viewBox = $('#viewBox');
  var SetNum = 0;


  //* 함수
  var slideBtn = function(){
    var insertBtn = '<button type="button" class="next_btn"><span class="blind">다음</span></button><button type="button" class="prev_btn"><span class="blind">이전</span></button>';
    slideWrapperCode.prepend(insertBtn)
  }

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

  }; // slideDivSetfn

  var actionFn = function(i){
    viewCover = $('.view_cover');
    viewCover.eq(i).addClass('action')
  };  // actionFn


  //* 기능구현 1
  var slideWrapperSet = '<div class="slide"><div class="slide_wrapper"></div></div>';
  viewBox.html(slideWrapperSet);

  var slideWrapperCode = viewBox.find('.slide_wrapper');
  slideWrapperCode.addClass(slideType);
  var slideDivSet = '<div class="view_cover"><div class="view_con_wrapper"><div class="view_content"><h3></h3><p></p><div class="link"><a href="#">바로가기<i class="fas fa-arrow-right"></i></a></div></div><figure class="image"><figcaption class="blind"></figcaption><p class="blind"></p></figure></div></div>';

  var i = 0
  for( ; i<dataLen ; i+=1){
    slideDivSetfn(i)
  };

  actionFn(SetNum);
  slideBtn();



  //* 인디케이터

  // 설명
  /*
  - 광고개수를 파악하여 인디케이터를 생성
  - 해당하는 순서에 맞는 인디케이터에 action을 설정하여 인지할 수 있도록
  */


  // 담을 코드 작성
  var indiWrapper = '<div class="slide_check_part"><ul class="slide_indicator blind_area"></ul><p><em class="now_view"></em> / <span class="total_view"></span></p></div>';
  var indiCode = '<li><a href="#" data-href="#"><span></span></a></li>';


  // 기능설정1 + 변수
  slideWrapperCode.before(indiWrapper)
  var SlideCheckPart = viewBox.find('.slide_check_part')
  var indiWrapperSelector = viewBox.find('.slide_indicator');
  var viewLenCkNow = SlideCheckPart.find('.now_view');
  var viewLenCkTotal = SlideCheckPart.find('.total_view');
  var indiSelector
  

  // 함수
  var indicatorSetFn = function(n){
    indiWrapperSelector.append(indiCode);

    indiSelector = indiWrapperSelector.find('li');
    var indiLiSpan = indiSelector.eq(n).find('span')
    var indiLiLink = indiSelector.eq(n).find('a')

    indiLiSpan.text(slideData[n].summary);
    indiLiLink.attr({'data-href':'.'+slideData[n].image_description})
  }; // indicatorSetFn

  var indicatorCheckFn = function(n){

    viewLenCkNow.text(n+1);
    viewLenCkTotal.text(dataLen);
  }; // indicatorCheckFn 


  // indicator 생성
  var j = 0
  for(  ; j < dataLen ; j += 1 ) {
    indicatorSetFn(j);
  };


  indicatorCheckFn(SetNum);
  indiSelector.eq(SetNum).addClass('action');


  //* 슬라이드 광고, indicator, 체크번호 모두 동시에 처리되어야 하는 기능
  var actionNumSetFn = function(n){
    actionFn(n);
    indicatorCheckFn(n);
    indiSelector.eq(n).addClass('action');
  } // actionNumSetFn
  

});


//? 변수 ------------

//? 이벤트 -----------

})(jQuery);