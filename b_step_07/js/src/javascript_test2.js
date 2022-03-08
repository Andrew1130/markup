// javascript_test2.js


//! 99강 -----------------------------
//? 애니메이션 처리 ------------------
//* ---------------------------------------
const nav = document.querySelector('.navigation');
let per = 100;
nav.style.width = per + '%';

// nav.style.width = '50%'

let intervalAni = setInterval(function(){
  per -= 1;
  if(per >= 50){
    nav.style.width = per + '%';
  } else {
    clearInterval(intervalAni);
  }

},10)


//* ---------------------------------------
const wrap = document.querySelector('#wrap');
const makeP = document.createElement('p');
makeP.classList.add('js_par');
wrap.append(makeP);

const hi2 = '안녕하세요, javascript를 이용하여 글자를 삽입하고 있습니다.'
const hi2Arr = hi2.split('')

const jqPar = document.querySelector('.js_par');


let i = 0;
const ilen = hi2Arr.length;

let intervalText = setInterval(function(){
  jqPar.append(hi2Arr[i]);
  i+=1;
  if(i >= ilen) {
    clearInterval(intervalText)
  }
}, 100);


//* ---------------------------------------
let a = 1;
let b = 'my name is'
let c = 'Andrew'

console.log(a+b+c)
// 띄어쓰기, 문자는 그대로 두고 변수만 ${}로 감싸주면 된다.
console.log( `${a}. ${b} ${c} Dev` )

console.clear()



//! 100강 -----------------------------
//? 외부 json 불러오기 ------------------
const url = "../data/bestBoxData.json";

//* esNext에서는 fetch로 편리하게 불러올 수 있다.
fetch(url).then(function(data){
  // console.log(data);
  data.json().then(function(arrayList){
    const listData = arrayList;
    // console.log(listData);
    let front = listData[2].title
    let back = listData[2].id
    // console.log(listData[2].title + ' ' + listData[2].id)
    console.log(`${front} ${back}`)
  })
})
