$(document).ready(function() {
  var $body = $('body');
  var setBodyScale = function() {
      var scaleSource = $body.width();
      var scaleFactor = 0.2083333333333;
      var maxScale = 600;
      var minScale = 0;
      var fontSize = scaleSource * scaleFactor;
      
      if (fontSize > maxScale) 
        fontSize = maxScale;
      
      if (fontSize < minScale) 
        fontSize = minScale;
        
      $('body').css('font-size', fontSize + '%');
      
      // Height
      $('#nameplate').css('top', ($(document).height() * 0.66) + 'px');
  }

  $(window).resize(function() { setBodyScale(); });
  setBodyScale();
});
