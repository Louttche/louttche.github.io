function openNav() {
    const sidebar = document.getElementById("nav-sidebar");
    const sidebarLinks = document.getElementById("nav-sidebar-menu");
    const sidebarOpenBtn = document.getElementById("openbtn");
    const sidebarCloseBtn = document.getElementById("closebtn");

    sidebar.style.width = "200px";
    sidebarOpenBtn.style.display = "none";
    sidebarCloseBtn.style.display = "flex";
    
    setTimeout(() => sidebarLinks.style.display = "flex", 250);
};

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    const sidebar = document.getElementById("nav-sidebar");
    const sidebarLinks = document.getElementById("nav-sidebar-menu");
    const sidebarOpenBtn = document.getElementById("openbtn");
    const sidebarCloseBtn = document.getElementById("closebtn");

    sidebarCloseBtn.style.display = "none";
    sidebarOpenBtn.style.display = "block";
    sidebarLinks.style.display = "none";
    
    sidebar.style.width = "85px";
};
