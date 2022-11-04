
var testimContent = Array.prototype.slice.call(
        document.getElementById('banner__container').children
    ),
    testimSpeed = 8000,
    currentSlide = 0,
    currentActive = 0,
    testimTimer;
// coding with nick
window.onload = function () {
    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimContent.length; k++) {
            testimContent[k].classList.remove('active');
            testimContent[k].classList.remove('inactive');
        }
        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }
        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add('inactive');
        }
        testimContent[slide].classList.add('active');

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide((currentSlide += 1));
        }, testimSpeed);
    }

    playSlide(currentSlide);
};

//////// gérer les sous-menus du about

function chooseTab(headerToSelect, identifier) {
    const contentIdentifier = 'content-' + identifier;
    const newTabContent = $('[data-tab="' + contentIdentifier + '"]');

    const selectedHeader = $('.quisommenous__submenu--selected');
    const seclectedImage = $('.quisommenous__image--selected');
    const dataTab = selectedHeader.attr('data-tab');
    const dataImg = seclectedImage.attr('data-tab');
    const selectedContentIdentifier = 'content-' + dataTab;

    if (dataTab !== identifier) {
        selectedHeader.removeClass('quisommenous__submenu--selected');
        const selectedTabContent = $(
            '[data-tab^="' + selectedContentIdentifier + '"]'
        );

        selectedTabContent.addClass('hide');

        $(headerToSelect).addClass('quisommenous__submenu--selected');
        newTabContent.removeClass('hide');
    }

    if (dataImg !== identifier) {
        seclectedImage.removeClass('quisommenous__image--selected');
        const selectedImageContent = $('[data-tab^="' + 'image-' + identifier + '"]');

        selectedImageContent.addClass('quisommenous__image--selected');
    }
}

// ANIMATION AU CLICK SUR NOS PRODUITS

// var toggleClick = document.querySelector('.bg');
// var text_span = document.querySelector('.block-bg');
// toggleClick.addEventListener('click', () => {
//     toggleClick.classList.toggle('activeblock');
//     text_span.classList.toggle('block');
// });
