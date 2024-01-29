// //импорт dayjs из 'dayjs' // ES 2015

// dayjs().format();
// console.log(dayjs().format('DD.MM.YYYY'));


/* SCHEDULE TOGGLE CARDS\TABLE */

(function(){
  var scheduleDisplay = document.querySelectorAll('.schedule__display'),
      scheduleButton  = document.querySelector('.schedule__options-item--display');

  scheduleButton.onclick = function() {
  scheduleDisplay.forEach((item) => {
    item.classList.toggle('schedule__display--table');
  })
  scheduleButton.classList.toggle('schedule__options-item--display-table');
  }
}());


/* flatpickr (DATEPICKER in the MAIN SEARCH) */

flatpickr('#main-search-date', {
  dateFormat: "m-d-Y",
  mode: "range",
  "locale": "ru",
  // "locale": "be",
  // "locale": "en"
});


/* SPLIDE */

var elms = document.getElementsByClassName('splide');
for ( var i = 0; i < elms.length; i++ ) {
  new Splide(elms[i], {
    type: 'loop',
    perPage: 1,
    arrows: false,
    // autoplay: true,
    interval: 5000,
    pauseOnHover: true,
    gap: 20,
    mediaQuery: 'min',
    breakpoints: {
      541: {
        // destroy: true,
      }
    }
  }).mount();
}