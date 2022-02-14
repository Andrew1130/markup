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
  console.log(slideData)
  var dataLen = slideData.length
  var viewBox = $('#viewBox');

  //* 함수
  var slideBtn = function(){
    var insertBtn = '<button type="button" class="next_btn"><span class="blind">다음</span></button><button type="button" class="prev_btn"><span class="blind">이전</span></button>';
    console.log(insertBtn) 
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
  } 

  var actionFn = function(i){
    var viewCover = $('.view_cover');
    viewCover.eq(i).addClass('action')
  } 

  //* 기능구현 1
  var slideWrapperSet = '<div class="slide"><div class="slide_wrapper"></div></div>';
  viewBox.html(slideWrapperSet);

  var slideWrapperCode = viewBox.find('.slide_wrapper');
  slideWrapperCode.addClass(slideType);
  var slideDivSet = '<div class="view_cover"><div class="view_con_wrapper"><div class="view_content"><h3></h3><p></p><div class="link"><a href="#">바로가기<i class="fas fa-arrow-right"></i></a></div></div><figure class="image"><figcaption class="blind"></figcaption><p class="blind"></p></figure></div></div>';

  var i = 0
  for( ; i<dataLen ; i+=1){
    slideDivSetfn(i)
  }

  actionFn(0);
  slideBtn();

})

//? 변수 ------------

//? 이벤트 -----------

})(jQuery);