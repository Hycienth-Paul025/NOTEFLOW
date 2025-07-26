const modalBox = document.getElementById("modal");
const modalTog = document.querySelectorAll("#modal-toggle");

modalTog.forEach((tog) => {
  tog.addEventListener("click", (e) => {
    e.preventDefault();
    modalBox.classList.add("open");
    navCont.classList.remove("show-nav");
    headNav.classList.remove("blur-effect");
  });
});

// for Single Signup Button

/* 
modalTog.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default link behavior
  modalBox.classList.add("open");
}); */

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", () => {
  modalBox.classList.remove("open");
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

headNav.addEventListener("click", () => {
  navCont.classList.remove("show-nav");
  headNav.classList.remove("blur-effect");
});

modalMode.addEventListener("click", () => {
  navCont.classList.remove("show-nav");
  headNav.classList.remove("blur-effect");
});

// Navigation Links

const navLinkEl = document.querySelectorAll(".nav-link");

navLinkEl.forEach((links) =>
  links.addEventListener("click", () => {
    headNav.classList.remove("blur-effect");
    navCont.classList.remove("show-nav");
  })
);

/// FILTERATION

const aboutBtns = document.querySelectorAll(".about-btn");
const aboutSect = document.querySelectorAll(".description-section");

//when we click we call the filterable Function

function filterable(e) {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  e.preventDefault();

  // filter each section to thier button

  //first way of filtering

  let dataFilter = this.getAttribute("data-name");

  aboutSect.forEach((section) => {
    section.classList.add("hide");

    if (
      section.getAttribute("data-item") === dataFilter ||
      dataFilter == "all"
    ) {
      section.classList.remove("hide");
    }
  });

  // second way of filtering

  /* for( let i = 0; i < aboutSect.length; i++)
  {
aboutSect[i].classList.add("hide")

if(aboutSect[i].getAttribute("data-item") == dataFilter || dataFilter == "all"){
aboutSect[i].classList.remove("hide")

}
  } */
}

aboutBtns.forEach((btns) => btns.addEventListener("click", filterable));

// ACCORDION

const accordionItem = document.querySelectorAll(".description-container");

accordionItem.forEach((item) => {
  item.addEventListener("click", function () {
    const expand = this.getAttribute("aria-expanded") == "true";

    //collapse all item first

    /* accordionItem.forEach((i) => i.setAttribute("aria-expanded", "false"));
     */

    for (i = 0; i < accordionItem.length; i++) {
      accordionItem[i].setAttribute("aria-expanded", "false");
    }

    // if not already expanded, expand this one
    if (!expand) {
      this.setAttribute("aria-expanded", "true");
    }
  });
});
