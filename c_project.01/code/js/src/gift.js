// gift.js


//? 배열
var slidedata  = [
  {
    "gift_name":"gift_01",
    "gift_content":"Eos, accusantium distinctio dolore magni.",
    "gift_img":"../../img/gift/gift_main.png"
}, 
  
  {
    "gift_name":"gift_02",
    "gift_content":"similique veniam at voluptatum! Dolorem nihil.",
    "gift_img":"../../img/gift/gift_main-1.png"    
}, 
  
  {
    "gift_name":"gift_03",
    "gift_content":"Aliquam eligendi voluptatem maxime hic quae.",
    "gift_img":"../../img/gift/gift_main-2.png"
}, 
  
  {
    "gift_name":"gift_04",
    "gift_content":"distinctio dolore magni saepe rem nam blanditiis.",
    "gift_img":"../../img/gift/gift_main-3.jpg"
}, 
  
  {
    "gift_name":"gift_05",
    "gift_content":"excepturi placeat similique veniam at voluptatum.",
    "gift_img":"../../img/gift/gift_main-4.jpg"
}
]




//? 구현할 기능
/*
- 다음 버튼을 누르면 다음 내용이 나오고, 이전 내용을 누르면 이전 내용 나오게
- 중간에 있는 광고영역은 커지도록
*/


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
var origindivLen = slideCard.length;
var slideCardImg = slideTotalArea.find('.img')
var slideCardTitle = slideTotalArea.find('h3')
var slideCardContent = slideTotalArea.find('p')
var slideCardButton = slideTotalArea.find('button')

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
}

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
}

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
}


//* 사전 실행 -----------------------
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
  console.log(i) // i = 2 >> eq(2)
  cardAnimationFn(i)
  i = 1
  cardAniRemoveFn(i) // i = 1 >> eq(1)


  // eq 0 g1
  // eq 1 g2
  // eq 2 g3
  // eq 3 g4
  // eq 4 g5

  // 콘솔 1일때 : 1에 애니메이션, 5/2의 애니메이션 해제

  // 콘솔 2일때 : 2에 애니메이션, 1/3의 애니메이션 해제
  // 콘솔 3일때 : 3에 애니메이션, 2/4의 애니메이션 해제
  // 콘솔 4일때 : 4에 애니메이션, 4/1의 애니메이션 해제

})

slideButton.eq(1).on('click', function(e){
  prevBtnFn()

  // var i = 1
  i -= 1;
  console.log(i) // i = 0 >> eq(0)
  cardAnimationFn(i)
  i = 1
  cardAniRemoveFn(i) // i = 1 >> eq(1)

 

})


})(jQuery);