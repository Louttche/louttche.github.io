document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".card-carousel-inner");
  if (!carousel) return;

  let slidesData = Array.from(carousel.querySelectorAll(".card-carousel-item"));
  const slideCount = slidesData.length;
  if (slideCount < 2) return;

  const prevBtn = document.querySelector(".card-carousel-prev");
  const nextBtn = document.querySelector(".card-carousel-next");

  let currentIndex = 0;

  function getSlideMetrics() {
    const slide = carousel.querySelector('.card-carousel-item');
    if (!slide) return { slideWidth: 0, gap: 0 };
    const slideWidth = slide.offsetWidth;
    const style = window.getComputedStyle(carousel);
    const gap = parseFloat(style.gap) || 0;
    return { slideWidth, gap };
  }

  function renderSlides(centerIdx) {
    carousel.innerHTML = '';
    const prevIdx = (centerIdx - 1 + slideCount) % slideCount;
    const nextIdx = (centerIdx + 1) % slideCount;

    carousel.appendChild(slidesData[prevIdx].cloneNode(true));
    carousel.appendChild(slidesData[centerIdx].cloneNode(true));
    carousel.appendChild(slidesData[nextIdx].cloneNode(true));
    carousel.style.transition = "none";

    const { slideWidth, gap } = getSlideMetrics();
    const shift = slideWidth + gap - 10;
    carousel.style.transform = `translateX(-${shift}px)`;
    void carousel.offsetWidth;
  }

  function move(direction) {
    const { slideWidth, gap } = getSlideMetrics();
    const shift = slideWidth + gap - 10;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = direction === 1
      ? `translateX(-${shift * 2}px)`
      : `translateX(0px)`;

    carousel.addEventListener('transitionend', () => {
      currentIndex = (currentIndex + direction + slideCount) % slideCount;
      renderSlides(currentIndex);
    }, { once: true });
  }

  renderSlides(currentIndex);

  prevBtn.addEventListener("click", () => move(-1));
  nextBtn.addEventListener("click", () => move(1));

  window.addEventListener('resize', () => {
    renderSlides(currentIndex);
  });
});
