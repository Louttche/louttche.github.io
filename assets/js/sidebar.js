function toggleSidebar(isOpen) {
    const sidebar = document.getElementById("nav-sidebar");
    const sidebarLinks = document.getElementById("nav-sidebar-menu");
    const sidebarOpenBtn = document.getElementById("openbtn");
    const sidebarCloseBtn = document.getElementById("closebtn");
    const sidebarSocialLinks = document.getElementById("nav-sidebar-social-links");

    if (isOpen) {
        sidebar.style.width = "200px";
        sidebarOpenBtn.style.display = "none";
        sidebarCloseBtn.style.display = "flex";
        
        setTimeout(() => {
            sidebarLinks.style.display = "flex";
            sidebarSocialLinks.style.display = "flex";
        }, 250);
    } else {
        sidebarCloseBtn.style.display = "none";
        sidebarSocialLinks.style.display = "none";
        sidebarOpenBtn.style.display = "block";
        sidebarLinks.style.display = "none";
        
        sidebar.style.width = "85px";
    }
}

function openNav() {
    toggleSidebar(false);
};

function closeNav() {
    toggleSidebar(true);
};
