// click_focus.js

(function($){
  var one = $('.one');
  var oneLink  = one.children('a');

  // console.log(oneLink)
  var fnFocus = function () {
    console.log('focus에 대한 기능 수행');
  };
  var fnClick = function () {
    console.log('Click에 대한 기능 수행');
  };

  var permission = true;


  
  oneLink.on('click focus', function(event){
    event.preventDefault();
    // console.log(event.type)
    if(permission){
      permission = false;

      switch(event.type) {
        case 'focus':
          fnFocus();
          break

        case 'click':
          fnClick();
          break

      }
    }
  });

  // oneLink.on('focus', function(event){
  //   event.preventDefault();
  //   console.log('포커스')
  // });

})(jQuery);