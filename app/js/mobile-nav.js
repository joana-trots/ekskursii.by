const burger = document.querySelector('.burger'),
      menu = document.querySelector('.header__container--mobile'),
      modalOpenBtnNav = document.querySelector('.header__container--mobile .modal-open');
burger.addEventListener('click', () => {
    menu.classList.toggle('menu-opened');
    burger.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
});
modalOpenBtnNav.addEventListener('click', () => {
    menu.classList.remove('menu-opened');
    burger.classList.remove('active');
    
    bookingModal.style.display = "flex";
    document.body.classList.remove('overflow-hidden');
});