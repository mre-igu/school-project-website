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

      var buttonEl = document.getElementsByClassName("person");
      console.log(buttonEl.length);
      for (var i = 0; i < buttonEl.length; i++) {
          buttonEl[i].addEventListener('mouseenter', function(e) {
            enterButton(e.target);
          }, false);
          
          buttonEl[i].addEventListener('mouseleave', function(e) {
            leaveButton(e.target)
          }, false);  
        }
});

function animateButton(el, scale, duration, elasticity, o, a) {
  var x = el.getElementsByClassName("team-image");
  var y = el.getElementsByClassName("person-text");
  var z = el.getElementsByClassName("overlay");
  console.log(x.length);
  
  anime({
      targets: x,
      keyframes: [
        {translateY: scale},
      ],
      duration: duration,
      opacity: a,
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });
    anime({
      targets: z,
      keyframes: [
        {translateY: scale},
      ],
      duration: duration,
      opacity: o,
      easing: 'easeOutElastic(1, .8)',
      loop: false
    });
  anime({
      targets: y,
      opacity: o,
      easing: 'easeOutElastic(1, .8)',
      duration: duration,
      loop:false
  });

}

function enterButton(el) {
animateButton(el, -40, 1000, 400,1,0.5)
};

function leaveButton(el) {
animateButton(el, 0, 1000, 300,0,1)
};

