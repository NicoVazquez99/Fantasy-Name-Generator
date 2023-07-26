document.addEventListener("DOMContentLoaded", function() {
    var homeButton = document.querySelector("nav > ul > li > a"); // Seleccionar el botón "Home"
    var submenu = document.querySelector("nav ul.submenu");
    var pageContent = document.getElementById("page-content");

    homeButton.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        if (submenu.style.display === "block") {
            submenu.style.display = "none";
            pageContent.style.marginTop = "0";
        } else {
            submenu.style.display = "block";
            pageContent.style.marginTop = submenu.offsetHeight + "px";
        }
    });
});
