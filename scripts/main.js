// STAAR JS //

// Mobile Menu Disable Scroll //
document.querySelector('.toggler').addEventListener('click', function () { document.querySelector('body').classList.toggle('no-scroll') });


// Smooth Scrolling //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});