// Reveal-on-scroll for [data-reveal] elements, with a small stagger per section.
const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      setTimeout(() => el.classList.add('in'), Math.min(i, 6) * 60);
      reveal.unobserve(el);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('[data-reveal]').forEach((el) => reveal.observe(el));

// Active-section highlight in the nav.
const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const idToLink = new Map(navLinks.map((a) => [a.getAttribute('href').slice(1), a]));
const spy = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const link = idToLink.get(entry.target.id);
    if (link && entry.isIntersecting) {
      navLinks.forEach((a) => a.style.color = '');
      link.style.color = 'var(--ink)';
    }
  });
}, { threshold: 0.4 });
['about', 'work', 'projects', 'stack'].forEach((id) => {
  const el = document.getElementById(id);
  if (el) spy.observe(el);
});
