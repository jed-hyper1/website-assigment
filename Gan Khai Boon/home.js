document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    }

    const slideshow = document.querySelector(".slideshow_product");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    prevButton.addEventListener("click", () => {
    plusSlides(-1); // Call the plusSlides function with -1 to move to the previous slide
    });

    nextButton.addEventListener("click", () => {
    plusSlides(1); // Call the plusSlides function with 1 to move to the next slide
    });

    slideshow.addEventListener("mouseenter", () => {
    prevButton.style.display = "block";
    nextButton.style.display = "block";
    });

    slideshow.addEventListener("mouseleave", () => {
    prevButton.style.display = "none";
    nextButton.style.display = "none";
    });

    // Additional code to make the dots clickable
    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide(index + 1); // Call the currentSlide function with the dot's index
    });
    });
});