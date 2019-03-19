function startBanner() {
anime({
    targets: '.left1',
    keyframes: [
      {translateX: 900},
    ],
    duration: 4000,
    easing: 'easeOutQuint',
    loop: false
  });
  anime({
    targets: '.left2',
    keyframes: [
      {translateX: 1000},
    ],
    duration: 4000,
    easing: 'easeOutQuint',
    loop: false
  });
  anime({
    targets: '.right1',
    keyframes: [
      {translateX: -900},
    ],
    duration: 4000,
    easing: 'easeOutQuint',
    loop: false
  });
  anime({
    targets: '.right2',
    keyframes: [
      {translateX: -1000},
    ],
    duration: 4000,
    easing: 'easeOutQuint',
    loop: false
  });
  anime({
    targets: '.mid1',
    keyframes: [
      {translateY: 900},
    ],
    duration: 4000,
    easing: 'easeOutQuint',
    loop: false,
    delay: 200
  });
  anime({
  targets: '.logo',
  opacity: 1,
  easing: 'easeOutQuint',
  duration: 5000,
  delay:3500
  });
  anime({
  targets: '.logo',
    keyframes: [
      {translateY: 220},
    ],
    duration: 4000,
    easing: 'easeInOutQuint',
    loop: false,
    delay: 5000
  });
  anime({
  targets: '.logotext',
  opacity: 1,
  easing: 'easeInOutQuint',
  duration: 5000,
  delay:5000
  });
  anime({
  targets: '.logoslogan',
  opacity: 1,
  easing: 'easeInOutQuint',
  duration: 5000,
  delay:5000
  });
}