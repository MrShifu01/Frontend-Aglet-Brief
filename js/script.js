const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=20000",
  }
});

console.log(1 / (sections.length - 1))

//Progress bar animation

gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1
  }
});

