/* SCHEDULE TOGGLE CARDS\TABLE */
let scheduleDisplay = document.querySelectorAll('.schedule__display'),
    scheduleButton  = document.querySelectorAll('.schedule__options-item--display');
scheduleButton.forEach((btn) => {
  btn.onclick = function() {
    scheduleDisplay.forEach((item) => {
      item.classList.toggle('schedule__display--table');
    })
    btn.classList.toggle('schedule__options-item--display-table');
  }
})

/* flatpickr (DATEPICKER in the MAIN SEARCH) */
flatpickr('[id*="-date"]', {
  allowInput: true,
  onOpen: function(selectedDates, dateStr, instance) {
      instance.input.readOnly = true;
  },
  onClose: function(selectedDates, dateStr, instance) {
      instance.input.readOnly = false;
      instance.input.blur();
  },
  dateFormat: "d-m-Y",
  mode: "range",
  "locale": document.documentElement.lang == "by" ? 'be' : document.documentElement.lang,
});



function onlyOne(checkbox) {
  let checkboxes  = document.querySelectorAll('.attractions input[id*="filters-item"]:not(.filters-item__input--all)');
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false;
  })
}

/* FEEDBACK LONG TEXT */
let feedbackSlide = document.querySelectorAll('#feedback .splide__slide, .feedback .splide__slide');
if (feedbackSlide) {
  feedbackSlide.forEach((slide) => {
    let feedbackText  = slide.querySelector('.feedback__text');
    slide.offsetHeight - (feedbackText.offsetTop + feedbackText.offsetHeight) > 20
    ? feedbackText.classList.remove('feedback__text--long')
    : feedbackText.classList.add('feedback__text--long');
  });
}