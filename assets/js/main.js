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

const getVisibleSectionId = () => {
    const aboutMeSection = document.getElementById('about-me');
    const projectsSection = document.getElementById('projects');
    const skillsSection = document.getElementById('skills');
    const contactSection = document.getElementById('contact');

    if (isElementXPercentInViewport(aboutMeSection)) {
        return 'about-me';
    } else if (isElementXPercentInViewport(projectsSection)) {
        return 'projects';
    } else if (isElementXPercentInViewport(skillsSection)) {
        return 'skills';
    } else if (isElementXPercentInViewport(contactSection)) {
        return 'contact';
    }
};

const setActiveNavLink = () => {
    const navLinks = document.getElementsByClassName("nav-link");

    for (let navLink of navLinks) {
        if (navLink.innerHTML.toLowerCase().replace(' ', '-') == getVisibleSectionId()) {
            navLink.classList.add("active");
        } else {
            navLink.classList.remove("active");
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    const homePage = document.getElementById("home-page-content");

    if (homePage != null) {
        // Nav links - set as active based on scroll event
        setActiveNavLink();
        scrollContainer.addEventListener("scroll", (_e) => {
            setActiveNavLink();
        });

        // Overflow snap behaviour fix (disable scrolling on `html, body` on homepage to only use the snap scrolling)
        document.documentElement.style.overflowY = 'hidden';
        document.body.style.overflowY = 'hidden';
    } else {
        // Enable scrolling on `html, body` for the pages without snap-scrolling (hard-coded homepage)
        document.documentElement.style.overflowY = 'auto';
        document.body.style.overflowY = 'auto';
    }
});