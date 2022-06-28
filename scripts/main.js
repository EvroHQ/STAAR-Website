document.querySelector('.toggler').addEventListener('click', function () { document.querySelector('body').classList.toggle('no-scroll') });

// Fixed Header on scroll down
let new_scroll_position = 0;
let last_scroll_position;
let header = document.getElementById("header");
let hamburger = document.getElementById("hamburger");

window.addEventListener('scroll', function (e) {
    last_scroll_position = window.scrollY;
    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 120) {
        // header.removeClass('slideDown').addClass('slideUp');
        header.classList.remove("slideDown");
        hamburger.classList.remove("slideDown");
        header.classList.add("slideUp");
        hamburger.classList.add("slideUp");
        header.classList.add("scrolled");
        hamburger.classList.add("scrolled");

        // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
        // header.removeClass('slideUp').addClass('slideDown');
        header.classList.remove("slideUp");
        hamburger.classList.remove("slideUp");
        header.classList.add("slideDown");
        hamburger.classList.add("slideDown");
        header.classList.add("scrolled");
        hamburger.classList.add("scrolled");


    }
    new_scroll_position = last_scroll_position;
});

window.addEventListener('scrool', function(e) {
    if (window.scrollY > 0) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
})