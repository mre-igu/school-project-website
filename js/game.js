window.addEventListener("load", function(event) {
    anime({
        targets: '.game-features',
        keyframes: [
          {translateX:-200},
        ],
        duration: 1900,
        delay: 0,
        opacity: 1,
        easing: 'easeOutElastic(0.1, 3.3)',
        loop: false
      });
      anime({
        targets: '.game-logo',
        duration: 1900,
        delay: 0,
        opacity: 1,
        easing: 'easeOutElastic(0.1, 3.3)',
        loop: false
      });

      anime({
        targets: '.game-content',
        keyframes: [
          {translateX:270},
        ],
        duration: 1900,
        delay: 0,
        opacity: 1,
        easing: 'easeOutElastic(0.1, 3.3)',
        loop: false
      });
      anime({
        targets: '.game-images',
        keyframes: [
          {translateY:-70},
        ],
        duration: 1900,
        delay: 0,
        opacity: 1,
        easing: 'easeOutElastic(0.1, 3.3)',
        loop: false
      });
      anime({
        targets: '.game-content h3',
        keyframes: [
          {translateX:-100},
        ],
        duration: 1900,
        delay: anime.stagger(200,{start: 500}),
        opacity: 1,
        easing: 'easeOutElastic(0.1, 3.3)',
        loop: false
      });
      anime({
        targets: '.game-content p',
        keyframes: [
          {translateX:100},
        ],
        duration: 1900,
        delay: anime.stagger(200,{start: 700}),
        opacity: 1,
        easing: 'easeOutElastic(0.1, 3.3)',
        loop: false
      });


      anime({
        targets: '.genre',
        keyframes: [
          {translateX:anime.stagger(-20,{start: -10})},
        ],
        duration: 1900,
        delay: anime.stagger(200,{start: 500}),
        opacity: 1,
        easing: 'easeOutElastic(0.1, 3.3)',
        loop: false
      });

    anime({
        targets: '.game-images img',
        keyframes: [
          {translateX:anime.stagger(-15,{start: -20})},
        ],
        duration: 1900,
        delay: anime.stagger(200,{start: 500}),
        opacity: 1,
        easing: 'easeOutElastic(0.1, 3.3)',
        loop: false
      });
      anime({
        targets: '.sbadge',
        keyframes: [
          {translateX:-300},
        ],
        duration: 1900,
        delay: anime.stagger(200,{start: 500}),
        opacity: 1,
        easing: 'easeOutElastic(0.1, 3.3)',
        loop: false
      });
    });