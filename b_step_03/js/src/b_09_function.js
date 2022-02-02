// b_09_function.js



//* 함수 -------------------

/*
function(){
  내용
  return 최종적으로 원하는 것
}
*/


//? 함수 선언식 ----------------
  console.log( fn(100) ); // 함수를 정의해 놓으면 함수 이전에 함수를 작동시켜도 작동한다.

  function fn(a){
    var result = 10 * a;
    return result
  }

  fn(21); // 함수는 동작시켜야 결과를 출력한다.
  console.log( fn(21) );
  console.log( fn(5) );


//? 함수 표현식 (권장) --------------
// 함수 자체에 이름을 짓지 않고, 변수에 설정해 함수를 사용

  // console.log( fn2(128) ) 
  // 함수 표현식에서는 호이스팅 현상이 없다.

  var fn2 = function(a){
    return 10 * a
  };

  console.log( fn2(178) ) 


//? 전역변수 --------------------
// 기준이 되는 함수 밖에서도 유효한 변수
  console.clear();


  var a = 10;
  var func = function(){
    a = 20;
    return console.log( a );
  }

  console.log( a ); // 10
  func(); // 20
  console.log( a ); // 20 


//? 지역변수 --------------------
// 기준이 되는 함수 안에서만 유효한 변수
console.clear();


var func2 = function( ) {
  var b = 10;
  return console.log( b );
}

func2(); // 10
// console.log(b); // not defined



//? 활용 ---------------------
console.clear();

/*
var somename = document.querySelector(); 
() 내부에 css에서 사용하는 방식으로 선택자를 입력하면,
somename을 css의 선택자와 동일하게 사용 가능
*/

var btn = document.querySelector('.btn');
var btnCon = document.querySelector('.btn_content');
var arr = [ 'coffee', 'juice', 'fruits', 'ade' ];

var button = btn.querySelectorAll('button');
console.log( button );

button.forEach(function(data, idx){
  data.addEventListener('click', function(){ //클릭시 함수작동
    console.log( data, idx );
    btnCon.innerText = arr[idx];
  });
});


console.warn("---------------------")


var fruits = ['apple', 'banana', 'grape', 'strawberry', 'kiwwi'];

fruits.forEach(function(data, idx){
  console.log(data, idx);
  // console.log( (idx+1) + '. ' + data )
})