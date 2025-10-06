const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

// Close menu on nav link click (mobile)
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

// ScrollReveal animations
const sr = ScrollReveal({
  distance: '50px',
  duration: 800,
  easing: 'ease',
  reset: false,
});

sr.reveal('.home__content', { origin: 'left', interval: 200 });
sr.reveal('.home__img-wrapper', { origin: 'right', interval: 200 });

sr.reveal('.about__img', { origin: 'left' });
sr.reveal('.about__data', { origin: 'right', delay: 200 });

sr.reveal('.services__content', { origin: 'bottom', interval: 200 });

sr.reveal('.contact__form', { origin: 'bottom' });
