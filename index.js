const navList = document.querySelector(".nav-list");
const navMenu = document.querySelector(".nav-menu");

navMenu.addEventListener("click", () => {
  console.log("click");
  navList.classList.toggle("nav-active");
  navMenu.classList.toggle("toggle");
});
