// b_06_jQuery_eq_index.js


//* eq(i) : i번째에 기능을 수행하기 위해 순서를 지정
//* index() : 이벤트가 발생된 시점의 순서를 파악

// 선택 시, 순서가 형제가 아닌데도 js는 그 순서값을 지정하여 처리가 가능
// 하나가 아닌 둘 이상의 여러 요소를 수행해야 하는 경우 jqeury에서는 한번에 가능하지만 js는 반복문과 함께 써야함


(function($){

var check = $('.check');
var checkLi = check.find('li');
var checkBtn = check.find('button');

var set = $('.set');
var setLi = set.find('li');

// -----------------------------------------

// checkBtn.eq(2).css({ backgroundColor : "#f07" });
console.log( checkBtn )

checkBtn.on('click', function(e){
  e.preventDefault();
  // $(this).css({ backgroundColor : "#f07" })

  /* 
  1. index(); -> 선택된 요소의 순서값을 파악
  2. button 자체는 각 li에 1개씩만 들어 있으므로 순서 값이 없다.
  순서는 li에 있으므로, .parent()를 붙여 li의 index를 구하도록 한다.
  */
  var i = $(this).parent().index();
  console.log( i );
  
  //* 선택한 영역 외 나머지에는 css 제거하기 
  // setLi.removeClass('action');
  setLi.eq(i).siblings().removeClass('action'); // 형제들은 css 제거
  setLi.eq(i).addClass('action');

})

}) (jQuery);


