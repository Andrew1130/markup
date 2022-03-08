// esNext.js


console.log(num)

var num = 10;
var num = 100;

for(let i = 0; i < 10; i += 1){
  console.log(i)
}
// console.log('i: ', i);


const box = 'box'
// box = 'care'
const fnOne = function(inner){
  const data = inner * 2;
  console.log(data);
}
fnOne(4);
fnOne(10);
fnOne(20);
fnOne(3);


/*
선택자는 const를 쓰면 좋다. (let으로도 아래와 같은 상황은 못 막기 때문에)
*/


let wrap = document.querySelector("#wrap");
console.log(wrap) // 성립
wrap = document.querySelector('h1');
console.log(wrap) // 성립

const h1 = document.querySelector("h1")
console.log(h1) // 성립
// h1 = document.querySelector("#wrap")
console.log(h1) //! 에러


// -------------------------------


let [a,b,c,d] = [10, 20, 30, [1,2]];
console.log(a);
console.log(b);
console.log(c);
console.log(d);


// --------------------------------
/*
esNext에서 변형된것 주요 체크사항
1. 변수 선언
2. 변수의 값 처리방법
3. 스프레드연산자
4. class처리 (prototype)
5. 화살표함수 (this를 사용하지 않을때 가능)
6. 간편한 텍스트 처리
'<div>'+ a +'</div>' -> `<div>${a}</div>`

7. 콜백함수의 복잡성 해결 : promise, fetch, async/await
+ fetch는 httpRequest()로 인한 외부데이터 호출 시의 복잡성을 줄여준다.

8. export, import


*/
