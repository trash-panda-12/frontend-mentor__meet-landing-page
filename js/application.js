

const logo = document.querySelector('logo')



var tl = gsap.timeline();

//add 3 tweens that will play in direct succession.


tl.fromTo('.logo', { scale:0 }, { ease: "back.out(1.7)", duration: 0.5, delay:0.5, scale:1 });
tl.to('.logo', { rotate:360 }, "-=0.5");
tl.fromTo('.image-bubble', { scale:0 }, { ease: "back.out(1.7)", duration: 0.5, delay:0.5, scale:1 }, "-=0.5");
tl.fromTo('.hero-text', { opacity:0, y: -50 }, { opacity:1, duration:1, y:0, stagger: 0.1 });
tl.fromTo('.number-block-1', { opacity:0, y: -50 }, { opacity:1, duration:1, y:0, stagger: 0.1 });



gsap.from('.image-block',
  {
    scrollTrigger: '#block-images',
    opacity:0,
    y: -50,
    stagger: 0.2,
    duration:0.8
  },
)


gsap.from('#outro',
  {
    scrollTrigger: '#outro',
    opacity:0,
    y: 100,
    stagger: 0.2,
    duration:0.8
  },
)