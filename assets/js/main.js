// Credit to: folo from https://stackoverflow.com/questions/30943662/check-if-element-is-partially-in-viewport
const isElementXPercentInViewport = function(el, percentVisible = 60) {
  let
    rect = el.getBoundingClientRect(),
    windowHeight = (window.innerHeight || document.documentElement.clientHeight);

  return !(
    Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
  )
};

const setActiveNavLink = () => {
    const navLinks = document.getElementsByClassName("nav-link");

    for (let navLink of navLinks) {
        const sectionID = navLink.innerHTML.toLowerCase().replace(' ', '-');

        if (isElementXPercentInViewport(document.getElementById(sectionID))) {
            navLink.classList.add("active");
        } else {
            navLink.classList.remove("active");
        }
    }
};

const setDocumentOverflowY = function (mode) {
    document.documentElement.style.overflowY = mode;
    document.body.style.overflowY = mode;
}

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    const homePage = document.getElementById("home-page-content");

    if (homePage != null) {
        setActiveNavLink();
        scrollContainer.addEventListener("scroll", (_e) => {
            setActiveNavLink();
        });

        setDocumentOverflowY('hidden');
    } else {
        setDocumentOverflowY('auto');
    }
});