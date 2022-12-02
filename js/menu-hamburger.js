let link = document.getElementById('link');
let burger = document.getElementById('burger');
let ul = document.querySelector('.list-unstyled ');

link.addEventListener('click', function (e) {
  e.preventDefault();
  burger.classList.toggle('open');
  ul.classList.toggle('hamburger');
});
