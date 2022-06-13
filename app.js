const hamburgerBtn = document.querySelector(".demo");
const linksContainer = document.querySelector(".links-container");
const navbar = document.querySelector(".navbar");

function toggleMenu() {
  if (linksContainer.classList.contains("show")) {
    linksContainer.classList.remove("show");
  } else {
    linksContainer.classList.add("show");
  }
}

window.onscroll = () => {
  if (
    document.body.scrollTop >= navbar.offsetHeight ||
    document.documentElement.scrollTop >= navbar.offsetHeight
  ) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

hamburgerBtn.addEventListener("click", toggleMenu);
