document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-inner");
  const slides = document.querySelectorAll(".carousel-item");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  const slideCount = slides.length;
  let currentIndex = 0;

  // Update the current slide
  function showSlide(index) {
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    currentIndex = index;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  // Update dots
  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  // Navigate
  prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));

  // Dot click
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });

  // TODO: Reset timer when user interacts with the carousel
  // Optional: Autoplay
  // setInterval(() => showSlide(currentIndex + 1), 5000);
});
