// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Lottie animation
  const lottieContainer = document.getElementById("lottie-container");
  if (lottieContainer) {
    lottie.loadAnimation({
      container: lottieContainer, // The container element
      renderer: "svg", // Renderer type: 'svg', 'canvas', or 'html'
      loop: true, // Animation will loop
      autoplay: true, // Start playing immediately
      path: "assets/lottieAimate/work.json", // Correct the path to your animation JSON file
    });
  }

  // "Read More/Less" functionality
  const toggleContainers = document.querySelectorAll(".toggle-container");

  toggleContainers.forEach((container) => {
    const moreText = container.querySelector(".more-text");
    const toggleButton = container.querySelector(".toggle-button");

    if (moreText && toggleButton) {
      // Initially hide the "more" text
      moreText.style.display = "none";

      // Add click event listener to the toggle button
      toggleButton.addEventListener("click", () => {
        const isHidden = moreText.style.display === "none";

        // Toggle visibility of the "more" text
        moreText.style.display = isHidden ? "inline" : "none";

        // Update the button text
        toggleButton.textContent = isHidden ? "Read Less" : "Read More";
      });
    }
  });

  // Dynamic year functionality
  const yearElement = document.getElementById("year");
  if (yearElement) { // Check if the element exists
    yearElement.textContent = new Date().getFullYear();
  }

  // Scroll-up functionality
  const scrollUp = document.querySelector("#scroll-up");
  if (scrollUp) {
    scrollUp.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }

  // Hamburger menu functionality
  const burger = document.querySelector("#burger-menu");
  const ul = document.querySelector("nav ul");
  if (burger && ul) {
    burger.addEventListener("click", () => {
      ul.classList.toggle("show");
    });
  }

  // Close hamburger menu when a navigation link is clicked
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      if (ul.classList.contains("show")) {
        ul.classList.remove("show");
      }
    })
  );
});
