const CustomSelect = (function () {
  function init (classNameOrElement) {
    var x, i, j, l, ll, selElmnt, a, b, c, notGenerate, val;

    if (
      typeof classNameOrElement === 'string' ||
      classNameOrElement instanceof String
    ) {
      x = document.querySelectorAll (classNameOrElement);
    } else {
      x = [classNameOrElement];
    }
    l = x.length;
    for (i = 0; i < l; i++) {
      if (x[i].classList.contains ('custom-select-not-generate')) {
        notGenerate = true;
        a = x[i].querySelector ('.select-selected');
        val = a.textContent;
        b = x[i].querySelector ('.select-items');
        b.classList.add ('display-none');
        ll = b.children.length;
      } else {
        notGenerate = false;
        selElmnt = x[i].getElementsByTagName ('select')[0];
        ll = selElmnt.length;
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement ('DIV');
        a.setAttribute ('class', 'select-selected');
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild (a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement ('DIV');
        b.setAttribute ('class', 'select-items display-none');
      }

      /* For each option in the original select element, create a new DIV that will act as an option item: */
      for (j = 0; j < ll; j++) {
        if (notGenerate) {
          c = b.children[j];
          if (val == c.textContent) {
            c.setAttribute ('class', 'same-as-selected');
          }
          c.addEventListener ('click', function (e) {
            var selectItems;
            selectItems = this.parentNode;
            [].forEach.call (selectItems.children, function (el) {
              el.removeAttribute ('class');
            });
            this.setAttribute ('class', 'same-as-selected');
          });
        } else {
          c = document.createElement ('DIV');
          c.innerHTML = selElmnt.options[j].innerHTML;
          if (selElmnt.options[j].selected) {
            c.setAttribute ('class', 'same-as-selected');
          }

          /* When an item is clicked, update the original select box, and the selected item: */
          c.addEventListener ('click', function (e) {
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName ('select')[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                s.dispatchEvent (new Event ('change'));
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName ('same-as-selected');
                yl = y.length;
                for (k = 0; k < yl; k++) {
                  y[k].removeAttribute ('class');
                }
                this.setAttribute ('class', 'same-as-selected');
                break;
              }
            }
            h.click ();
          });
        }
        if (!notGenerate) {
          b.appendChild (c);
        }
      }
      if (!notGenerate) {
        x[i].appendChild (b);
      }

      /* When the select box is clicked, close any other select boxes, and open/close the current select box: */
      a.addEventListener ('click', function (e) {
        e.stopPropagation ();
        closeAllSelect (this);
        this.nextElementSibling.classList.toggle ('display-none');
        this.classList.toggle ('select-arrow-active');
      });
    }
  }

  /* A function that will close all select boxes in the document, except the current select box: */
  function closeAllSelect (elmnt) {
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName ('select-items');
    y = document.getElementsByClassName ('select-selected');
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push (i);
      } else {
        y[i].classList.remove ('select-arrow-active');
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf (i)) {
        x[i].classList.add ('display-none');
      }
    }
  }

  /* If the user clicks anywhere outside the select box, then close all select boxes: */
  document.addEventListener ('click', closeAllSelect);

  return {init};
}) ();

window.CustomSelect = CustomSelect;

CustomSelect.init ('.custom-select:not(.custom-select-false)');
