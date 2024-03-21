/* QUICK NAV */
(function () {
  const sections = document.querySelectorAll(".quicknav__section, #route, #feedback");
  const links = document.querySelectorAll(".quicknav__tags-group--tag-link");
  const setActiveLink = (id) => {
    links.forEach((link) => {
      if (link.getAttribute("href") === `#${id}`) {
        link.classList.add("tags-group__link--active");
      } else {
        link.classList.remove("tags-group__link--active");
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