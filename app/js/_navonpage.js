// Подсветка
    // ---------------------------------------------------------------------------------------
    (function () {
        const sections = document.querySelectorAll(".quicknav__section, #route, #feedback");
        const links = document.querySelectorAll(".quicknav__tags-group .quicknav__tags-group--tag-link");
        const setActiveLink = (id) => {
            links.forEach((link) => {
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("tags-group__link--active");
                } else {
                    link.classList.remove("tags-group__link--active");
                }
            });
        };
        let activeTag = null;
        let lastScroll = 0;
        document.addEventListener('scroll', (event) => {
            if(window.scrollY > lastScroll){
                sections.forEach((section) => {
                    if (
                        section.getBoundingClientRect().top - 50 < 200
                        && section.getBoundingClientRect().top + 50 > 200
                        && activeTag !== section.getAttribute("id")
                    ) {
                        activeTag = section.getAttribute("id");
                        setActiveLink(section.getAttribute("id"));
                    }
                });
            }else{
                sections.forEach((section) => {
                    if (
                        section.getBoundingClientRect().bottom - 50 < window.innerHeight - 200
                        && section.getBoundingClientRect().bottom + 50 > window.innerHeight - 200
                        && activeTag !== section.getAttribute("id")
                    ) {
                        activeTag = section.getAttribute("id");
                        setActiveLink(section.getAttribute("id"));
                    }
                });
            }
            lastScroll = window.scrollY;
        });
    })();

    // Плавная прокрутка
    // ---------------------------------------------------------------------------------------
    document.querySelectorAll('.quicknav__tags-group a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = 200;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });