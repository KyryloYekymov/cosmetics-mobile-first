const menuBtn = document.querySelector('.menu-btn');
const modal = document.querySelector('.modal');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    modal.style.display = "block";
    menuOpen = true;
  }
});

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
    menuBtn.classList.remove('open');
    menuOpen = false;
  }


// carousel gift-sets

let slideIndex = 1; // start index of the carousel
showSlides(slideIndex);
 
function plusSlide() {
    showSlides(slideIndex += 1); // click on the "Next" button, goes to the next slide
}
 
function minusSlide() {
    showSlides(slideIndex -= 1); // click on the "Prev" button, go to the previos slide
}
 
function currentxSlide(n) {
    showSlides(slideIndex = n); // function invoked by clicking on dots, goes to the n-th slide
}
 
function showSlides(n) {
    const slides = document.getElementsByClassName("giftSet"); // creates an array with all slides
    const dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1; // goest to the first slide when the last slide is reached
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


document.querySelector('.prev').addEventListener('click', minusSlide);
document.querySelector('.next').addEventListener('click', plusSlide);