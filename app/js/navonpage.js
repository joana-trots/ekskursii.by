window.onscroll = function() {
  const qsection = document.getElementById('qsection'),
        qnavbar = document.getElementById('qnavbar');
  if ((window.scrollY - qsection.offsetTop) > 0) {
    qnavbar.classList.add('onscroll');
  } else {
    qnavbar.classList.remove('onscroll');
  }
}