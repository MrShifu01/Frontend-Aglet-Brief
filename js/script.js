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
    onUpdate: self => {
      // Update the mask width based on the progress of the carousel's ScrollTrigger
      gsap.set(mask, { width: self.progress * 65 + "%" });
    }
  }
});

