// main_v4.js

(function($){
  var navBtndiv = $('.nav_btn')
  var navBtn = navBtndiv.children('button')
  var navBox = $('#navBox')
  var i = 0

  navBtn.on('click', function(){
    if(i%2 === 0){
      navBox.css({ 'display': 'block' })
      i++
      console.log(i)
    } else {
      navBox.css({ 'display': 'none' })
      i++
      console.log(i)
    }
    
  })

})(jQuery);