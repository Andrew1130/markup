// b_07_array.js


var arr = [];
console.log ( arr );

// something.sthing() -> 메소드 기능 수행
// somethinh.sthing -> 확인/정의/체크/삽입

// push() : 배열의 뒤에 내용 삽입

arr.push('a'); 
console.log ( arr );
arr.push('b'); 
console.log ( arr );
arr.push('coffee'); 
console.log ( arr );

// unshift : 배열의 앞에 내용 삽입
arr.unshift('0')
console.log( arr );
arr.unshift('1')
console.log( arr );
arr.unshift('2')
console.log( arr );

// pop() : 배열의 뒤부터 하나씩 내용을 삭제
arr.pop();
console.log ( arr );
arr.pop();
console.log ( arr );
arr.pop();
console.log ( arr );



// ---------------------------------


// 콘솔 정리
console.clear();

var ar1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']


// splice(순서) : 해당 순서를 포함하여 뒤로 모두 삭제
// splice(순서, 갯수) : 해당 순서를 포함하여 갯수만큼 뒤로 삭제
// splice(순서, 갯수, 추가(갯수만큼)) : 해당 순서 포함 갯수만큼 뒤로 삭제 후 그 자리에 요소 추가

// ar1.splice(2); -> ['a', 'b']
// ar1.splice(2,3); -> ['a', 'b', 'f', 'g', 'h', 'i']
ar1.splice(2,3,'ㄱ', 'ㄴ'); // ['a', 'b', 'ㄱ', 'ㄴ', 'f', 'g', 'h', 'i']
console.log(ar1)



// -------------------------------------------
// 기존배열.slice(시작, 끝) : 시작순서와, 끝 순서 사이의 값을 별도로 복제하여 가져오는 것
// 기존배열.reverse() : 배열 뒤집기
// 기존배열.sort() : 배열 정렬 


var ar2 = ar1.slice(2,4) // -> ['ㄱ', 'ㄴ'] (마지막 숫자는 포함하지 않음에 유의)
console.log(ar2)
ar2.reverse() // 배열 순서 뒤집기
console.log(ar2)
ar2.sort(); // 배열 정렬
console.log(ar2)


var 과일 = ['포도', '사과', '키위', '딸기', '참외', '수박'];
console.log(과일)
// 과일.sort();

과일.sort(function(a,b){
  return (a > b) ? -1 : 1;
});

console.log(과일)



// ---------------------------------------
// 변수.split() : 변수의 내용을 기준(띄어쓰기, 쉼표 등)에 의해 배열로 설정
// 변수.join : 배열 요소의 내용을 하나의 문자열로 반환


// 콘솔 정리
console.clear();

var andrewSpot = '서울시 강남구 역삼동 000 16';
console.log(andrewSpot);
var andrewSpotArr = andrewSpot.split(' '); // 띄어쓰기를 기준으로 배열로 만들기
console.log(andrewSpotArr);


var smt = '삼성, 애플, 구글, 팬택';
console.log ( smt );
var smtArr = smt.split(', '); // 띄어쓰기 유의
console.log ( smtArr );
console.log ( smtArr[0] );


var pNum = ['010','0000','1234']
console.log(pNum)
var mobile = pNum[0]+'-'+pNum[1]+'-'+pNum[2]
console.log(mobile) 
var mobile_2 = pNum.join('-'); // join() 으로 쓰면 ,로 구분
console.log(mobile_2) // -> 010-0000-1234



// -------------------------------------

console.log(smtArr.length) // 배열의 원소 갯수 반환 : 4
console.log(mobile_2.length) // 문자열의 갯수 반환 : 13
