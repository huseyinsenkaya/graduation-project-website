/*====================== MENU SHOW =============================*/
const navMenu = document.querySelector("#nav-menu");
const toggleButton = document.querySelector("#nav-toggle");
const closeButton = document.querySelector("#nav-close");

toggleButton.addEventListener("click", () => {
  navMenu.style.bottom = 0;
});

closeButton.addEventListener("click", () => {
  navMenu.style.bottom = "-100%";
});

/*====================== Header Background =============================*/
const scrollHeader = () => {
  const nav = document.getElementById("header");

  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

