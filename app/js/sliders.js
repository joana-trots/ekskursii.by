/* SPLIDE */
var slider        = document.querySelectorAll('.splide:not(.gallery-slider)');
var gallerySlider = document.querySelectorAll('.gallery-slider');

slider && slider.forEach((item) => {
  new Splide(item, {
    type: 'loop',
    perPage: 1,
    arrows: false,
    padding: { left: 30, right: 30 },
    gap: 15,
    mediaQuery: 'min',
    breakpoints: {
      541: {
        // destroy: true
      }
    }
  }).mount();
});

gallerySlider && gallerySlider.forEach((item) => {
  new Splide(item, {
    type: 'loop',
    perPage: 1,
    arrows: false,
    padding: { left: 30, right: 30 },
    gap: 15,
    mediaQuery: 'min',
    breakpoints: {
      541: {
        perPage: 2
      },
      769: {
        perPage: 3
      },
      1025: {
        perPage: 4
      },
      1421: {
        perPage: 5
      },
    }
  }).mount();
});