$(document).ready(function() {
  var $document = $(document);
  var $body = $('body');
  var setBodyScale = function() {
      
      var scale = $body.width() / 960.0;
      if ( $body.width() > $document.height() )
        scale = $document.height() / 960.0;
      
      var fontSize = 16.0 * scale;
      $('body').css('font-size', fontSize + 'px');
  }

  $(window).resize(function() { setBodyScale(); });
  setBodyScale();
});
