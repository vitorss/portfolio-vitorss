window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navigation");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});