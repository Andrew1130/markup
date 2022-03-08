// jquery_test2.js


//! 99강 -----------------------------
//? 애니메이션 처리 ------------------


(function($){
  //* -------------------------------------
  /*
  var h1 = $('h1');
  h1.animate({ textIndent:'400px' }, 5000)
  */


  //* ---------------------------------------
  
  /*
  var wrap = $('#wrap');
  wrap.append('<p class="jq_par"></p>');

  var hi = '안녕하세요. jqeury를 통하여 글자를 삽입하고 있습니다.'
  var hiArr = hi.split('');
  console.log(hiArr)
  var jqPar = $('.jq_par')
  // jqPar.text(hi);

  var i = 0;
  var iLen = hiArr.length;

  var intervalText = setInterval(function(){
    jqPar.append(hiArr[i])
    i+=1;
    if(i >= iLen){
      clearInterval(intervalText)
    }
  }, 100);
  */

  console.clear()


  //* ---------------------------------------
  var a = 1;
  var b = 'my name is'
  var c = 'Andrew'

  console.log(a+b+c)
  console.log(a + '. ' + b + ' ' + c + ' Dev')



  console.clear()



//! 100강 -----------------------------
//? 외부 json 불러오기 ------------------

$.ajax({
  url:'../data/bestBoxData.json'
}).done(function(data){
  var dataNaming = data
  console.log(dataNaming[0].image + ' ' + dataNaming[0].image_description)
})


})(jQuery);
