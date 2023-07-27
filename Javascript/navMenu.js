document.addEventListener("DOMContentLoaded", function () {
    const hasSubmenuItems = document.querySelectorAll(".has-submenu");

    hasSubmenuItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const submenu = this.querySelector(".submenu");
            submenu.classList.toggle("open");
        });

        // Cerrar el submenú cuando el usuario hace clic fuera de él
        document.addEventListener("click", function (event) {
            if (!item.contains(event.target)) {
                const submenu = item.querySelector(".submenu");
                submenu.classList.remove("open");
            }
        });
    });
});
