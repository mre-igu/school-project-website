window.addEventListener("load", function(event) {
    var x = document.getElementsByClassName("team-banner");
    anime({
        targets: x,
        keyframes: [
          {translateY:-540},
        ],
        duration: 1900,
        easing: 'easeOutElastic(1, 3.3)',
        loop: false
      });
});