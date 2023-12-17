import '../base';

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
