const menuBtn = document.querySelector('.menu-btn');
const modal = document.querySelector('.modal');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
if (!menuOpen) {
  menuBtn.classList.add('open');
  modal.style.display = "block";
  menuOpen = true;
}
});

let closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
    menuBtn.classList.remove('open');
    menuOpen = false;
}

// Carousel
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
  const slides = document.getElementsByClassName("giftSet");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 