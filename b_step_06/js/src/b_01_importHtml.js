// b_01_importHtml.js


(function($){
//? 구현할 기능 -----------
/*
- html 문서를 분리하여, 외부에 존재하는 html 문서를 불러오고, 이를 필요한 영역에 담아 사용하기
>> 선택자.load('불러올 data', function(){ 불러온 이후에 수행할 내용 })
>> 불러올 문서의 경로는 js 기준이 아닌 사용하고 있는 html 문서 기준
>> load() 메서드는 html(), text() 메서드와 동일하게 처리되는 순간 이전에 존재하던 요소는 모두 사라지게 된다.
>> load를 많이 쓰면 느려질 수 있으므로 필요 이상으로 많이 쓰는 건 권장하지 않음

*/

//? 변수 ------------
var box01 = $('#box_01');
var box02 = $('#box_02');
var boxBtn = box02.find('button');
var box03 = $('#box_03')
var baseUrl = "../page/importHtml/"
var importArr = ["box_01.html", "box_02.html", "box_03.html"];
var head = $('head');
var linkSheet = head.find('link[rel="stylesheet"]').eq(-1);


//? 기능수행 -----------
box01.load(baseUrl + importArr[0]);


//? 이벤트 ---------------
boxBtn.on('click', function(e){
  e.preventDefault()
  box02.load(baseUrl + importArr[1], function(){
    var import03 = head.find('.import_03');
    import03.remove();
  });
});

box03.load(baseUrl + importArr[2], function(){
  var appendLink = '<link rel="stylesheet" href="../css/page/importHtml/box_03.css" class="import_03">'; // 외부 css 호출 및 class 부여
  linkSheet.after(appendLink);
});

})(jQuery);