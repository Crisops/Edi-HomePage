const w = window;
const $header = document.querySelector("header");

w.addEventListener("scroll", () =>{
  $header.classList.toggle("active", (w.scrollY > 10))
})