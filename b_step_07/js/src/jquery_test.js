// jquery_test.js


(function($){


//! 96강 ----------------------------------

// 1. 변수 선언 : var , const / let

/*
var a = 10;
console.log(a);

var str = 'text';
console.log(str)

var b = a + str
console.log(b);

var c = a / str;
console.log(c);

a = 100;
console.log(a);

var arr = [];
arr.push(1);
console.log( arr );

console.clear();
*/

/*
console.log(a1); //* undefined
var a1 = 10;
*/


//! 97강 ----------------------------------
//? 선택자 ------------------------ 
var win = $(window);
// console.log( win );

var wrap = $('#wrap');
// console.log(wrap[0])

var headBox = $('#headBox');
// console.log(headBox)

var navi = $('.navigation');
// console.log(navi)

var naviChild = navi.children();
// console.log(naviChild);

var link = naviChild.find('a');
console.log(link)


//? 속성값 가져오기 & 추가하기 ------------------------
var link = naviChild.eq(0).find('a').attr('href');
console.log(link) // http://naver.com

naviChild.eq(2).find('a').attr('href', 'http://daum.net')

// console.clear()


//? 클래스 추가 및 제거  ------------------------
naviChild.eq(4).attr('class', 'on');
naviChild.eq(1).addClass('on_2')
navi.removeClass('act')


console.clear()


//! 98강 ----------------------------------
//? JQuery 이벤트 처리 및 순서할당 --------------
/* 
1. li 여러개중 하나를 클릭
2. 선택한 요소가 무엇인지, 순서가 몇번째인지
3. li의 순번째에 기능 할당 ('border','1px solid #333')
*/

/*

naviChild.on('click', function(e){
  e.preventDefault();
  var el = $(this);
  var elI = el.index();
  // console.log( $(this), $(this).index() );
  naviChild.eq(elI).css('border','1px solid #333');
});

*/

})(jQuery);


