window.addEventListener("load", function(event) {
    var x = document.getElementsByClassName("images-logo");
    anime({
        targets: x,
        keyframes: [
          {translateX:-310},
        ],
        duration: 1900,
        opacity: 1,
        easing: 'easeOutElastic(0.1, 3.3)',
        loop: false
      });
      var x = document.getElementsByClassName("images-text");
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

      var a= document.getElementsByClassName("aboutcontainer");
      var b = document.getElementsByClassName("au-01-title-1");
      var c = document.getElementsByClassName("au-01-text-1");
      var d = document.getElementsByClassName("au-01-image-1");
      anime({
      targets: a,
      keyframes: [
        {translateY:-100},
      ],
      duration: 1900,
      opacity: 1,
      delay: 1000,
      easing: 'easeOutElastic(1, 3.3)',
      loop: false
    });
    anime({
        targets: b,
        keyframes: [
          {translateX:100},
        ],
        duration: 1900,
        opacity: 1,
        delay: 2000,
        easing: 'easeOutElastic(1, 3.3)',
        loop: false
      });
      anime({
        targets: c,
        keyframes: [
          {translateX:-30},
        ],
        duration: 1900,
        opacity: 1,
        delay: 2000,
        easing: 'easeOutElastic(1, 3.3)',
        loop: false
      });
      anime({
        targets: d,
        keyframes: [
          {translateX:500},
        ],
        duration: 1900,
        opacity: 1,
        delay: 2000,
        easing: 'easeOutElastic(1, 3.3)',
        loop: false
      });
});

