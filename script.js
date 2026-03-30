// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    nav.classList.toggle('open');
  });

  // Close menu when a nav link is clicked
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}
