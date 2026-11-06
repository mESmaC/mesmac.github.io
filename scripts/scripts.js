document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    primaryNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Flagship System Category Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const systemCards = document.querySelectorAll('.system-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';

      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      systemCards.forEach((card) => {
        if (filter === 'all') {
          card.classList.remove('is-hidden');
          return;
        }
        const categories = (card.getAttribute('data-category') || '').split(/\s+/);
        if (categories.includes(filter)) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
});
