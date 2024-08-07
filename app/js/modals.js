let modal           = document.querySelectorAll('.modal'),

    contactsModal   = document.querySelector('.contacts-modal'),
    filtersModal    = document.querySelector('.filters-modal'),
    searchModal     = document.querySelector('.search-modal'),
    bookingModal    = document.querySelector('.booking-modal'),
    validationModal = document.querySelector('.validation-modal'),

    modalOpenBtn   = document.querySelectorAll('.modal-open'),
    modalClose     = document.querySelectorAll('.modal-close');

let isModalFilter = false;

modalOpenBtn.forEach((item) => {
  item.onclick = function() {
    if (item.classList.contains('phone-item')) {
      contactsModal.style.display = "flex";
    }
    if (item.classList.contains('schedule__options-item--filters')) {
      filtersModal.style.display = "flex";
      !isModalFilter && (isModalFilter = true) && multiRange();
    }
    if (item.classList.contains('intro__btn--primary') || item.classList.contains('cta-primary')) {
      bookingModal.style.display = "flex";
    }
    if (item.classList.contains('booking-form__submit-btn') || item.classList.contains('booking-price')) {
      validationModal.style.display = "flex";
    }
    document.body.classList.toggle('overflow-hidden');
  }
});

let mainInput      = document.querySelectorAll('#main-search-place, #header-search-place');
let mainInputModal = document.querySelector('#main-search-place_modal');

if (mainInput) {
  mainInput.forEach((input => {
    input.oninput = function() {
      if (input.value.length > 2) {
        searchModal.style.display = "block";
        document.body.classList.toggle('overflow-hidden');
        mainInputModal.value = input.value;
        mainInputModal.focus();
        mainInputModal.onchange = function(){
          input.value = mainInputModal.value;
        }
      }
    }
  }));
}
modalClose.forEach((item) => {
  item.onclick = function() {
    modal.forEach((item) => {
      item.style.display = "none";
    });
    // pwaModal.classList.remove('active');
    document.body.classList.toggle('overflow-hidden');
  }
});
window.addEventListener('click', (event) => {
  modal.forEach((item) => {
    if (event.target === item) {
      item.style.display = "none";
      document.body.classList.toggle('overflow-hidden');
    }
  });
});