// FAQ.js


//? 배열 --------------------------------
//* json 파일로 대체 --------------

// var data = [

//   {"title":"Lorem ipsum dolor sit amet consectetur?", 
//   "content":"Lorem ipsum dolor sit amet consectetur adipisicing."}, 

//   {"title":"placeat nam, iusto aliquid, a corrupti?", 
//   "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deleniti error vero tenetur molestiae aliquid corporis eveniet. Excepturi sequi magni quisquam labore sint."}, 

//   {"title":"culpa tempore excepturi maxime iste?", 
//   "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit expedita quia perspiciatis officia molestias. Eaque nesciunt asperiores dicta totam ea nihil consectetur impedit reiciendis tempore, quisquam ipsa placeat nam, iusto aliquid, a corrupti. Nemo praesentium officiis maiores ut deserunt, soluta distinctio ducimus, earum debitis dolorem suscipit laboriosam ex quod esse."}, 

//   {"title":"quas molestiae dicta dolore minima laborum?", 
//   "content":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste similique quisquam, exercitationem ullam ea perspiciatis culpa aperiam nihil, quas molestiae dicta dolore minima laborum nisi consectetur quam autem qui excepturi! Nam dolorem recusandae ullam doloribus, ipsa obcaecati porro ipsam. Necessitatibus repudiandae doloremque aut dolorem sunt delectus dolor molestias repellat velit culpa tempore excepturi maxime iste, asperiores error laudantium? Explicabo, quae."}, 

//   {"title":"dolorem sunt delectus dolor molestias repellat?", 
//   "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta delectus consequuntur ullam aspernatur, illo facilis odio ea. Expedita saepe vitae, suscipit maiores rem obcaecati a! Eligendi atque velit omnis delectus!"}

// ];



//? 구현할 기능 -----------
/*
1. .contentBox_wrap 내부의 .accor에 js로 항목 생성
2. dt를 클릭 시 그 이하에 있는 dd를 나타나게 하기 
(1) dt를 클릭 시 선행 이벤트 발생 정지
(2) dt를 클릭 시 이하의 dd를 나타나도록 하기
(3) 선택된 dt에 속하지 않은 다른 dd들은 사라지도록 하기
*/


$.ajax({

  url:"../json/FAQ_list.json",
  context: document.body

}).done(function(data){

  var FAQ_list = data;

//? 자바스크립트 ------------------------------
// var makeDl = document.createElement('dl') 
//TODO : 변수 위치에 따라 결과가 달라지는 이유??



//* 함수식 -------------
var makeAccorFn = function(title, content) {
  var accor = document.querySelector('.accor')
  var makeDl = document.createElement('dl')
  //TODO : 변수 위치에 따라 결과가 달라지는 이유??

  makeDl.innerHTML = '<i class="circle"></i><div class="bal_top"></div><div class="bal_down"></div><dt><button type="button"><p>'+ title +'</p><i class="responsiveBtn"></i></button></dt><dd>'+ content +'</dd></div>'

  accor.append(makeDl)
}


//* 반복문 -------------
var i = 0
for( ; i<FAQ_list.length ; i+=1 ) {
  makeAccorFn(FAQ_list[i].title, FAQ_list[i].content)
}




//? jQuery -----------
// jQuery로만 작성시, jQurey 내부에서는 innerHTML로 인해 생성된 태그들이 makeAccorFn 함수 범위 내에서만 인식되는 문제가 있어, 태그 생성은 js로 하고 생성된 태그의 컨트롤은 jQurey로 진행

//* 변수
var contentBox = $('#contentBox')
var contentBoxwrap = contentBox.find('.contentBox_wrap')
var accor = contentBoxwrap.find('.accor')
var accor = contentBoxwrap.find('.accor')
var accorDl = accor.children('dl');
var accorDt = accorDl.children('dt');
var accorDd = accorDl.children('dd');

//* 이벤트
(function($){
accorDt.on('click', function(e){
  e.preventDefault();

  var i = $(this).parent().index();
  var Dl_i = accorDl.eq(i)
  if(Dl_i.hasClass('on')){
    /* 클릭한 accorDt의 부모인 dl에 이미 on이 있었을 경우, 일단 on을 모든 Dl에서 없앤다.*/
    accorDl.removeClass('on'); 

    /* 클릭한 accorDt의 dd를 접고, 나머지 사항들도 모두 원상 복구한다. */
    Dl_i.find('dd').stop().slideUp(); 
    Dl_i.animate({ backgroundColor : "rgba(239, 239, 239, 0.7)" })
    Dl_i.find('p').stop().animate({ color:"#333333", fontSize:"22px" })
    Dl_i.find('.circle').stop().animate({ marginTop : "16px" })
    Dl_i.find('button').stop().animate({ marginBottom : "0" })
    Dl_i.find('.responsiveBtn').stop().css({ 
      backgroundImage: "url('../../img/FAQ/accor_arrow_up.png')",
      backgroundImage: "url('../../img/FAQ/accor_arrow_up.svg')"
    })

  } else {
    /* 클릭한 accorDt의 부모인 dl on이 없었다면, 
    on을 클릭한 accorDt의 부모인 dl에 부여 후 다른 데에서는 없앤다.*/
    Dl_i.addClass('on');
    Dl_i.siblings().removeClass('on');


    // 클릭한 accorDt의 슬라이드를 펴고, 그 외 각종 애니메이션을 적용한다.
    Dl_i.animate({ backgroundColor : "#fff" })
    Dl_i.find('dd').stop().slideDown(); 
    Dl_i.find('p').stop().animate({ color:"#834C33", fontSize:"28px" })
    Dl_i.find('.circle').stop().animate({ marginTop : "22px" })
    Dl_i.find('button').stop().animate({ marginBottom : "35px" })
    Dl_i.find('.responsiveBtn').stop().css({ 
      backgroundImage: "url('../../img/FAQ/accor_arrow_down.png')",
      backgroundImage: "url('../../img/FAQ/accor_arrow_down.svg')"
     })

    // 클릭한 accorDt 외 다른 accorDt의 슬라이드는 접고, 각종 애니메이션도 초기화한다.
    Dl_i.siblings().animate({ backgroundColor : "rgba(239, 239, 239, 0.7)" })
    Dl_i.siblings().find('dd').stop().slideUp(); 
    Dl_i.siblings().find('p').stop().animate({ color:"#333333", fontSize:"22px" })
    Dl_i.siblings().find('.circle').stop().animate({ marginTop : "16px" })
    Dl_i.siblings().find('button').stop().animate({ marginBottom : "0" })
    Dl_i.siblings().find('.responsiveBtn').stop().css({ 
      backgroundImage: "url('../../img/FAQ/accor_arrow_up.png')",
      backgroundImage: "url('../../img/FAQ/accor_arrow_up.svg')"
    })
  }
})

})(jQuery);


}) // $.ajax > .done(function(data)
