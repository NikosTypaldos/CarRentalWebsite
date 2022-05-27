const hamburger = document.querySelectorAll(".hamburger");
const navbarItem = document.querySelectorAll(".nav-link");
const linksContainer = document.querySelector(".links-container");
const navbar = document.querySelector(".navbar");



function toggleMenu() {
    if(linksContainer.classList.contains("show")) {
        linksContainer.classList.remove("show");
        navbar.classList.remove("navShow");
    } else {
        linksContainer.classList.add("show");
        navbar.classList.add("navShow");
    }

    
}

hamburger[0].addEventListener("click", toggleMenu)