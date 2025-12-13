// js/project-details.js
let slideIndex = 0; // Start with the first slide (index 0)
const slides = document.querySelectorAll(".carousel-slide");

function showSlides(n) {
    if (slides.length === 0) return; // No slides to show

    // Handle wrap-around
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Show the current slide
    slides[slideIndex].classList.add('active');
}

function plusSlides(n) {
    showSlides(slideIndex + n);
}

// Initial display (show the first slide)
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});