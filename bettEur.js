(function(){
    var fontSizeSlider = $("#font-size-slider");
    var fontSizeValueText = $("#font-size-value");
    var htmlElement = $("html");
    var bodyElement = $("body");
    fontSizeValueText.html("Base font size: " + bodyElement.css("font-size"));
    fontSizeSlider.on("input change", changeFontSize);
    
    function changeFontSize(e) {
      var currentVal = fontSizeSlider.val();
      htmlElement.css("font-size", currentVal + "px");
      bodyElement.css("font-size", currentVal + "px");
      fontSizeValueText.html("Base font size: " + currentVal + "px");
    }
  })();