// b_05_condition.js


// ----- 조건문 : 삼항연산자, 단항, 다항 ------------

var rel = !false;
var text;
(rel) ? text = '참' : text = '거짓';
console.log( text );


// 단항 조건문 : if ---------------


// 콘솔 정리
// console.clear()


/* 
if문 : 기본형
if(조건식) {
  조건이 참인 경우 수행
} else {
  조건이 거짓인 경우 수행
}
*/

var result;
if (rel){
  result = '내용이 참입니다.';
} else {
  result = '내용이 거짓입니다.';
}
console.log( result );


/*
if문 : else if 중첩
if(조건 1) {
  조건 1이 참인 경우 수행
} else if(조건 2) {
  조건 2가 참인 경우 수행
} else if(조건 3) {
  조건 3이 참인 경우 수행
} else {
  조건들이 모두 거짓인 경우 수행
}
*/

var n = 100;
var nResult;

if(n >= 90) {
  nResult = '9문제 이상으로 맞추셨습니다.'
} else if ( n <= 89 && n >= 80 ) {
  nResult = '8문제를 맞추셨습니다.'
} else if ( n <= 79 && n >= 70 ) {
  nResult = '7문제를 맞추셨습니다.'
} else {
  nResult = '6문제 이하로 맞추셨습니다.'
}
console.log(nResult)



// 다항 조건문 : switch ---------------


// 콘솔 정리
console.clear()


/*
기본형
switch(매개변수) {
  case 조건1:
    기능 구현
  break; -> 없으면 조건1 만족시 조건 2까지 동작하게 됨

  case 조건2:
    기능 구현
  break;

  ...

  default :
    만족하는 조건들이 없을 경우 실행할 기능
}
*/

var i = 1;
var iResult;
switch(i){
  case 1:
    iResult = "숫자 1 선택"
  break;

  case 2:
    iResult = "숫자 2 선택"
  break;

  case 3:
    iResult = "숫자 3 선택"
  break;

  default:
    iResult = "1, 2, 3 외 다른 숫자가 선택됨"
}
console.log( iResult )



// 활용 ------------------------------

// 콘솔 정리
console.clear()

/*
버튼을 클릭시 
id=old value 값을 찾아오기
20보다 크거나 같으면 성인으로, 작으면 미성년자로 구분하여 처리
*/

var btn = document.getElementsByTagName("button")[0]; // 문서 내 태그 선택
var input = document.getElementById("old"); // 문서 내 id 선택
var p = document.getElementsByTagName('p')[1];
var span = p.getElementsByTagName('span')[0]; // 태그 내부의 태그 (자손선택자) 선택

btn.addEventListener('click', function(){
  var inputData = parseInt(input.value); 
  console.log (inputData)
  // 가져오는 value는 텍스트로 인식되므로, 숫자로 변환

  if (inputData >= 20) {
    span.innerText = "당신은 성인입니다."
  } else if (inputData < 20 && inputData > 0) {
    span.innerText = "당신은 미성년자입니다."
  } else {
    span.innerText = "0 이상의 자연수를 입력해 주세요."
  }
})



