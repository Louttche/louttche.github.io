const isVisibleInViewport = (element) => {
    const rect = element.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
};

const getVisibleSectionId = () => {
    const aboutMeSection = document.getElementById('about-me');
    const projectsSection = document.getElementById('projects');
    const skillsSection = document.getElementById('skills');

    if (isVisibleInViewport(aboutMeSection)) {
        return 'about-me';
    } else if (isVisibleInViewport(projectsSection)) {
        return 'projects';
    } else if (isVisibleInViewport(skillsSection)) {
        return 'skills';
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
    const currentSection = document.querySelector("section");

    if (scrollContainer == null) {
        currentSection.classList.add("with-padding");
    } else {
        setActiveNavLink();
        scrollContainer.addEventListener("scroll", (_e) => {
            setActiveNavLink();
        });
    };
});