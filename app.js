const active = document.querySelector("#active");
const images = document.querySelectorAll(".images img");
const opacity = 0.6;

// Set first img opacity
images[0].style.opacity = opacity;

images.forEach(img => img.addEventListener("click", imageClick));

function imageClick(e) {
  // Reset the opacity
  images.forEach(img => (img.style.opacity = 1));

  // Change current image to src of clicked image
  active.src = e.target.src;

  // Add fade in class
  active.classList.add("fade-in");

  // Remove fade-in class after .5 seconds
  setTimeout(() => active.classList.remove("fade-in"), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}