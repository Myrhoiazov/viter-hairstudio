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
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(faqItem => {
  faqItem.addEventListener('click', event => {
    let targetEl = event.currentTarget;

    if (!targetEl.classList.contains('faq-item')) {
      return;
    }

    const body = targetEl.querySelector('.faq-body');
    let faqText = body.querySelector('p');
    const contentHeight = body.offsetHeight + faqText.offsetHeight;

    if (targetEl.classList.contains('active')) {
      targetEl.classList.remove('active');
      body.style.minHeight = '0px';
    } else {
      targetEl.classList.add('active');
      body.style.minHeight = contentHeight + 'px';
    }
  });
});
