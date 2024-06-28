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



// /* PWA WINDOW */
// document.addEventListener("DOMContentLoaded", () => {
//   let pwaModal = document.querySelector('.pwa-window'),
//       pwaBttns = document.querySelectorAll('.pwa-window .btn');

//   pwaModal.classList.add('active');
//   document.body.classList.add('overlay', 'overflow-hidden');
  
//   pwaBttns.forEach((item) => {
//     item.onclick = function() {
//       pwaModal.classList.remove('active');
//       document.body.classList.remove('overlay', 'overflow-hidden');
//     }
//   });
//   if (document.body.classList.contains('overlay') === true) {
//     document.body.onclick = function() {
//       pwaModal.classList.remove('active');
//       document.body.classList.remove('overlay', 'overflow-hidden');
//     }
//   }
// });


document.querySelectorAll('.form-select').forEach(element => {
  try {
      let isVisible = isSync = false;

      const input = element.querySelector('.form-select__input');
      const output = element.querySelector('.form-select__output');
      const outputWrap = element.querySelector('.form-select__output-wrap');
      const blockOptions = element.querySelector('.form-select__options');

      !input && console.error('not .form-select__input: ', element);
      !output && console.error('not .form-select__output: ', element);
      !outputWrap && console.error('not .form-select__output-wrap: ', element);
      !blockOptions && console.error('not .form-select__options: ', element);

      outputWrap.addEventListener('click', () => {
          blockOptions.classList.toggle('is-visible');
          isVisible = !isVisible;
          isVisible && (isSync = true);
      });

      document.onclick = function (e) {
          if (isVisible && !isSync && e.target.closest('.form-select__options') !== blockOptions) {
              isVisible = false;
              blockOptions.classList.remove('is-visible');
          };
          isSync = false;
      };

      function addEvent(element) {
          element.classList.contains('form-select__option') && element.addEventListener('click', function (event) {
              isVisible = false;
              blockOptions.classList.remove('is-visible');
              input.value = element.getAttribute('data-value');
              output.innerHTML = element.innerHTML;
              blockOptions.querySelectorAll('.form-select__option').forEach(element => element.classList.remove('is-selected'));
              element.classList.add('is-selected');
              input.dispatchEvent(new Event('change'));
          });
      }

      blockOptions.querySelectorAll('.form-select__option').forEach(element => addEvent(element));

      (new MutationObserver(function (mutationsList, observer) {
          for (let mutation of mutationsList) {
              if (mutation.type === 'childList') {
                  mutation.addedNodes.forEach(element => addEvent(element));
                  // ??? - заменить на default
                  input.value = 0;
                  output.innerHTML = '...';
              }
          }
      })).observe(blockOptions, { childList: true });
  } catch (err) {
      console.log(err)
  }
});
document.querySelectorAll('.form-select-search').forEach(element => {
  try {
      let isVisible = false;

      const input = element.querySelector('.form-select__input');
      const output = element.querySelector('.form-select__output-seacrh');
      const outputWrap = element.querySelector('.form-select__output-wrap');
      const blockOptions = element.querySelector('.form-select__options');
      const inputSearch = output;
      let valueTemp = inputSearch.value;

      !input && console.error('not .form-select__input: ', element);
      !output && console.error('not .form-select__output-seacrh: ', element);
      !outputWrap && console.error('not .form-select__output-wrap: ', element);
      !blockOptions && console.error('not .form-select__options: ', element);

      outputWrap.addEventListener('click', () => {
          if (!isVisible) {
              isVisible = true;
              blockOptions.classList.add('is-visible');
              inputSearch.value = '';
          }
      });

      document.onclick = function (e) {
          if (isVisible && e.target.closest('.form-select-search') !== element) {
              isVisible = false;
              blockOptions.classList.remove('is-visible');
              //
              inputSearch.value = valueTemp;
              searchValues('');
          };
      };

      inputSearch.addEventListener('input', event => {
          searchValues(event.target.value);
      });

      function searchValues(str) {
          let count = 0;
          blockOptions.querySelectorAll('.form-select__option').forEach(element => {
              if (element.textContent.toLowerCase().startsWith(str.toLowerCase())) {
                  element.style.display = "";
                  count++;
              } else {
                  element.style.display = "none";
              }
          });

          count ? blockOptions.classList.remove('is-empty') : blockOptions.classList.add('is-empty');
      }

      function addEvent(element) {
          element.classList.contains('form-select__option') && element.addEventListener('click', function (event) {
              isVisible = false;
              blockOptions.classList.remove('is-visible');
              input.value = element.getAttribute('data-value');
              // output.textContent = element.textContent;
              blockOptions.querySelectorAll('.form-select__option').forEach(element => element.classList.remove('is-selected'));
              element.classList.add('is-selected');
              //
              inputSearch.value = valueTemp = element.textContent;
              searchValues('');

              input.dispatchEvent(new Event('change'));
          });
      }

      blockOptions.querySelectorAll('.form-select__option').forEach(element => addEvent(element));

      (new MutationObserver(function (mutationsList, observer) {
          for (let mutation of mutationsList) {
              if (mutation.type === 'childList') {
                  mutation.addedNodes.forEach(element => addEvent(element));
                  // ...
                  input.value = 0;
                  output.textContent = '...';
              }
          }
      })).observe(blockOptions, { childList: true });
  } catch (err) {
      console.log(err);
  }
});
document.querySelectorAll('.form-select-chosen').forEach(element => {
    try {
        let isVisible = false;
        let isSync = false;

        const input = element.querySelector('.form-select-chosen__input');
        const output = element.querySelector('.form-select-chosen__output');
        const outputWrap = element.querySelector('.form-select-chosen__output-wrap');
        const blockSearch = element.querySelector('.form-select-chosen__search');
        const inputSearch = element.querySelector('.form-select-chosen__search-input');
        const blockOptions = element.querySelector('.form-select-chosen__options');

        !input && console.error('not .form-select-chosen__input: ', element);
        !output && console.error('not .form-select-chosen__output: ', element);
        !outputWrap && console.error('not .form-select-chosen__output-wrap: ', element);
        !blockSearch && console.error('not .form-select-chosen__search: ', element);
        !inputSearch && console.error('not .form-select-chosen__search-input: ', element);
        !blockOptions && console.error('not .form-select-chosen__options: ', element);

        outputWrap.addEventListener('click', () => {
            blockSearch.classList.toggle('is-visible');
            isVisible = !isVisible;
            isVisible && (isSync = true);
            isVisible && inputSearch.focus();
        });

        document.addEventListener('click', (e) => {
            if (isVisible && !isSync && e.target.closest('.form-select-chosen__search') !== blockSearch) {
                isVisible = false;
                blockSearch.classList.remove('is-visible');
                inputSearch.value = '';
                searchValues('');
            }
            isSync = false;
        });

        inputSearch.addEventListener('input', event => {
            searchValues(event.target.value);
        });

        function searchValues(str) {
            let count = 0;
            blockOptions.querySelectorAll('.form-select-chosen__option:not(.is-not-search)').forEach(element => {
                if (element.textContent.toLowerCase().startsWith(str.toLowerCase())) {
                    element.style.display = "";
                    count++;
                } else {
                    element.style.display = "none";
                }
            });

            count ? blockOptions.classList.remove('is-empty') : blockOptions.classList.add('is-empty');
        }

        function addEvent(element) {
            element.classList.contains('form-select-chosen__option') && element.addEventListener('click', function (event) {
                isVisible = false;
                blockSearch.classList.remove('is-visible');
                input.value = element.getAttribute('data-value');
                output.textContent = element.textContent;
                blockOptions.querySelectorAll('.form-select-chosen__option').forEach(element => element.classList.remove('is-selected'));
                element.classList.add('is-selected');

                inputSearch.value = '';
                searchValues('');

                input.dispatchEvent(new Event('change'));
            });
        }

        blockOptions.querySelectorAll('.form-select-chosen__option').forEach(element => addEvent(element));

        (new MutationObserver(function (mutationsList, observer) {
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(element => addEvent(element));
                    input.value = 0;
                    output.textContent = '';
                }
            }
        })).observe(blockOptions, { childList: true });
    } catch (err) {
        console.log(err);
    }
});