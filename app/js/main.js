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

/* ONLY ONE CHECKBOX */

// checkboxes && checkboxes.forEach((item => {
//     item.onclick = function(e){
//       if (item !== e.target) { item.checked = false; }
//     }
// }));

function onlyOne(checkbox) {
  var checkboxes  = document.querySelectorAll('.attractions input[id*="filters-item"]');
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false;
  })
}

