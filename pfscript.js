document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const navLinks = document.querySelector(".nav-links");
    hamburgerIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    navLinks.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            navLinks.classList.remove("active");
        }
    });
});