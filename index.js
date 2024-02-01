// #project 5 image slider

const slides = document.querySelectorAll(".slider img");
let slideIdx = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIdx].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(idx) {
  if (idx >= slides.length) {
    slideIdx = 0;
  } else if (idx < 0) {
    slideIdx = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIdx].classList.add("displaySlide");
}
function prevSlide() {
  clearInterval(intervalId);
  slideIdx--;
  showSlide(slideIdx);
}

function nextSlide() {
  slideIdx++;
  showSlide(slideIdx);
}
