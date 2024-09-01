const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('open'); // Add/remove 'open' class on click
});