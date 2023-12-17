// $("#slider").on("input change",);

const sliders = document.querySelectorAll('.img-slider input');

sliders.forEach(slider => {
  slider.addEventListener('input', onHandlerSliderChange);
  slider.addEventListener('change', onHandlerSliderChange);
});

function onHandlerSliderChange(e) {
  const targetEl = e.target;
  const sliderPos = targetEl.value;

  const foregroundImg = targetEl
    .closest('.img-slider')
    .querySelector('.foreground-img');
  const sliderBtn = targetEl
    .closest('.img-slider')
    .querySelector('.slider-button');

  // Update the width of the foreground image
  foregroundImg.style.width = `${sliderPos}%`;

  // Update the position of the slider button
  sliderBtn.style.left = `calc(${sliderPos}% - 18px)`;
}
