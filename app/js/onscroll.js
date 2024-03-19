let stickyBtn = document.querySelector('.sticky-btn'),
    qsection = document.getElementById('qsection'),
    qnavbar = document.getElementById('qnavbar');

window.addEventListener('scroll', () => {

      if (stickyBtn && parentSection) {
            let parentSection = stickyBtn.closest(".section");
            window.scrollY - parentSection.offsetTop > 100
            ? stickyBtn.classList.remove('display-none') 
            : stickyBtn.classList.add('display-none');
      }
      if (qsection && qnavbar) {
            window.scrollY - qsection.offsetTop > 0
            ? qnavbar.classList.add('onscroll') 
            : qnavbar.classList.remove('onscroll');
      }
});