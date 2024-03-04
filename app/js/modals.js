let modal          = document.querySelectorAll('.modal'),

    contactsModal  = document.querySelector('.contacts-modal'),
    filtersModal   = document.querySelector('.filters-modal'),
    searchModal    = document.querySelector('.search-modal'),

    modalOpenBtn   = document.querySelectorAll('.modal-open'),
    modalClose     = document.querySelectorAll('.modal-close');
     
modalOpenBtn.forEach((item) => {
  item.onclick = function() {
    if (item.classList.contains('phone-item')) {
      contactsModal.style.display = "flex";
    }
    if (item.classList.contains('schedule__options-item--filters')) {
      filtersModal.style.display = "flex";
    }
    document.body.classList.toggle('overflow-hidden');
  }
})

let mainInput =  document.querySelector('#main-search-place');
let mainInputModal = document.querySelector('#main-search-place_modal');
if (mainInput) {
  mainInput.oninput = function() {
    if (mainInput.value.length > 2) {
      searchModal.style.display = "block";
      document.body.classList.toggle('overflow-hidden');
      mainInputModal.value = mainInput.value;
      mainInputModal.focus();
    }
  }
}


modalClose.forEach((item) => {
  item.onclick = function() {
    modal.forEach((item => {item.style.display = "none";}));
    document.body.classList.toggle('overflow-hidden');
  }
})
window.onclick = function(event) {
  modal.forEach((item => {
    if (event.target === item) {
      item.style.display = "none";
      document.body.classList.toggle('overflow-hidden');
    }
  }));
}