// gift.js


//? 배열 -------------------------------------------
//* json 파일로 대체 --------------



//? 구현할 기능
/*
- 다음 버튼을 누르면 다음 내용이 나오고, 이전 내용을 누르면 이전 내용 나오게
- 중간에 있는 광고영역은 커지도록
- 상세보기 버튼을 누르면 모달윈도우 동작하게 하기
*/

$.ajax({

  url:"../json/gift/gift.json",
  context: document.body

}).done(function(data){

  var slidedata = data;


  
//? 자바스크립트 -------------------------------------
//* 함수식 --------------------
var makeSlideCardFn = function(gift_name, gift_content, gift_img) {
  var slideContainer = document.querySelector('.slide_container')
  var makeDiv = document.createElement('div')

  makeDiv.innerHTML = '<div class="img"><h3>'+ gift_name +'</h3><p>'+ gift_content +'</p><button type="button">상세보기</button></div>'

  var SelImgCon = makeDiv.querySelector('.img');
  SelImgCon.style.backgroundImage = 'url('+ gift_img +')'; 

  slideContainer.append(makeDiv)
}

//* 반복문 --------------------
var i = 0
for( ; i<slidedata.length ; i+=1 ) {
  makeSlideCardFn(slidedata[i].gift_name, slidedata[i].gift_content, slidedata[i].gift_img)
}



//? 제이쿼리 -------------------------------------


(function($){
//* 변수 -------------------
var slideBar = $('.slideBar')
var slideButtonWrap = slideBar.find('.button')
var slideButton = slideButtonWrap.find('div')

var slideVisibleArea = $('.slide_wrapper')
var slideTotalArea = slideVisibleArea.find('.slide_container')

var slideCard = slideTotalArea.children('div')
var slideCardButton = slideTotalArea.find('button')

var modalBackground = $("#modalWindow")
var modalWindowArea = $(".modal_window")


var permission = true;
var i = 1




//* 함수 -------------------
var nextBtnFn = function(){
  permission = false; // 출입 패스권 (승인취소)

  slideTotalArea.stop().animate({ marginLeft : -300 + "px" }, function(){
  slideCard.eq(0).appendTo(slideTotalArea); // 02-03-04-05-01
  
  slideTotalArea.css({ marginLeft: 0 }) // -300 가고 앞에 거 떼면 결과적으로 -600 가게 되므로, -300만 가도록 조치
  slideCard = slideTotalArea.children('div');// 함수 외부에서는 slideCard의 순서가 appendTo로 변경되기 이전의 순서로 되어 있으므로, appendTo가 실행된 이후의 값으로 덮어 써 주어야 한다. (02-03-04-05-01)

  permission = true;

  });
} //* 무한 슬라이드 : 요소 강제이동형 함수

var prevBtnFn = function(){
  permission = false; 

  slideCard.eq(-1).prependTo(slideTotalArea); // div의 맨 마지막 순서를 맨 앞으로 붙인다.
  slideTotalArea.css({ marginLeft: -300 + 'px' }); // 맨 마지막 요소가 맨 앞으로 와서, 맨 마지막 요소가 나타나는데, 애니메이션 적용을 위해 일단 한 칸 밀어 둔다.

  slideTotalArea.stop().animate({ marginLeft: 0 }, function(){
  slideCard = slideTotalArea.children('div');

  permission = true;

  }); // 맨 마지막 순서가 맨 앞으로 가고(-300) css로 ml처리(-300) 되어 -600 되어있는 걸 여기서 ml처리(0) 하여 결과적으로 -300만큼만 가는 애니메이션이 동작한다.
} 


var cardAnimationFn = function(){
  slideCard.eq(i).animate({ 
    width: "280px", height: "410px", 
    marginLeft: "10px", marginRight: "10px", marginTop: "0"
  })
  slideCard.eq(i).find('h3').animate({ 
    width: "85%", margin: "auto",
    marginTop: "235px",
    marginBottom: "10px",
    paddingBottom: "10px",
    fontSize: "26px"  
  })
  slideCard.eq(i).find('p').animate({ 
    width: "85%", 
    fontSize: "16px", marginBottom: "20px"
  })
  slideCard.eq(i).find('button').animate({ 
    width: "85%", height: "45px", 
  })
} //* 카드 애니메이션 함수


var cardAniRemoveFn = function(){
  slideCard.eq(i).animate({ 
    width: "240px", height: "350px", 
    marginLeft: "30px", marginRight: "30px", marginTop: "30px"
  })
  slideCard.eq(i).find('h3').animate({ 
    width: "90%", margin: "auto",
    marginTop: "220px",
    marginBottom: "5px",
    paddingBottom: "5px",
    fontSize: "22px"  
  })
  slideCard.eq(i).find('p').animate({ 
    width: "90%", 
    fontSize: "14px", marginBottom: "10px"
  })
  slideCard.eq(i).find('button').animate({ 
    width: "90%", height: "35px", 
  })
} //* 카드 애니메이션 초기화 함수


var makeModalWindowFn = function ( modal_title, modal_content_1, mc_img_1 ) {
  var modalBox = document.querySelector('.modal_box')

  modalBox.innerHTML = '<ul class="titlepart clearfix"><li><div class = "modal_circle"></div></li><li><h3>'+ modal_title +'</h3></li><li><div class = "modal_closebtn"></div></li></ul><div class="contentpart"><p>'+ modal_content_1 +'</p><div class="mc_img_1"></div></div>'


  var Sel_mc_img_1 = modalBox.querySelector('.mc_img_1');
  Sel_mc_img_1.style.backgroundImage = 'url('+ mc_img_1 +')';
}; //* 모달윈도우 생성 함수



//* 사전 실행 -----------------------
/* gift_02가 우선 강조되어 있도록 처리 */
slideCard.eq(1).css({ 
  width: "280px", height: "410px", 
  marginLeft: "10px", marginRight: "10px", marginTop: "0"
})
slideCard.eq(1).find('h3').css({ 
  width: "85%", margin: "auto",
  marginTop: "235px",
  marginBottom: "10px",
  paddingBottom: "10px",
  fontSize: "26px"  
})
slideCard.eq(1).find('p').css({ 
  width: "85%", 
  fontSize: "16px", marginBottom: "20px"
})
slideCard.eq(1).find('button').css({ 
  width: "85%", height: "45px", 
  fontSize: "16px"
})



//* 이벤트 -----------------
slideButton.eq(0).on('click', function(e){
  nextBtnFn()

  // var i = 1
  i += 1;
  // console.log(i) // i = 2 >> eq(2)
  cardAnimationFn(i)
  i = 1
  cardAniRemoveFn(i) // i = 1 >> eq(1)

}) //* 카드 애니메이션 적용 및 해제

slideButton.eq(1).on('click', function(e){
  prevBtnFn()

  // var i = 1
  i -= 1;
  // console.log(i) // i = 0 >> eq(0)
  cardAnimationFn(i)
  i = 1
  cardAniRemoveFn(i) // i = 1 >> eq(1)

})


slideCardButton.on('click', function(e){

  e.preventDefault()
  var k = $(this).siblings('h3').text();
  var i = k.slice(6,7) //* h3의 마지막 숫자 부분 반환
  console.log(i)

  // 선택한 창에 맞는 모달 윈도우 데이터를 입력해서 창을 만들기
  makeModalWindowFn( 
    slidedata[i-1].gift_detail_name, 
    slidedata[i-1].gift_detail_content, 
    slidedata[i-1].gift_detail_img
    )

  // 만들어진 모달 윈도우를 나타나게 하기  
  modalBackground.fadeIn()
  modalWindowArea.fadeIn()

  var modalCloseBtn = $(".modal_closebtn")

  // 창 닫기
  modalCloseBtn.on('click', function(){
    modalBackground.fadeOut()
    modalWindowArea.fadeOut()
  })

}) //* 상세보기 클릭 시 모달윈도우 실행

})(jQuery);


}) // $.ajax > .done(function(data)