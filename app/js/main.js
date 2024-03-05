var formField = document.querySelectorAll('.booking-form__form-field:has(.booking-form__form-field--input):has(input:invalid)');
formField.forEach((field => {
  var input = document.querySelectorAll('.booking-form__form-field--input input');
  input.forEach((item) => {
    item.onblur = function(){
      if (item.checkValidity()) {
        field.classList.add('invalid');
        console.log(field);
      }
    }
  })
}))

/* SCHEDULE TOGGLE CARDS\TABLE */
var scheduleDisplay = document.querySelectorAll('.schedule__display'),
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
  dateFormat: "d-m-Y",
  mode: "range",
  "locale": document.documentElement.lang == "by" ? 'be' : document.documentElement.lang,
});


/* SPLIDE */
var elms = document.getElementsByClassName('splide');
for ( var i = 0; i < elms.length; i++ ) {
  new Splide(elms[i], {
    type: 'loop',
    perPage: 1,
    arrows: false,
    padding: { left: 30, right: 30 },
    gap: 15,
    mediaQuery: 'min',
    breakpoints: {
      541: {
        // destroy: true,
      }
    }
  }).mount();
}