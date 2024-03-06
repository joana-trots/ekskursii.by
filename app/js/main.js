// var formField = document.querySelectorAll('.booking-form__form-field'),
//     submitBtn = document.querySelectorAll('[type="submit"]');

// formField.forEach((field => {
//   var input = field.querySelectorAll('input');
//   input.forEach((item) => {
//     item.onblur = function(e){
//       const isValid = e.target.checkValidity();
//       if (!isValid) field.classList.add('invalid');
//       else field.classList.remove('invalid');
//     }
//   });
// }))
// submitBtn.forEach(btn => {
//   btn.onclick = function(e) {
//     e.preventDefault();
    
//   }
// })
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