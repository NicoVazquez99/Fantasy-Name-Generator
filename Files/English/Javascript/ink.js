document.addEventListener("DOMContentLoaded", function () {
    const inkContainer = document.querySelector(".ink-container");
    const splatters = document.querySelectorAll(".splatter, .splatter1, .splatter2, .splatter3, .splatter4, .splatter5, .splatter6, .splatter7");
  
    setInterval(() => {
      splatters.forEach((splatter) => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
  
        splatter.style.left = `${randomX}px`;
        splatter.style.top = `${randomY}px`;
        splatter.style.opacity = "1";
      });
  
      setTimeout(() => {
        splatters.forEach((splatter) => {
          splatter.style.opacity = "0";
        });
      }, 1500);
    }, 4000 ); //time between ".splatter" random movement, 2000 = 2 seconds.
  });
  