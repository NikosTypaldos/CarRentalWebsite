const hamburgerBtn = document.querySelector(".demo");
const navbarItem = document.querySelectorAll(".nav-link");
const linksContainer = document.querySelector(".links-container");
const navbar = document.querySelector(".navbar");

function toggleMenu() {
    if(linksContainer.classList.contains("show")) {
        linksContainer.classList.remove("show");
    } else {
        linksContainer.classList.add("show");
    }
}

hamburgerBtn.addEventListener("click", toggleMenu)