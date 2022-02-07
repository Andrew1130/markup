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
  var menu = $('.menu');
  var fnCardSet = function(title, option){

    var j=0;
    var optLen = option.length;
    var code = '';
    for (; j<option.length; j+=1) {
      code += '<span>'+option[j]+'</span>';
    }

    var card = '<li><h3 class="title">'+ title +'</h3><div class="tag">'+ code +'</div></li>';
    menu.append(card);
  }

  var i = 0;
  var dataLen = data.length;
  for(; i < dataLen; i+=1){
    fnCardSet(data[i].title, data[i].option);
  }


})(jQuery);