// Masters slider
const mastersSlide = new Splide('#mastersSlide', {
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
mastersSlide.mount();

const topBanner = new Splide('#top-banner', {
  type: 'loop',
  pagination: false,
  arrows: false,
  autoplay: true,
  interval: 5000,
  speed: 1000,
  focus: 'center',
});
topBanner.mount();

const customersReviews = new Splide('#reviews-slider', {
  type: 'loop',
  perPage: 4,
  gap: 15,
  pagination: false,
  interval: 4000,
  speed: 800,
  autoplay: 'play',
  lazyLoad: true,
  breakpoints: {
    1280: {
      gap: 5,
      perPage: 3,
    },

    767: {
      gap: 2,
      perPage: 1,
    },
  },
});
customersReviews.mount();
