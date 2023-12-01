// darkmode
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 

  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {  
    disableDarkMode(); 
  }
});

// Adjustable font-size

(function(){
    var fontSizeSlider = $("#font_size_slider");
    var fontSizeValueText = $("#font_size_value");
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