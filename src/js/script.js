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

// Slider
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const slider = document.querySelector(".section-hero-slider");
slider.style.transform = "scale(0.4)";
slider.style.overflow = "visible";

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
//  0%, 100%, 200%, 300%
