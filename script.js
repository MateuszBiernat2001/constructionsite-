const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

const toggleMenu = () => {
  navbarLinks.classList.toggle('active');
};

toggleButton.addEventListener('click', toggleMenu);
