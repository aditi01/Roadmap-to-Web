
  var stickyNav = function () {
  	  var navBar = $('#stickybar');
      var width = $(window).width();
      var top = $("#center-body").height();
      // var footerPosition = document.getElementById("bottom-footer").getBoundingClientRect();
      var scrollTop = $(window).scrollTop();

      console.log(scrollTop);
      console.log(top);
      if (scrollTop <= top) {
      		// $("#stickybar").css({ top: footerPosition});
          // $('nav').slideDown();
         $('nav').addClass("fixed");
      //     navBar.css({
    	 //  'position': 'fixed',
     	//   'bottom': 0,
     	//   'width': '100%'
   	  // }); 
      } else if (scrollTop > 0) {
      	
          // $('nav').slideUp();
          $('nav').removeClass("fixed");
          // navBar.removeAttr('style');
          // jQuery('.menu-secondary-wrap').css('position','static');
      }
  };

  $(window).scroll(function () {
      stickyNav();
  });

// var navBar = $('#stickybar');
// var bodyHeight = $('#center-body').height() - navBar.height();

// $(window).scroll(function() {
//   var actualPosTop = $(window).scrollTop();
  
//   if (actualPosTop <= bodyHeight) {
//     navBar.css({
//       'position': 'fixed',
//       'top': 0,
//       'width': '100%'
//     });
//   }
//   else if (actualPosTop > 0) {
//   	jQuery('.menu-secondary-wrap').css('position','static');
//     // navBar.removeAttr('style');
//   }
// });