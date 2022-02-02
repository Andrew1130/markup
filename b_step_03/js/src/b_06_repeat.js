// b_06_repeat.js


// 반복문 ----------------------

/* 
for( 변수의 최초의 값 ; 조건 ; 변수의 값 변경 ) { 
  수행하는 내용
} 
*/

var i = 0;
console.log( i );
i = 1;
console.log( i );
i = 2;
console.log( i );
i = 3;
console.log( i );

console.warn("---------------------")

for ( var i = 0; i < 5 ; i+=1 ){
  console.log( i );
}

console.warn("---------------------")

for ( var p = 2022; p > 2009; p-=1 ) {
  console.log( p );
}


// 2중 for문 -----------------------

// 콘솔 정리
console.clear()

var k, l;

  for (k = 0; k <= 9; k += 1) {
    for(var l = 0; l <= k; l += 1 ) {
      console.log(k + 'x' + l + '=' + (k*l))
    }
  }

console.log('check : ', k, l)


// for-in -------------------------
// 객체를 위한 반복문

// 콘솔 정리
console.clear()

var drink = {
  "커피" : '아메리카노, 에스프레소, 카페라떼, 카페모카',
  "음료" : '포도주스, 사과주스, 딸기주스',
  "에이드" : '레몬에이드, 사과에이드, 딸기에이드, 석류에이드'
}

console.log( drink.커피 );

console.warn("---------------------")

var o

for(t in drink) { console.log( t ); } // 객체의 index 부분을 보여준다.
for(t in drink) {
  console.log(t, drink[t]);
}

console.warn("---------------------")


var fruits = ['apple', 'banana', 'grape', 'strawberry', 'kiwwi'];
var o = 0;
for (; o < 5; o+=1){
  console.log( fruits[o] );
}

// for (o in fruits) {
//   console.log( fruits[o] );
// }



// forEach -------------------------
// 배열을 위한 반복문

// 콘솔 정리
console.clear()

var fruits = ['apple', 'banana', 'grape', 'strawberry', 'kiwwi'];

fruits.forEach(function(data, idx){
  // console.log(data, idx);
  console.log( (idx+1) + '. ' + data )
})

console.warn("---------------------")

console.log( "fruits갯수: ", fruits.length )
for(o=0; o < fruits.length; o+=1) {
  console.log( fruits[o] );
}



// 활용 ------------------------------

// 콘솔 정리
console.clear()


/* 
.ex_wrap -> getElementsByclassname('ex_wrap')[]; 
.ex_wrap > ul -> getElementsByTagName('ul');
li요소를 삽입 -> 이 경우 innerHTML은 쓸 수 없고 append를 사용해야 한다.
*/

var exWrap = document.getElementsByClassName('ex_wrap')[0]
console.log(exWrap);
var exUl = exWrap.getElementsByTagName('ul')[0]
console.log(exUl);


/*
var makeLi = document.createElement('li'); // makeLi 변수를 HTML li태그로 만듬
makeLi.innerText = fruits[0]; // makeLi에 내용 입력
exUl.append(makeLi); // ul에 만들어진 내용 추가

makeLi = document.createElement('li');
makeLi.innerText = fruits[1];
exUl.append(makeLi);

makeLi = document.createElement('li');
makeLi.innerText = fruits[2];
exUl.append(makeLi);

makeLi = document.createElement('li');
makeLi.innerText = fruits[3];
exUl.append(makeLi);

makeLi = document.createElement('li');
makeLi.innerText = fruits[4];
exUl.append(makeLi);
*/


var makeLiFor;
var fruitsLength = fruits.length
console.log(fruitsLength)
var liLen = 0;
for ( liLen = 0; liLen < fruitsLength; liLen+=1 ){
  makeLi = document.createElement('li');
  makeLi.innerText = fruits[liLen];
  exUl.append(makeLi);
} 



