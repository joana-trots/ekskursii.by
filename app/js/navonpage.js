window.onscroll = onPageNav;

function onPageNav() {
    var removeActiveClass = function (elements) {
        for (var i = 0; i < elements.length; ++i) {
            elements[i].classList.remove('active');
        }
    }

    var anchors = document.querySelectorAll('.about__nav a');
    var previousRefElement = null;
    for (var i = 0; i < anchors.length; ++i) {
        // Get the current element by the id from the anchor's href.
        var currentRefElement = document.getElementById(anchors[i].getAttribute('href').substring(1));
        var currentRefElementTop = currentRefElement.getBoundingClientRect().top;
        // Searching for the element whose top haven't left the top of the browser.
        if (currentRefElementTop <= 1) {
            //The browser's top line haven't reached the current element, 
            //so the previous element is the one we currently look at.
            previousRefElement = anchors[i];
            // Edge case for last element.
            if (i == anchors.length - 1) {
                removeActiveClass(anchors);
                anchors[i].classList.add("active");
                currentRefElementTop.scrollIntoView(align)
            }
        } else {
            removeActiveClass(anchors);
            previousRefElement.classList.add("active");
            break;
        }
    }
}