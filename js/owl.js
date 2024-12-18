$(document).ready(function () {
  $(".match-schedule-carousel").owlCarousel({
    loop: true, // Enable infinite loop
    margin: 10, // Add space between items
    nav: true, // Display next/prev buttons
    dots: true, // Enable pagination dots
    autoplay: true, // Enable auto-slide
    autoplayTimeout: 5000, // Slide every 5 seconds
    navText: [
      '<i class="fas fa-arrow-left"></i>', /* Left Arrow */
      '<i class="fas fa-arrow-right"></i>' /* Right Arrow */
    ],
    responsive: {
      0: {
        items: 1, // Show 1 item on smaller screens
      },
      768: {
        items: 2, // Show 2 items on tablets
      },
      1200: {
        items: 4.5, // Show 3 items on desktops
      },
    },
    onInitialized: function () {
      // Insert the custom divider between navigation buttons
      const $nav = $('.owl-nav');
      $nav.find('.owl-prev').after('<span class="custom-divider">|</span>');
    }
  });
});

$(document).ready(function () {
  $(".video-carousel").owlCarousel({
    loop: true, // Enable infinite loop
    margin: 10, // Add space between items
    nav: true, // Display next/prev buttons
    dots: true, // Enable pagination dots
    autoplay: true, // Enable auto-slide
    autoplayTimeout: 5000, // Slide every 5 seconds
    navText: [
      '<i class="fas fa-arrow-left"></i><span class="custom-divider">|</span>', /* Left Arrow */
      '<i class="fas fa-arrow-right"></i>' /* Right Arrow */
    ],
    responsive: {
      0: {
        items: 1, // Show 1 item on smaller screens
      },
      768: {
        items: 2, // Show 2 items on tablets
      },
      1200: {
        items: 4, // Show 3 items on desktops
      },
    },
  });
});

$(document).ready(function () {
  $(".player-carousel").owlCarousel({
    loop: true, // Enable infinite loop
    margin: 10, // Add space between items
    nav: true, // Display next/prev buttons
    dots: true, // Enable pagination dots
    autoplay: true, // Enable auto-slide
    autoplayTimeout: 5000, // Slide every 5 seconds
    navText: [
      '<i class="fas fa-arrow-left"></i><span class="custom-divider">|</span>', /* Left Arrow */
      '<i class="fas fa-arrow-right"></i>' /* Right Arrow */
    ],
    responsive: {
      0: {
        items: 1, // Show 1 item on smaller screens
      },
      768: {
        items: 2, // Show 2 items on tablets
      },
      1200: {
        items: 4.5, // Show 3 items on desktops
      },
    },
  });
});