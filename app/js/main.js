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

function onlyOne(checkbox) {
  var checkboxes  = document.querySelectorAll('.attractions input[id*="filters-item"]');
  checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false;
  })
}


window.onscroll = function() {
  var stickyBtn = document.querySelector('.sticky-btn'),
      parentSection = stickyBtn.closest(".section");

      window.scrollY - parentSection.offsetTop > 100 
      ? stickyBtn.classList.remove('display-none') 
      : stickyBtn.classList.add('display-none');
}