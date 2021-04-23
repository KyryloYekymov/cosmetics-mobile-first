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
