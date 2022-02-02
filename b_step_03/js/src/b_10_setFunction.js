// b_10_setFunction.js


//? setTimeout : 일정 시간 뒤에 1회 동작하게 만든다.
var a = 10;
var b = 0;

console.log( a );
setTimeout(function(){
  a += 100;
  console.log( a );
}, 2000); // 1000 -> 1000ms -> 1s

//? setInterval : 일정 시간마다 계속 반복하여 동작하게 만든다.

/*
setInterval(function(){
  console.log( b );
  b += 1;
}, 1000);
*/

var go

var startFn = function(){
  go = setInterval(function(){
        b+=1;
        console.log(b); 
      }, 500);
};

var stopFn = function(){
  clearInterval(go);
  b = 0 // 멈췄을 때 0으로 초기화
}


var exWrap = document.querySelector('.ex_wrap');
var btn = exWrap.querySelectorAll('button');
console.log( btn );

btn.forEach(function(data, idx){
  data.addEventListener('click', function(){
    if(idx === 0) {
      startFn();
    } else {
      stopFn();
    }
  });
});