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
      delay: 800,
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
        delay: 1000,
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
        delay: 2700,
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
        delay: 1800,
        easing: 'easeOutElastic(1, 3.3)',
        loop: false
      });


      var b = document.getElementsByClassName("au-01-title-2");
      var c = document.getElementsByClassName("au-01-text-2");
      var d = document.getElementsByClassName("au-01-image-2");
    anime({
        targets: b,
        keyframes: [
          {translateX:-100},
        ],
        duration: 1900,
        opacity: 1,
        delay: 3000,
        easing: 'easeOutElastic(1, 3.3)',
        loop: false
      });
      anime({
        targets: c,
        keyframes: [
          {translateX:30},
        ],
        duration: 1900,
        opacity: 1,
        delay: 4300,
        easing: 'easeOutElastic(1, 3.3)',
        loop: false
      });
      anime({
        targets: d,
        keyframes: [
          {translateX:-500},
        ],
        duration: 1900,
        opacity: 1,
        delay: 3800,
        easing: 'easeOutElastic(1, 3.3)',
        loop: false
      });

      var x = document.getElementsByClassName("images-logo-2");
      anime({
          targets: x,
          keyframes: [
            {translateX:330},
          ],
          duration: 3900,
          opacity: 1,
          delay: 3000,
          easing: 'easeOutElastic(0.1, 3.3)',
          loop: false
        });
        var x = document.getElementsByClassName("images-text-2");
          anime({
          targets: x,
          keyframes: [
            {translateX:-330},
          ],
          duration: 3900,
          opacity: 1,
          delay: 3000,
          easing: 'easeOutElastic(0.1, 3.3)',
          loop: false
        });

 
});


