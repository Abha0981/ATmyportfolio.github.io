// copyright year
document.querySelector(".year").innerText = + (new Date().getFullYear());

// nav bar

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("please tell me");
    nav_header.classList.toggle("active");

};

mobile_nav.addEventListener("click", () => toggleNavbar());