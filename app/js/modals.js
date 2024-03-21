let modal          = document.querySelectorAll('.modal'),

    contactsModal  = document.querySelector('.contacts-modal'),
    filtersModal   = document.querySelector('.filters-modal'),
    searchModal    = document.querySelector('.search-modal'),
    bookingModal   = document.querySelector('.booking-modal'),

    modalOpenBtn   = document.querySelectorAll('.modal-open'),
    modalClose     = document.querySelectorAll('.modal-close');

modalOpenBtn.forEach((item) => {
  item.onclick = function() {
    if (item.classList.contains('phone-item')) {
      contactsModal.style.display = "flex";
    }
    if (item.classList.contains('schedule__options-item--filters')) {
      filtersModal.style.display = "flex";
      multiRange();
    }
    if (item.classList.contains('intro__btn--primary')) {
      bookingModal.style.display = "flex";
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
    document.body.classList.toggle('overflow-hidden');
  }
});
window.onclick = function(event) {
  modal.forEach((item => {
    if (event.target === item) {
      item.style.display = "none";
      document.body.classList.toggle('overflow-hidden');
    }
  }));
}