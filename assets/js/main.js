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
    const homePage = document.getElementById("home-page-content");

    if (homePage != null) {
        setActiveNavLink();
        scrollContainer.addEventListener("scroll", (_e) => {
            setActiveNavLink();
        });
    };
});