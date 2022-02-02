// b_08_etc.js


// 변수의 차이



//? 변수에 일반 숫자가 설정된 경우 -------------

var n = 10;
console.log ( n );
n = 3;
console.log ( n );

var n2 = n; // 깊은복사 (주소가 아닌 값 자체를 copy) : 복사로 인해 원본과 사본의 값이 1번 같아지나, 그 이후 원본과 사본은 서로 독립(원본의 값이 변경되어도 사본의 값이 변경되지 않고, 그 반대도 마찬가지.)
console.log ( n, n2 ); // n = 3, n2 = 3
n2 = 30;
console.log ( n, n2 ); // n = 30, n2 = 3



//? 변수에 배열이 설정된 경우 ----------------

// 콘솔 정리
console.clear()

var arr = [1,2,3];
console.log( arr );
var arr2 = arr; // 얕은복사 (주소값을 copy) : 복사로 인해 원본과 사본의 값이 1번 같아지고, 그 이후 원본과 사본은 서로 영향을 미친다. (원본의 값이 변경되면 사본의 값도 변경되고, 그 반대도 마찬가지)
console.log ( arr, arr2 );

arr2.push(4);
arr[0] = 5;
console.log ( arr, arr2 ); 

arr.sort();
console.log( arr, arr2 );



//? 참조변수의 경우 깊은 복사 ----------------
console.clear()

// var copyArr = [arr[0], arr[1], arr[2], arr[3]];
var copyArr = [];
var i=0;
for(i=0; i < arr.length; i+=1){
  copyArr[i] = arr[i];
}

console.log( copyArr );
arr.reverse();
console.log(arr, copyArr)



//? 겹배열 ----------------
console.clear()

var idx = 0;
var nArr = [idx];
nArr[1] = idx;
nArr[11] = ['a','b','c']
console.log( nArr );
console.log( nArr[11] );

var nArrGroup = nArr[11];
console.log( nArrGroup[2] );

var ar3 = [10,7,6,3,['a','c','f'],['0','ar','ccf',[1,2,3]]];
var ar3_ar1 = ar3[4];
console.log( ar3_ar1[1] );
var ar3_ar2_ar1 = ar3[5][3];
console.log( ar3_ar2_ar1 );
console.log( ar3_ar2_ar1[2] );



//? 객체+배열 혼합 -----------------------------
console.clear()

// 객체 내에 다른 배열과 객체를 넣을 수도 있다.
var obj = {
  'coffee':'americano',
  'juice':['포도주스', '사과주스', '오렌지주스', 
          {'sold-out':'당근주스', 'non-expose':'카라멜주스'}]
};
console.log (obj);
console.log (obj.coffee);
console.log (obj['coffee']);
console.log (obj.juice[0]);

console.log (obj.juice[3]);
console.log (obj.juice[3]["sold-out"]);
console.log (obj.juice[3]["non-expose"]);


var cardList =
[
{
'img':'img.png',
'title':'title_01',
'content':['content', 'content2'],
'address':'linkdata',
'option':['구매', '수량선택']
},

{
  'img':'img.png',
  'title':'title_02',
  'content':['content', 'content2'],
  'address':'linkdata',
  'option':['구매', '수량선택']
  }
];

console.log ( cardList[0].content[1] );
console.log ( cardList[1].option[0] );