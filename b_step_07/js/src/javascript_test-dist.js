"use strict";

// javascript_test.js

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

var ar3 = [1, 2, 3, 4];
var ar4 = ar3;
ar3.push(100, 10);
console.log(ar3, ar4);