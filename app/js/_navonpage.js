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
  const observer = new IntersectionObserver(function (entries) {
      entries.toReversed().forEach((entry) => {
          const heightMiddle = window.innerHeight / 2;
          if (
              entries[0].target.getBoundingClientRect().top - 50 < heightMiddle
              && entries[0].target.getBoundingClientRect().top + 50 > heightMiddle
          ) {
              setActiveLink(entry.target.getAttribute("id"));
          }
      });
  }, {
      root: null,
      threshold: 0,
      rootMargin: '50% 0px -50% 0px'
  });

  sections.forEach((section) => {
      observer.observe(section);
  });
})();

document.querySelectorAll('.quicknav__tags-group--tag-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: "center"
      });
  });
});