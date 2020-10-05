const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navigation__list');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
