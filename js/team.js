window.addEventListener("load", function(event) {
    var x = document.getElementsByClassName("team-banner");
    anime({
        targets: x,
        keyframes: [
          {translateX: -1333},
        ],
        duration: 300,
        easing: 'easeOutElastic(1, .8)',
        loop: false
      });
});