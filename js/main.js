const w = window;
const $header = document.querySelector("header");
const $nav = document.querySelector("nav");
const $iconMenu = document.querySelector(".bx");

w.addEventListener("scroll", () =>{
  $header.classList.toggle("active", (w.scrollY > 10))
})




document.addEventListener("click", (e) =>{
  if(e.target.matches(".bx-menu")){
    e.target.classList.toggle("bx-x");
    $nav.classList.toggle("active");
  }
  if(e.target.matches("a[data-menu]")){
    $iconMenu.classList.remove("bx-x");
    $iconMenu.classList.add("bx-menu");
    $nav.classList.remove("active");
  }
})
