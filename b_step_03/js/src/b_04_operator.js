// b_04_operator.js

// js 산술연산자 ( +, -, *, /, %, +=, -=, *=, /=, ++, -- )

var n = 10;
console.log('n : ', n, typeof n);

var plus = n + 10;
console.log('plus : ', plus, typeof plus);

var minus = n - 10;
console.log('minus : ', minus, typeof minus);

var multi = n * n;
console.log('multi : ', multi, typeof multi);

var avg = n / 2;
console.log('avg : ', avg, typeof avg);

var other = 10 / 3;
console.log('other : ', other, typeof other);

var other_나머지 = 10 % 3; // -> 1
console.log('other_나머지 : ', other_나머지, typeof other_나머지);

var parI = parseInt(10 / 3); // 나눗셈의 몫 -> 3
console.log ('parI : ', parI, typeof parI);


// --------------------------------------


// 콘솔 정리
console.clear ( );

var textNum  = 1000 + 'px';
console.log('textNum : ', textNum, typeof textNum);

// 숫자, 텍스트 혼합되어 텍스트로 인식되는 형태에 parseInt를 걸면, 숫자만 반환되면서 숫자로 인식되게끔 변경된다.
var textPar = parseInt(textNum)
console.log('textPar : ', textPar, typeof textPar); 



// ------- 할당연산자 : +=, -=, *=, /= ... ---------


// 콘솔 정리
console.clear ( );

console.log('n: ', n);
n = n + 10 
console.log('n: ', n);
n = n + 10
console.log('n: ', n);

n += 10 // n = n + 10 -> 40
console.log('n: ', n);
n -= 10 // n = n - 10 -> 30
console.log('n: ', n);
n *= 10 // n = n * 10 -> 300
console.log('n: ', n);
n /= 10 // n = n / 10 -> 30
console.log('n: ', n);
n **= 2 // n = n*n -> 900
console.log('n: ', n);
n %= 2; // n = n/2의 나머지 -> 0
console.log('n: ', n);



// ---------- 증감 연산자 & 전치, 후치 연산 ------------


// 콘솔 정리
console.clear ( );

console.log('n: ', n);
n += 1;
console.log('n: ', n);
n += 1;
console.log('n: ', n);

// 전치 연산 : 연산을 한 후 연산이 반영된 결과를 저장
++n; // n = n+1
++n;
++n;
console.log('n: ', n); // n === 5

// 후치 연산 : 연산이 반영되지 않은 결과를 먼저 나타내고 그 이후 연산
n++; // n = n+1
n++;
n++;
console.log('n: ', n); // n === 8


// 후치 연산시에는 더한 값이 다음 호출 때 나타나고, 전치 연산시에는 더한 값이 바로 반영되어 나타난다.
console.log('n: ', n++); // n === 9, (단, 다음 호출 때 나타나며 현재 나타나는 n의 값은 8)
console.log('n: ', n); // n === 9

console.log('n: ', ++n); // n === 10



// 콘솔 정리
console.clear ( );
console.log('n: ', n);
n -= 1; // n = n-1
console.log('n: ', n);

--n;
--n;
--n;
console.log('n: ', n);

n--;
n--;
n--;
console.log('n: ', n);

console.log('n: ', n--);
console.log('n: ', n);
console.log('n: ', --n);



// ---------- 비교 연산자 ------------


// 콘솔 정리
console.clear ( );

var k = 40;
var m = 30;
var rel = k >= m;
console.log('k:', k, ' m:', m, ' rel:', rel)
var rel_2 = k < m;
console.log('k:', k, ' m:', m, ' rel_2:', rel_2)

var k1 = "40";
var nCk = k === k1;
console.log( k, k1, nCk );

var ck1 = 3>1 && 5>1; // a && b -> a와 b 모두 참이면 true, 하나라도 거짓이면 false (And 조건)
console.log( ck1 ); // -> true
var ck2 = 3>1 && 8>12
console.log( ck2 ); // -> false

var ck1 = 3>1 || 5>1; // a || b -> a와 b 둘 중 하나라도 참이면 true, 모두 거짓이면 false (Or 조건)
console.log( ck1 ); // -> true
var ck2 = 3>5 || 8>12
console.log( ck2 ); // -> false



// ---- 삼항 연산자 (조건, true시 결과, false시 결과) ------------


// 콘솔 정리
console.clear ( );

var p = 5;
var pRel

(p > 4) ? pRel = "4보다 크다" : pRel = "4보다 작다.";
console.log( pRel )



// --- 활용 --------------


// 콘솔 정리
console.clear ( );

var btn = document.getElementById('btn');
var par = document.getElementsByClassName('content')[0];
var i = 0;

// btn에 click이라는 이벤트가 발생하면 function을 실행한다.
btn.addEventListener("click", function(){
  ++i
  par.innerText = i + " 번 클릭하셨습니다."
})






