

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

/* QUICK NAV */
(function () {
  const sections = document.querySelectorAll("#price, #schedule, #description, #program, #route, #feedback");
  const links = document.querySelectorAll(".quicknav__tags-group--tag-link");
  const setActiveLink = (id) => {
    links.forEach((link) => {
      if (link.getAttribute("href") === `#${id}`) {
        link.classList.add("quicknav__active-link");
      } else {
        link.classList.remove("quicknav__active-link");
      }
    });
  };
  let options = {
    root: null,
    threshold: 0.5,
  };
  let callback = function (entries) {
    entries.toReversed().forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        setActiveLink(target.getAttribute("id"));
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  sections.forEach((section) => {
    observer.observe(section);
  });
})();