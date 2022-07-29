// STAAR JS //

// Header Sticky on Scroll //
window.onload = (function () {

    window.addEventListener("scroll", () => {
        let header = document.querySelector('.fixed-header');
        header.classList.toggle('header--sticky', window.scrollY > 100);
    }, { passive: true })
});

// Open Menu on hamburger click //

if ('ontouchstart' in window) { var click = 'touchstart'; }
else { var click = 'click'; }


$('div.burger').on(click, function () {
    if (!$(this).hasClass('open')) { openMenu(); }
    else { closeMenu(); }
});

// Mobile Menu Scroll To Anchor //

let topOffset;

$(window).scroll(function() {
    if($(this).scrollTop() < 1 ) {
        topOffset = 100;
    } else {
        topOffset = 100;
    }
})

$('div.menu ol li a').on(click, function (e) {
    closeMenu();
    e.preventDefault();
    setTimeout(() => {
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 175)

    let target = $(this.getAttribute('href'));
    if(target.length) {
        $('html, body').animate({
            scrollTop: target.offset().top - topOffset
        }, 250);
    }
});


// Open Mobile Menu //

function openMenu() {

    $('div.menu-bg').addClass('animate');
    $('div.burger').addClass('open');
    $('div.x, div.z').addClass('collapse');
    $('.menu li').addClass('animate');
    $('.menu-splitL').addClass('opacity');
    $('body').addClass('overflow');

    $('div.menu').addClass('max_index');
    $('div.menu-bg').addClass('max_index');

    setTimeout(function () {
        $('div.y').hide();
        $('div.x').addClass('rotate30');
        $('div.z').addClass('rotate150');
    }, 70);
    setTimeout(function () {
        $('div.x').addClass('rotate45');
        $('div.z').addClass('rotate135');
    }, 120);
}

// Close Mobile Menu //

function closeMenu() {

    $('.menu li').removeClass('animate');
    setTimeout(function () {
        $('div.burger').removeClass('open');
        $('div.x').removeClass('rotate45').addClass('rotate30');
        $('div.z').removeClass('rotate135').addClass('rotate150');
        $('div.menu-bg').removeClass('animate');
        $('body').removeClass('overflow');
        $('div.menu').removeClass('max_index');
        $('div.menu-bg').removeClass('max_index');
        $('.menu-splitL').removeClass('opacity');

        setTimeout(function () {
            $('div.x').removeClass('rotate30');
            $('div.z').removeClass('rotate150');
        }, 50);
        setTimeout(function () {
            $('div.y').show();
            $('div.x, div.z').removeClass('collapse');
        }, 70);
    }, 100);
}

function CryptoAddressfunction() {
    /* Get the text field */
    var copyText = document.getElementById("CryptoAddress");


    /* Select the text field */
    copyText.select();

    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    //  navigator.clipboard.writeText(copyText.value);

    navigator.clipboard.writeText(copyText.value)
        .then(() => {
            // Success!
            alert("Copied the text: " + copyText.value);
        })
        .catch(err => {
            console.log('Something went wrong', err);
        });

    /* Alert the copied text */

}