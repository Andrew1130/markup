// optionSelector.js


var data = [
  {id:'01', title:'커피', option: ['ice', 'hot']},
  {id:'02', title:'쥬스', option: ['ice', 'hot']},
  {id:'03', title:'에이드', option: ['ice', 'new']},
  {id:'04', title:'차', option: ['hot', 'new']},
  {id:'05', title:'쿠키', option: ['new']},
  {id:'06', title:'기타', option: ['hot', 'new']},
  {id:'07', title:'얼음물', option: ['ice']}
];


// -----------------------------------

(function($){
  //* 1. 변수
  var viewList = $('.view_list');
  var optNav = $('.options_nav');
  var optBtn = optNav.find('button');
  var i = 0;
  

  //* 2. 기능변경, 추가
  viewList.html('<ul class="menu"><ul>');
  var menu = $('.menu'); // viewList.html('<ul class="menu"><ul>'); 이전에 var menu = $('.menu');을 하면, viewList.html('<ul class="menu"><ul>');에 의해 생긴 menu는 var menu = $('.menu');로 선택하지 못함에 유의


  //* 3. 기능수행 및 함수
  var fnCardSet = function(title, option){

    var j=0;
    var optLen = option.length;
    var code = '';
    for (; j<optLen; j+=1) {
      code += '<span>'+option[j]+'</span>';
    }

    var card = '<li><h3 class="title">'+ title +'</h3><div class="tag">'+ code +'</div></li>';
    menu.append(card);
  }

  
  /* 
   var dataLen = data.length
   for(; i < dataLen; i+=1){
   fnCardSet(data[i].title, data[i].option);
   } */

  /* $.each(data, function(idx, obj){
    fnCardSet(data[i].title, data[i].option);
  }); */

  data.forEach(function(obj, idx){
    console.log(obj, idx)
    fnCardSet(obj.title, obj.option);
  }); //* 위 3개 (for, $.each, data.forEach)는 모두 같은 표현이다.




  //* 4. 이벤트 ------------------------
  optBtn.on('click', function(e){
    e.preventDefault();
    var checkType = $(this).attr('data-type');
    // console.log(checkType);
    menu.empty(); // 해당된 영역의 내부를 지운다. (remove는 자기 자신도 지움)

    var newData = data.filter(function(obj, idx){
      var rel = obj.option.indexOf(checkType) >= 0;
      //* obj(data)의 option에서, checktype에 있는 데이터의 index 값이 0보다 큰가? ( 존재한다 >> 0보다 크다 >> true / 존재하지 않는다 >> -1 >> 0보다 작다 >> false )
      console.log(checkType, rel)
      return rel; //* filter는 return시 true만을 반환한다.
      
    });

    // console.log(newData)

    newData.forEach(function(obj, idx){
      fnCardSet(obj.title, obj.option);
    });
  })

})(jQuery);



  /* filter ----------------------------*/
  // 어떤 배열에서 function 이하에 적힌 내용을 기준으로 하여 필터링

  var numArr = [1,3,4,6,7,9,20,50,100];
  // console.log(numArr.indexOf(20))
  // console.log(5) //* ![0이 아닌 숫자]  > false  // !![0이 아닌 숫자]  > true

  var setNum = numArr.filter(function(data, idx){
    return idx > 3 && idx <= 6;
  });