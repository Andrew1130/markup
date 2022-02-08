//data폴더에 coffee_list.json 파일 불러오기


//* 객체 데이터를 외부로 내보내기 위한 조건
/*
1. 주석을 사용할 수 없다.
2. 속성명, 값 모두 쌍따옴표로 감싸주어야 한다.
3. 변수명은 사용할 수 없다.

*/




/*
var coffee_list = [

  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에 대한 설명",
    "title" : "제목_01",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_detail/coffee_americano.html"
  },
  
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에 대한 설명",
    "title" : "제목_02",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_detail/coffee_latte.html"
  },
  
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에 대한 설명",
    "title" : "제목_03",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_detail/coffee_mocha.html"
  },
  
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에 대한 설명",
    "title" : "제목_04",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_detail/coffee_coldbrew.html"
  },
  
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에 대한 설명",
    "title" : "제목_05",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_detail/coffee_espresso.html"
  },
  
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에 대한 설명",
    "title" : "제목_06",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_detail/coffee_doubleshot.html"
  },
  
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에 대한 설명",
    "title" : "제목_07",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_detail/coffee_americano_big.html"
  },
  
  {
    "image" : "이미지 데이터",
    "image_alt" : "이미지에 대한 설명",
    "title" : "제목_08",
    "content" : "내용을 간단하게 작성",
    "link" : "./data_detail/coffee_americano_original.html"
  }
  
  
];
*/



// b_10_get_json.js


(function($){
  /*
  외부 데이터를 불러와서 사용하기 

  $.ajax({
    >> 외부데이터를 불러오고 그 형식과 내용을 세팅
  }).done(function(data){
    >> 코드를 모두 담는다.
  });

  + $.ajax() -> html 문서를 기준으로 경로를 설정
  */


$.ajax({

  url:"../json/coffee_list.json",
  context: document.body

}).done(function(data){
  
  var coffee_list = data;
  console.log( coffee_list );

    //? 변수 ---------------

    var liEl = '<li><div class="img_space"><span class="blind">이미지 설명</span></div><dl><dt></dt><dd class="data_con"></dd><dd class="link"><a href="#">자세히 보기</a></dd></dl></li>';

    var exWrap = $('.ex_wrap');
    var exUl = exWrap.children('ul');
    // var exLi = exUl.children('li') >> li가 생성되는 건 exUl.append(liEl)에 의해서인데, 생성되기도 전에 li를 선언하면 인식할 수 없다.

    var i = 0;
    var len = coffee_list.length;
    for( ; i < len ; i+=1 ){
      exUl.append(liEl)
    } 

    var exLi = exUl.children('li'); // exUl.append(liEl) 이후에 선언해야 인식된다.


    //? 함수 세팅 ---------------------
    var cardInsertFn = function(n){

      var menuList = coffee_list[n];
      var liN = exLi.eq(n);
      var imgSpace = liN.children('.img_space');
      var imgText = imgSpace.find('span');
      var title = liN.find('dt');
      var con = liN.find('.data_con');
      var linkData = liN.find('.link').children('a');

      imgSpace.css({ backgroundImage: menuList.image});
      imgText.text(menuList.image_alt);
      title.text(menuList.title);
      con.text(menuList.content);
      linkData.attr({ href: menuList.link });

    }

    for( i = 0 ; i < len ; i+=1 ) {
      cardInsertFn(i)
    };

  });


})(jQuery);