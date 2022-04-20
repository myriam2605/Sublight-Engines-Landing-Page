const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// const navUL = document.querySelector(".nav-ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // navUL.classList.toggle("show");
});

document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);

// window.onload = function () {
//     window.addEventListener("scroll", function (e) {
//         if (window.pageXOffset > 100) {
//             this.document.querySelector("header").classList.add("is-scrolling");
//         } else {
//             this.document.querySelector("header").classList.add("is-scrolling");
//         }
//     });
// };
