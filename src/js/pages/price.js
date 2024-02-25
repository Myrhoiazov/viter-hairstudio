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

// Accordion events
const priceItems = document.querySelectorAll('.price-item');

priceItems.forEach(priceItem => {
  priceItem.addEventListener('click', event => {
    let targetEl = event.currentTarget;

    if (!targetEl.classList.contains('price-item')) {
      return;
    }

    const body = targetEl.querySelector('.price-body');
	let priceTable = body.querySelector('.price-table');
    const contentHeight = body.offsetHeight + priceTable.offsetHeight;

    if (targetEl.classList.contains('active')) {
      targetEl.classList.remove('active');
      body.style.minHeight = '0px';
    } else {
      targetEl.classList.add('active');
      body.style.minHeight = contentHeight + 'px';
    }
  });
});
