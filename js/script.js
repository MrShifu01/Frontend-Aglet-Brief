
// Horizontal and Smooth Scrolling, and Progress bar
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

// Dim other sections on hover
const dimSections = document.querySelectorAll(".image-container");

dimSections.forEach(section => {
    section.addEventListener("mouseover", function() {
        // Add the 'dimmed' class to all dimSections
        dimSections.forEach(sec => sec.classList.add("dimmed"));
        
        // Remove the 'dimmed' class from the currently hovered section
        this.classList.remove("dimmed");
    });

    section.addEventListener("mouseout", function() {
        // Remove the 'dimmed' class from all dimSections
        dimSections.forEach(sec => sec.classList.remove("dimmed"));
    });
});

// Transition overlay
const overlay = document.getElementById('transition-overlay');
const loadingText = document.getElementById('loading-text');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // stop the default link action

        // Bring in the overlay from the left
        overlay.style.transform = 'translateX(0)';

        // Show loading animation after the overlay transition is completed
        setTimeout(() => {
            loadingText.style.display = 'block';

            // After displaying the loading text for a while, navigate to the actual link
            setTimeout(() => {
                window.location.href = link.getAttribute('href');
            }, 2500); // 2.5 seconds for displaying the loading text (change as per your requirement)
        }, 100); // delay equal to the overlay transition time
    });
});

// Body fade in
document.addEventListener('DOMContentLoaded', function() {
  document.body.classList.add('fade-in');
});




