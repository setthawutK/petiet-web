const nav = document.querySelector("nav");
const moblieNav = document.querySelector("nav.moblie-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".moblie-menu-container .close-icon");
const moblieMenuContainer = document.querySelector(".moblie-menu-container");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 60){
        nav.classList.add("scrolled");
        moblieNav.classList.add("scrolled");
    } else{
        nav.classList.remove("scrolled");
        moblieNav.classList.remove("scrolled");
    }
});


menuIcon.addEventListener("click",() => {
    moblieMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click",() => {
    moblieMenuContainer.classList.remove("active");
});