"use strict";

// javascript_test2.js
//! 99강 -----------------------------
//? 애니메이션 처리 ------------------
//* ---------------------------------------
var nav = document.querySelector('.navigation');
var per = 100;
nav.style.width = per + '%'; // nav.style.width = '50%'

var intervalAni = setInterval(function () {
  per -= 1;

  if (per >= 50) {
    nav.style.width = per + '%';
  } else {
    clearInterval(intervalAni);
  }
}, 10); //* ---------------------------------------

var wrap = document.querySelector('#wrap');
var makeP = document.createElement('p');
makeP.classList.add('js_par');
wrap.append(makeP);
var hi2 = '안녕하세요, javascript를 이용하여 글자를 삽입하고 있습니다.';
var hi2Arr = hi2.split('');
var jqPar = document.querySelector('.js_par');
var i = 0;
var ilen = hi2Arr.length;
var intervalText = setInterval(function () {
  jqPar.append(hi2Arr[i]);
  i += 1;

  if (i >= ilen) {
    clearInterval(intervalText);
  }
}, 100); //* ---------------------------------------

var a = 1;
var b = 'my name is';
var c = 'Andrew';
console.log(a + b + c); // 띄어쓰기, 문자는 그대로 두고 변수만 ${}로 감싸주면 된다.

console.log("".concat(a, ". ").concat(b, " ").concat(c, " Dev"));
console.clear(); //! 100강 -----------------------------
//? 외부 json 불러오기 ------------------

var url = "../data/bestBoxData.json"; //* esNext에서는 fetch로 편리하게 불러올 수 있다.

fetch(url).then(function (data) {
  // console.log(data);
  data.json().then(function (arrayList) {
    var listData = arrayList; // console.log(listData);

    var front = listData[2].title;
    var back = listData[2].id; // console.log(listData[2].title + ' ' + listData[2].id)

    console.log("".concat(front, " ").concat(back));
  });
});