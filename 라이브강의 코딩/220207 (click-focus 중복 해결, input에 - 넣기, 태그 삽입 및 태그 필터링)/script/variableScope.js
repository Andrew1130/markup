// variableScope.js

var globalName = 'Andrew';
console.log(globalName); 
//* Andrew

var gname = globalName;


globalName = "my name";
// console.log(gname);


  var fnSet1 = function(){
    var gname = "rename";
    //* var를 쓰면 함수 내에서 gname이라는 값을 새로 만들게 된다. (지역변수가 된다.)

    // gname = "rename"; 
    //* var을 안 쓰면 기존에 있는 gname이라는 값을 변경하겠다는 것이 된다. (이 예제의 경우 함수 밖의 전역변수인 gname을 의미하게 된다.)

    console.log(gname) 
    //* rename
  };


fnSet1();


console.log(gname) 
//* Andrew >> fnSet1의 gname 값은 fnSet1 내에서만 유효

function fnSet2(){
  var gname = "reName"
  console.log(gname)
}

fnSet2()
console.log(gname)

// (function(){})();