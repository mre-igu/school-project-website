(function($) {
    "use strict"; // Start of use strict
  
    // Detect when form-control inputs are not empty
    $(".cool-b4-form .form-control").on("input", function() {
      if ($(this).val()) {
        $(this).addClass("hasValue");
      } else {
        $(this).removeClass("hasValue");
      }
    });
  })(jQuery); // End of use strict

  window.addEventListener("load", function(event) {
    var x = document.getElementsByClassName("contactbox");
    anime({
        targets: x,
        keyframes: [
          {translateY:310},
        ],
        duration: 1900,
        opacity: 1,
        easing: 'easeOutElastic(0.1, 3.3)',
        loop: false
      });
      var x = document.getElementsByClassName("mapouter");
      anime({
          targets: x,
          keyframes: [
            {translateX:310},
          ],
          duration: 1900,
          opacity: 1,
          easing: 'easeOutElastic(0.1, 3.3)',
          loop: false
        });
    });