const modals = () => {
  //   const VISIT = 'Is Visited';

  const refs = {
    arrModalOpeners: document.querySelectorAll('[data-btn-open]'),
    arrBtnClose: document.querySelectorAll('.btn-close'),
    backdrop: document.querySelector('[data-modal]'),
  };

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
  }

  const backdrop = document.querySelector('[data-modal]');
  const arrBtnClose = document.querySelector('.btn-close');

  setTimeout(() => {
    backdrop.setAttribute('data-modal', 'buynow');
    document.body.classList.add('no-scroll');

    // add event btn close
    arrBtnClose.addEventListener('click', () => {
      onHandleClick();
    });

    // add event backdrop close
    backdrop.addEventListener('click', e => {
      e.stopPropagation();
      if (e.currentTarget === e.target) {
        onHandleClick();
      }
    });
  }, 10000);

  function onHandleClick() {
    backdrop.setAttribute('data-modal', '');
    document.body.classList.remove('no-scroll');
  }
};

export default modals;
