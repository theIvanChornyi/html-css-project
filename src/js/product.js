(() => {
  const refs = {
    openMenuBtn: document.querySelector('.card__btn'),
    closeMenuBtn: document.querySelector('.modal-close'),
    menu: document.querySelector('.backdrop'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();