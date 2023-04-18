(() => {
  const refs = {
    menuBtn: document.querySelector('[data-menu-button]'),
    mobileMenu: document.querySelector('[data-menu]'),
    arrModalOpeners: document.querySelectorAll('[data-btn-open]'),
    arrBtnClose: document.querySelectorAll('.btn-close'),
    arrMenuItems: document.querySelectorAll('.nav__link'),
    btnGotoTop: document.querySelector('[data-goto-top]'),
  };

  if (refs.menuBtn) refs.menuBtn.addEventListener('click', toggleMenu);

  if (refs.btnGotoTop)
    refs.btnGotoTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

  function toggleMenu() {
    if (window.matchMedia('(min-width: 1280px)').matches) return;
    const expanded =
      (refs.menuBtn.getAttribute('aria-expanded') == 'true') | false;
    refs.menuBtn.classList.toggle('is-open');
    refs.menuBtn.setAttribute('aria-expanded', !expanded);
    refs.mobileMenu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
    document.body.classList.toggle('menu-opened');
  }

  // Menu fixed + Go to top
  const nav = document.querySelector('.nav-wrapper');
  const hero = document.querySelector('.hero');

  window.onscroll = function () {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      refs.btnGotoTop.classList.remove('goto-top--hide');
      hero.style.marginTop = `${nav.clientHeight}px`;

      nav.classList.add('fixed');
      nav.classList.add('animate__animated');
      nav.classList.add('animate__fadeIn');
    } else {
      refs.btnGotoTop.classList.add('goto-top--hide');
      hero.style.marginTop = 0;
      nav.classList.remove('fixed');
      nav.classList.remove('animate__animated');
      nav.classList.remove('animate__fadeIn');
    }
  };
})();

// Slider Reviews
$('.reviews__slider').slick({
  dots: true,
  arrows: false,
  adaptiveHeight: true,
  customPaging: function (slider, i) {
    return '<button class="sl-link"><div class="sl-inner"></div></button>';
  },
});

// --------------
// Masters slider
const splide = new Splide('#mastersSlide', {
  type: 'loop',
  perPage: 3,
  width: '50rem',
  gap: 4,
  pagination: false,
  lazyLoad: true,
  breakpoints: {
    1280: {
      gap: 1,
      perPage: 1,
      width: '18rem',
    },

    767: {
      gap: 2,
      perPage: 1,
      width: '23rem',
    },
  },
});
splide.mount();

// -----------------
// Section animation
const section = document.querySelectorAll('.js-hidden');
const links = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver(addActiveClass);

function addActiveClass(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('show')) {
      entry.target.classList.add('show');
    }
  });
}

section.forEach(elem => observer.observe(elem));

// -----------------------------
// Add Active class to Nav link

const navLinks = document.querySelectorAll('.nav__link');
const navContainer = document.querySelector('.nav__items');

const activeClass = 'nav__link--active';
let href = document.location.href;

navLinks.forEach(elem => {
  elem.href === href ? elem.classList.add(activeClass) : null;
});

navContainer.addEventListener('click', handleClickNavLink);

function handleClickNavLink(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }

  const link = e.target;
  const activeClass = 'nav__link--active';
  const isActiveLink = navContainer.querySelector('.nav__link--active');

  if (isActiveLink) {
    isActiveLink.classList.remove(activeClass);
    link.classList.add(activeClass);
  }

  link.classList.add(activeClass);
}
