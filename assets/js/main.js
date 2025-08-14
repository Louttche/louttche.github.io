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
    const contactSection = document.getElementById('contact');

    if (isVisibleInViewport(aboutMeSection)) {
        return 'about-me';
    } else if (isVisibleInViewport(projectsSection)) {
        return 'projects';
    } else if (isVisibleInViewport(skillsSection)) {
        return 'skills';
    } else if (isVisibleInViewport(contactSection)) {
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