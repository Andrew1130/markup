// b_07_accordion.js


(function($){


  //?  1. 사용할 기능, 내용 정리
  /* 
  (1) dt를 클릭 시 이후에 나오는 dd를 나타나게 만들기 (펴기)
   1) dt를 클릭시 선행 이벤트발생 정지
   2) dt>button 키보드 포커스 처리시 dd를 나타나게 만들기
   3) dt를 클릭시 이후에 오는 모든 형제인 dd를 나타나게 하기
   4) dt를 클릭 시 다른 dl에 있는 dd를 사라지게 만들기

  (2) dt를 클릭 시 뒤에 오는 dd 요소가 나타나 있는 경우 사라지게 만들기 (접기)
   1) class를 삽입하며 존재하면 사라지게 하고, 없다면 나타나게
  */



  //? 2. 변수 지정
  var accor = $('.accor');
  var accorDl = accor.children('dl');
  var accorDt = accorDl.children('dt');
  var accorDd = accorDl.children('dd');

  


  //? 3. 이벤트 기능
  //* (1) 
  accorDt.on('click', function(e){
    var _this = $(this);

    e.preventDefault(); //* 1)
    
    
  //* (2)
    var i = _this.parent().index();
    var diI = accorDl.eq(i)

    // class기능의 유무 판단 : hasClass('className') -> true or false
    if(diI.hasClass('on')){
      accorDl.removeClass('on');
      diI.find('dd').stop().slideUp();
    } else {
      diI.addClass('on');
      diI.siblings().removeClass('on');

      $(this).nextAll(accorDd).stop().slideDown() //* (1) 3)
      // $(this).siblings(accorDd).show() 도 가능

      // 선택한 dt의 부모의 다른 형제의 자식인 dd를 사라지게 한다. (1)
      $(this).parent().siblings(accorDl).find(accorDd).stop().slideUp() //* (1) 4)

      // 선택한 dt의 부모의 다른 형제의 자식인 dd를 사라지게 한다. (2)
      /* var i = $(this).parent().index();
      console.log(i)
      accorDl.eq(i).siblings().find('dd').hide() */
    }
  
  });


})(jQuery);