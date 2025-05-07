// script.js

const presentation = document.getElementById('presentation');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > 150 && window.scrollY > lastScrollY) {
    presentation.classList.add('hide');
  } else if (window.scrollY < lastScrollY) {
    presentation.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
});
