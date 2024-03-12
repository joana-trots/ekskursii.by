var qsection = document.getElementById('qsection'),
    qnavbar = document.getElementById('qnavbar');
if (qsection && qnavbar) {
  window.onscroll = function() {
    (window.scrollY - qsection.offsetTop) > 0 ? qnavbar.classList.add('onscroll') : qnavbar.classList.remove('onscroll');
  }
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