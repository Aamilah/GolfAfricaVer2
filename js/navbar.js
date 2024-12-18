// Select the vertical navigation element
const verticalNav = document.querySelector('.vertical-nav');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Get the colors from the current section's attributes
      const backgroundColor = entry.target.getAttribute('data-color');
      const borderColor = entry.target.getAttribute('data-border');

      // Gradually update the sidebar's background and border color
      verticalNav.style.backgroundColor = backgroundColor;
      verticalNav.style.borderRightColor = borderColor;
    }
  });
}, {
  threshold: 0.5, // Trigger when 50% of the section is visible
});

// Select all sections to observe
const sections = document.querySelectorAll('section');

// Observe each section
sections.forEach((section) => observer.observe(section));
