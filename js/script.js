const modalBox = document.getElementById("modal");
const modalTog = document.getElementById("modal-toggle");

modalTog.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default link behavior
  modalBox.classList.add("open");
});

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  modalBox.classList.remove("open");
  console.log("clicked");
});

const navToggle = document.querySelector(".app");
const navClose = document.querySelector(".nav-close-btn");
const navCont = document.querySelector(".nav");
const headNav = document.querySelector(".header-navigation");
const modalMode = document.getElementById("modal-toggle");

navToggle.addEventListener("click", () => {
  navCont.classList.add("show-nav");
  headNav.classList.add("blur-effect");
}); 

navClose.addEventListener("click", () => {
  console.log("clicked");
  navCont.classList.remove("show-nav");
  headNav.classList.remove("blur-effect");
});

headNav.addEventListener("click", ()=>{
  navCont.classList.remove("show-nav");
  headNav.classList.remove("blur-effect");
})


modalMode.addEventListener("click", () => {
  navCont.classList.remove("show-nav");
  headNav.classList.remove("blur-effect");
});
