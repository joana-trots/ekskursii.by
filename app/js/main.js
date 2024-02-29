/* QUICK NAV */
const qsection = document.getElementById('qsection'),
      qnavbar = document.getElementById('qnavbar'),
      sections = document.querySelectorAll('.about__inner section, section.route, section.feedback');

var qlink = document.querySelectorAll('.quicknav__tags-group--tag-link'),
    qlinkActive = document.querySelector('.quicknav__active-link');

window.onscroll = function() {
  if ((window.scrollY - qsection.offsetTop) > 0) {
    qnavbar.classList.add('onscroll');
  } else {
    qnavbar.classList.remove('onscroll');
  }




  let options = { 
    root: qsection, 
    threshold: 0.5 
  }  
  let callback = function(entries) { 
    entries.forEach(entry => { 
      if (entry.isIntersecting) { 
  
          const target = entry.target;
  
          sections.forEach((section => {
            id = section.getAttribute('id');
            // console.log(id.getAttribute('id'));
            qlink.forEach((link => {
              href = link.getAttribute('href').substring(1);
              // console.log(href);
              if (href === id) {
                console.log('true');
                link.classList.add('quicknav__active-link');
              }
              else link.classList.add('quicknav__active-link');
            }));
            
          }));
          
          console.log(target) 
      }
    }); 
  }
  const observer = new IntersectionObserver(callback, options); 
  sections.forEach(section => { 
    observer.observe(section); 
  });

  
};   






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