// javascript_test.js



//! 96강 ----------------------------------

/*
let i = 10;
console.log(i);

let str2 = 'javascript';
console.log(str2);

let j = i + str2;
console.log(j);

let k = i / str2;
console.log(k);

i = 100
console.log(i);

let arr2 = []
arr2.push(2);
console.log(arr2)

console.clear()
*/


/*
console.log(a1); // Uncaught ReferenceError: Cannot access 'a1' before initialization
let a1 = 10;
*/


/*
const box = 'box1'
console.log( box );
box = 'box2'; // 에러 발생 : const에는 최초로 입력된 값만 유효하고, 추후 변경할 수 없다.
*/

/*
let ar3 = [1,2,3,4];
let ar4 = ar3;
ar3.push(100, 10);
console.log(ar3, ar4) // ar3 : [1, 2, 3, 4, 100, 10] ar4 : [1, 2, 3, 4, 100, 10]
*/

/*
const ar3 = [1,2,3,4];
const ar4 = ar3;
ar3.push(100, 10)
console.log(ar3, ar4)
*/



//! 97강 ----------------------------------
//? 선택자 ------------------------ 
const wrap = document.getElementById('wrap');
// console.log(wrap)

const navi = document.getElementsByClassName('navigation')[0];
// [0]을 안 쓰면 배열 형식으로 나오고 쓰면 태그 형식으로 나온다.(배열에 있는 첫번째 태그 형식을 꺼내는 것)
// console.log(navi)

const naviChild = navi.children;
// console.log(naviChild);

// console.clear()

//TODO : 배열, 유사배열 알아보기

const win = window
// console.log(win);

const wrap2 = document.querySelector('#wrap');
// console.log(wrap2);
const navi2 = document.querySelector('.navigation');
// console.log(navi2);

const naviChild2 = navi2.querySelector('li');
// console.log(naviChild2)
const naviChild2_all = navi2.querySelectorAll('li');
// console.log(naviChild2_all) // 리스트를 반환
const naviChild2_03 = navi2.querySelectorAll('li')[2];
// console.log(naviChild2_03) // 리스트에서 특정한 li를 고른다.

const naviChild3 = navi2.children;
// console.log(naviChild3) // 리스트를 반환
const naviChild3_05 = navi2.children[4]; 
// console.log(naviChild3_05) // 리스트에서 특정한 li를 고른다.


//? 속성값 가져오기 & 추가하기 ------------------------ 
const linkData =  naviChild[0].querySelector('a').getAttribute('href');
console.log(linkData)

naviChild[3].querySelector('a').setAttribute('href', 'http://kakao.com');


//? 클래스 추가 및 제거 ------------------------
naviChild[0].setAttribute('class', 'on')
const na2 = naviChild[2].classList;
console.log(na2)
na2.add('on')

navi2.classList.remove('border')


var na3 = naviChild[3].classList
var na3item = na3.item(2)
console.log(na3item)


console.clear()


/*
자바스크립트에서의 클래스 추가 및 제거 >> 추가
형식 : element.classList.method

1. add( String [, String [, ...]] ) 
: 지정한 클래스 값을 추가한다.


2. remove( String [, String [, ...]] )
: 지정한 클래스 값을 제거한다.


3. item( Number )
: 콜렉션의 인덱스를 이용하여 클래스 값을 반환한다.


4. toggle( String [, force] )
: 하나의 인수만 있을 때: 클래스 값을 토글링한다. 즉, 클래스가 존재한다면 제거하고 false를 반환하며, 존재하지 않으면 클래스를 추가하고 true를 반환한다.


5. contains( String )
: 지정한 클래스 값이 엘리먼트의 class 속성에 존재하는지 확인한다.


6. replace( oldClass, newClass )
: 존재하는 클래스를 새로운 클래스로 교체한다.
*/


//! 98강 ----------------------------------
//? ----------------------------------------------
//? javascript 이벤트 처리 및 순서할당 
//? ----------------------------------------------

/* 
1. li 여러개중 하나를 클릭
2. 선택한 요소가 무엇인지, 순서가 몇번째인지
3. li의 순번째에 기능 할당 ('border','1px solid #333')
*/


/*
//? for문을 이용한 이벤트 처리
let len = naviChild.length
for(let i = 0; i<len; i+=1) {
  // for문에 의해서 naviChild에 있는 모든 항목들이 검사됨
  // 그 항목들 중에서 click이 발생한 항목에 대해서만 콘솔 출력
  naviChild[i].addEventListener('click', function(e){
    e.preventDefault();
    console.log(i);
  })
}
*/


//? forEach문을 이용한 이벤트 처리
//! 유사배열로는 작동하지 않는다. (진)배열이 필요

const navLi = Array.from(naviChild)
console.log(navLi) //! >> (진)배열
console.log(naviChild) //! 유사배열

navLi.forEach(function(element, index){
  element.addEventListener('click', function(e){
    e.preventDefault();

    console.log(element, index)
    // element.style.border = '1px solid #333'
    navLi.at(index).style = 'border: 1px solid #333'

    /*
    제이쿼리와 달리 -1이 작동하지 않는다. 동일하게 하려면 navLi.length-1를 써주거나, at(-1)을 써야 한다.
    navLi[-1].style = 'border: 1px solid #333'
    navLi[navLi.length-1].style = 'border: 1px solid #333' 
    navLi.at(-1).style = 'border: 1px solid #333' 
    */
  });
});


/*
제이쿼리
$.each(naviChild, function(index, element){


});
*/

