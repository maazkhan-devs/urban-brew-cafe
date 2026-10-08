const button = document.querySelector(".button");

button.addEventListener("click", function () {
    alert("Welcome to Urban Brew! Check out our delicious menu.");
});
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});