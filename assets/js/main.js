document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    const currentSection = document.querySelector("section");

    if (scrollContainer == null) {
        currentSection.classList.add("with-padding");
    };
});