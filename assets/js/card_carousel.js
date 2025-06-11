document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".card-carousel-inner");
  if (!carousel) return;

  let slidesData = Array.from(carousel.querySelectorAll(".card-carousel-item"));
  const slideCount = slidesData.length;
  if (slideCount < 2) return;

  const prevBtn = document.querySelector(".card-carousel-prev");
  const nextBtn = document.querySelector(".card-carousel-next");

  let currentIndex = 0;

  function renderSlides(centerIdx) {
    carousel.innerHTML = '';
    const prevIdx = (centerIdx - 1 + slideCount) % slideCount;
    const nextIdx = (centerIdx + 1) % slideCount;

    carousel.appendChild(slidesData[prevIdx].cloneNode(true));
    carousel.appendChild(slidesData[centerIdx].cloneNode(true));
    carousel.appendChild(slidesData[nextIdx].cloneNode(true));
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-65%)`;
    void carousel.offsetWidth;
  }

  renderSlides(currentIndex);

  function move(direction) {
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = direction === 1 ? `translateX(-130%)` : `translateX(0%)`;

    carousel.addEventListener('transitionend', onTransitionEnd, { once: true });

    function onTransitionEnd() {
      if (direction === 1) {
        currentIndex = (currentIndex + 1) % slideCount;
      } else {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      }
      renderSlides(currentIndex);
    }
  }

  prevBtn.addEventListener("click", () => move(-1));
  nextBtn.addEventListener("click", () => move(1));
});
