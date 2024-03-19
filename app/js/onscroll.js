let stickyBtn = document.querySelector('.sticky-btn'),
    parentSection = stickyBtn.closest(".section");
var qsection = document.getElementById('qsection'),
    qnavbar = document.getElementById('qnavbar');

window.addEventListener('scroll', () => {
      window.scrollY - parentSection.offsetTop > 100
      ? stickyBtn.classList.remove('display-none') 
      : stickyBtn.classList.add('display-none');

      if (qsection && qnavbar) {
      window.scrollY - qsection.offsetTop > 0
      ? qnavbar.classList.add('onscroll') 
      : qnavbar.classList.remove('onscroll');
      }
});