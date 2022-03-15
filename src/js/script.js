"use strict";

// mobile navigation
const btnNavEl = document.querySelector(".button-mobile-nav");
const navigationEl = document.querySelector(".navigation");
btnNavEl.addEventListener("click", function () {
  navigationEl.classList.toggle("nav-open");
});

// Footer set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
