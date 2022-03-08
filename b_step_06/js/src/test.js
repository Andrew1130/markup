// test.js


(function($){
//? 구현할 기능 -----------

//? 변수 ------------
var i = 10

var button = $(".btn")


//? 이벤트 -----------
button.on("click", function(){
  i+=1
  console.log(i)
})


})(jQuery);




