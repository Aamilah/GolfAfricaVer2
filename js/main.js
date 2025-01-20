function openVideoModal(element) {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("youtubeVideo");
    const videoUrl = element.getAttribute("data-video-url") + "?autoplay=1"; // Get video URL and autoplay
    iframe.src = videoUrl;
    modal.style.display = "block";
  }
  
  function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("youtubeVideo");
    iframe.src = ""; // Stop video playback
    modal.style.display = "none";
  }

// Add event listener to flip the card
document.querySelectorAll(".pokemon-card").forEach(card => {
  card.addEventListener("click", function() {
    this.classList.toggle("is-flipped");
  });
});