import modals from './modals';

document.addEventListener('DOMContentLoaded', () => {
  modals();
  const refs = {
    menuBtn: document.querySelector('[data-menu-button]'),
    mobileMenu: document.querySelector('[data-menu]'),
    arrMenuItems: document.querySelectorAll('.nav__link'),
    btnGotoTop: document.querySelector('[data-goto-top]'),
  };
  const nav = document.querySelector('.nav-wrapper');
  const hero = document.querySelector('.main');

  //   Add event listener on Menu Icon
  if (refs.menuBtn) refs.menuBtn.addEventListener('click', toggleMenu);

  if (refs.btnGotoTop)
    refs.btnGotoTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });

  // Menu fixed + Go to top
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

  // Toggle Menu
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

  // Add Active class to Nav link
  const navLinks = document.querySelectorAll('.nav__link');
  const navContainer = document.querySelector('.nav__items');

  const activeClass = 'nav__link--active';
  let href = document.location.href;

  navLinks.forEach(elem => {
    elem.href === href ? elem.classList.add(activeClass) : null;
    elem.addEventListener('click', toggleMenu);
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
  }
});

// Работа с картой подключенный код + локация

// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: 48.461063189895135, lng: 35.04195727116427 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary('maps');
//   const { AdvancedMarkerView } = await google.maps.importLibrary('marker');

//   // The map, centered at Uluru
//   map = new Map(document.getElementById('map'), {
//     zoom: 10,
//     center: position,
//     mapId: 'DEMO_MAP_ID',
//   });

//   //   The marker, positioned at Uluru
//   const marker = new AdvancedMarkerView({
//     map: map,
//     position: position,
//     title: 'Uluru',
//   });
// }

// initMap();
