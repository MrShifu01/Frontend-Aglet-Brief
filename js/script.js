const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const mask = document.querySelector(".mask");

if (window.innerWidth > 960) {
  // Horizontal Scrolling for Larger Screens
  const scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      end: "+=20000",
      onUpdate: self => {
        gsap.set(mask, { width: self.progress * 65 + "%" });
      }
    }
  });
}


