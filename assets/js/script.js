"use strict";

// Function to toggle class
const elementToggleFunc = function (e) {
  e.classList.toggle("active");
};

// Sidebar - Always Visible (Removed Toggle Button)
const sidebar = document.querySelector("[data-sidebar]"); 
sidebar.classList.add("active"); // Ensure sidebar is always visible

// Removed sidebar button functionality
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");
// sidebarBtn.addEventListener("click", function () {
//   elementToggleFunc(sidebar);
// });

// Modal functionality
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]"),
  modalContainer = document.querySelector("[data-modal-container]"),
  modalCloseBtn = document.querySelector("[data-modal-close-btn]"),
  overlay = document.querySelector("[data-overlay]"),
  modalImg = document.querySelector("[data-modal-img]"),
  modalTitle = document.querySelector("[data-modal-title]"),
  modalText = document.querySelector("[data-modal-text]"),
  testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active"),
    overlay.classList.toggle("active");
  };

for (let i = 0; i < testimonialsItem.length; i++)
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Select and Filter Functionality
const select = document.querySelector("[data-select]"),
  selectItems = document.querySelectorAll("[data-select-item]"),
  selectValue = document.querySelector("[data-select-value]"),
  filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

for (let i = 0; i < selectItems.length; i++)
  selectItems[i].addEventListener("click", function () {
    let e = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(e);
  });

const filterItems = document.querySelectorAll("[data-filter-item]"),
  filterFunc = function (e) {
    for (let t = 0; t < filterItems.length; t++)
      "all" === e
        ? filterItems[t].classList.add("active")
        : e === filterItems[t].dataset.category
        ? filterItems[t].classList.add("active")
        : filterItems[t].classList.remove("active");
  };

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++)
  filterBtn[i].addEventListener("click", function () {
    let e = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(e);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });

// Form Validation
const form = document.querySelector("[data-form]"),
  formInputs = document.querySelectorAll("[data-form-input]"),
  formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++)
  formInputs[i].addEventListener("input", function () {
    form.checkValidity()
      ? formBtn.removeAttribute("disabled")
      : formBtn.setAttribute("disabled", "");
  });

// Testimonial Carousel
const testimonialItems = document.querySelectorAll(".testimonials-item");
let currentIndex = 0;
const intervalDuration = 1000;

function scrollToNextTestimonial() {
  testimonialItems[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % testimonialItems.length;
  testimonialItems[currentIndex].classList.add("active");

  let e = testimonialItems[currentIndex].querySelector(".content-card");
  e.style.backgroundColor = colors[currentIndex % colors.length].background;
  e.style.color = colors[currentIndex % colors.length].text;
}

const colors = [
  { background: "#ff0000", text: "#ffffff" },
  { background: "#00ff00", text: "#000000" }
];

let testimonialInterval = setInterval(scrollToNextTestimonial, 1000);
scrollToNextTestimonial();

document.querySelector(".testimonials").addEventListener("mouseenter", () => {
  clearInterval(testimonialInterval);
});

document.querySelector(".testimonials").addEventListener("mouseleave", () => {
  testimonialInterval = setInterval(scrollToNextTestimonial, 1000);
});

// Page Navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]"),
  pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++)
  navigationLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    let t = this.innerHTML.toLowerCase();

    for (let l = 0; l < pages.length; l++)
      if (t === pages[l].dataset.page) {
        pages[l].classList.add("active");
        navigationLinks[l].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[l].classList.remove("active");
        navigationLinks[l].classList.remove("active");
      }
  });
