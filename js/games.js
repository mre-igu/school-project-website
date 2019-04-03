window.addEventListener("load", function(event) {
    var buttonEl = document.getElementsByClassName("game");
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

function animateButton(el, scale, duration, elasticity, o) {
var x = el.getElementsByClassName("game-logo");
var y = el.getElementsByClassName("game-button");
    console.log(x.length);
    
    anime({
        targets: x,
        keyframes: [
          {translateY: scale},
        ],
        duration: duration,
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
  animateButton(el, -40, 1000, 400,1)
};

function leaveButton(el) {
  animateButton(el, 0, 1000, 300,0)
};
