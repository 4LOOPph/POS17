jQuery(document).ready(function($) {

  //ON RESIZE
  var rtime;
  var timeout = false;
  var delta = 100;
  function resizeend() {
    if (new Date() - rtime < delta) {
      setTimeout(resizeend, delta);
    } else {
      timeout = false;
      //FUNCTION HERE
    }
  }
  $(window).resize( function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
  });

});
