// navBox.js

(function($){
  var navBtndiv = $('.nav_btn')
  var navBtn = navBtndiv.children('button')
  var navBox = $('#navBox')
  var timed = 500;

  navBtn.on('click', function(){
    
    navBox.stop().slideToggle(timed);

    // if(i%2 === 0){
    //   navBox.css({ 'display': 'block' })
    //   i++
    //   console.log(i)
    // } else {
    //   navBox.css({ 'display': 'none' })
    //   i++
    //   console.log(i)
    // }
    
  })

})(jQuery);

