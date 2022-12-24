(() => {
  const refs = {
    menuBtn: document.querySelector('[data-menu-button]'),
    mobileMenu: document.querySelector('[data-menu]'),
    arrModalOpeners: document.querySelectorAll('[data-btn-open]'),
    backdrop: document.querySelector('[data-modal]'),
    arrBtnClose: document.querySelectorAll('.btn-close'),
    arrMenuItems: document.querySelectorAll('.nav__link'),
    btnGotoTop: document.querySelector('[data-goto-top]'),
  };

  if (refs.menuBtn) refs.menuBtn.addEventListener('click', toggleMenu);

  if (refs.backdrop && refs.arrBtnClose && refs.arrModalOpeners) {
    refs.arrModalOpeners.forEach(btn => {
      btn.addEventListener('click', () => {
        const modalClass = btn.getAttribute('data-btn-open');
        if (modalClass.length == 0) return;
        refs.backdrop.setAttribute('data-modal', modalClass);
        const modalElement = document.querySelector(`.${modalClass}`);
        if (modalElement)
          modalElement.addEventListener('click', e => e.stopPropagation());
        document.body.classList.add('no-scroll');

        if (refs.menuBtn.classList.contains('is-open')) {
          refs.menuBtn.classList.remove('is-open');
          refs.menuBtn.setAttribute('aria-expanded', 'false');
          refs.mobileMenu.classList.remove('is-open');
          document.body.classList.remove('menu-opened');
        }
      });
    });
    refs.arrBtnClose.forEach(btn =>
      btn.addEventListener('click', () => {
        refs.backdrop.setAttribute('data-modal', '');
        document.body.classList.remove('no-scroll');
      })
    );
    refs.backdrop.addEventListener('click', () => {
      refs.backdrop.setAttribute('data-modal', '');
      document.body.classList.remove('no-scroll');
    });
  }

  if (refs.arrMenuItems)
    refs.arrMenuItems.forEach(item => {
      item.addEventListener('click', toggleMenu);
    });

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
const buttonsWrapper = document.querySelector('.map');
const slides = document.querySelector('.inner');

buttonsWrapper.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove('active')
    );
    if (e.target.classList.contains('first')) {
      slides.style.transform = 'translateX(-0%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('second')) {
      slides.style.transform = 'translateX(-33.33333333333333%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('third')) {
      slides.style.transform = 'translateX(-66.6666666667%)';
      e.target.classList.add('active');
    }
  }
});

// -----------------
// Section animation
const section = document.querySelectorAll('.js-hidden');
const links = document.querySelectorAll('.nav__link');

const options = {
  threshold: 0.2,
};

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
