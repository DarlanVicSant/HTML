// Navbar efeito scroll
window.addEventListener("scroll", function(){
const header = document.getElementById("header");
header.classList.toggle("scrolled", window.scrollY > 50);
});

// Menu mobile
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
nav.classList.toggle("active");
});