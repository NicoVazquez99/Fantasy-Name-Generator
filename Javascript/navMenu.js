document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll("nav > ul > li"); // Seleccionar solo los elementos del menú principal

    menuItems.forEach(function(menuItem) {
        var submenu = menuItem.querySelector("ul");
        var pageContent = document.getElementById("page-content");

        menuItem.addEventListener("mouseover", function() {
            if (submenu) {
                submenu.style.display = "block";
                pageContent.style.marginTop = submenu.offsetHeight + "px";
            }
        });

        menuItem.addEventListener("mouseout", function() {
            if (submenu) {
                submenu.style.display = "none";
                pageContent.style.marginTop = "0";
            }
        });
    });
});
