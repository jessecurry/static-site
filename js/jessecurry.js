$(document).ready(function() {
  var $body = $('body');
  var setBodyScale = function() {  
      var scale = $body.width() / 960.0;
      
      var fontSize = 16.0 * scale;
      $('body').css('font-size', fontSize + 'px');
  }

  $(window).resize(function() { setBodyScale(); });
  setBodyScale();
});
