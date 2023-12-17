import './js/base';
import './js/slideBanners';
import './js/before-after';

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelectorAll('.js-hidden');
  const observer = new IntersectionObserver(addActiveClass);

  function addActiveClass(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('show')) {
        entry.target.classList.add('show');
      }
    });
  }
  section.forEach(elem => observer.observe(elem));
});
