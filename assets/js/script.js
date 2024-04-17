'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}
// Get all testimonial items
const testimonialItems = document.querySelectorAll('.testimonials-item');

// Set initial index and interval duration
let currentIndex = 0;
const intervalDuration = 1000; // 1 second

// Define colors for testimonial cards
/*const colors = [
    { background: '#1e3d59', text: '#f5f4e1' }, // Colors for the first testimonial
    { background: '#f5f4e1', text: '#1e3d59' }  // Colors for the second testimonial
];*/

// Define a function to scroll to the next testimonial
function scrollToNextTestimonial() {
    // Hide the current testimonial with fade-out animation
    testimonialItems[currentIndex].classList.remove('active');

    // Increment index or reset to 0 if reaching the end
    currentIndex = (currentIndex + 1) % testimonialItems.length;

    // Show the next testimonial with fade-in animation
    testimonialItems[currentIndex].classList.add('active');

    // Apply background and text colors to the testimonial container and text
    const testimonialContainer = testimonialItems[currentIndex].querySelector('.content-card');
    testimonialContainer.style.backgroundColor = colors[currentIndex % colors.length].background;
testimonialContainer.style.color = colors[currentIndex % colors.length].text;}
const colors = [
  { background: '#ff0000', text: '#ffffff' },
  { background: '#00ff00', text: '#000000' },
  // add more color objects as needed
];
// Start the interval to scroll automatically
let testimonialInterval = setInterval(scrollToNextTestimonial, intervalDuration);

// Run scrollToNextTestimonial immediately to start the animation without waiting for the first interval
scrollToNextTestimonial();

// Pause testimonial interval when user hovers over testimonials
document.querySelector('.testimonials').addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

// Resume testimonial interval when user stops hovering over testimonials
document.querySelector('.testimonials').addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(scrollToNextTestimonial, intervalDuration);
});




// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function (e) {
    e.preventDefault(); // prevent the default action

    let clickedLink = this.innerHTML.toLowerCase();

    for (let i = 0; i < pages.length; i++) {
      if (clickedLink === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}