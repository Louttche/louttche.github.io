function toggleSidebar(sidebar, isOpen) {
    const sidebarLinks = document.getElementById("nav-sidebar-menu");
    const sidebarOpenBtn = document.getElementById("openbtn");
    const sidebarCloseBtn = document.getElementById("closebtn");
    const sidebarSocialLinks = document.getElementById("nav-sidebar-social-links");

    if (isOpen) {
        sidebarCloseBtn.style.display = "none";
        sidebarSocialLinks.style.display = "none";
        sidebarOpenBtn.style.display = "block";
        sidebarLinks.style.display = "none";
        
        sidebar.style.width = "85px";
    } else {
        sidebar.style.width = "200px";
        sidebarOpenBtn.style.display = "none";
        sidebarCloseBtn.style.display = "flex";
        
        setTimeout(() => {
            sidebarLinks.style.display = "flex";
            sidebarSocialLinks.style.display = "flex";
        }, 250);
    }

    sidebar.classList.add(isOpen ? "collapsed" : "expanded");
    sidebar.classList.remove(isOpen ? "expanded" : "collapsed");
}

function openNav(sidebar) {
    toggleSidebar(sidebar, false);
};

function closeNav(sidebar) {
    toggleSidebar(sidebar, true);
};

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById("nav-sidebar");
    const openButton = document.getElementById('openbtn');
    const closeButton = document.getElementById('closebtn');

    openButton.addEventListener('click', () => { openNav(sidebar) });
    closeButton.addEventListener('click', () => { closeNav(sidebar) });

    const homePageContent = document.getElementById('home-page-content');
    homePageContent.addEventListener('click', () => { if (sidebar.classList.contains('expanded')) { closeNav(sidebar); } })
});
