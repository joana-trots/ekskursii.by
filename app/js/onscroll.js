let stickyBtn = document.querySelector('.sticky-btn'),
    upBtn     = document.querySelector('.btn-up'),
    qsection  = document.getElementById('qsection'),
    qnavbar   = document.getElementById('qnavbar');

window.addEventListener('scroll', () => {
      if (stickyBtn) {
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

      upBtn && window.scrollY > 400
      ? upBtn.classList.add('visible')
      : upBtn.classList.remove('visible');
});