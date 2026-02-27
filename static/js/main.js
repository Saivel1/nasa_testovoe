$(document).ready(function () {

    if ($('.slider-main').length === 0) return;

    // =====================
    // Slick Slider Syncing
    // =====================
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        speed: 450,
        cssEase: 'ease-in-out',
        asNavFor: '.slider-nav',
        lazyLoad: 'ondemand',
    });

    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-main',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    });

    // Custom arrow buttons
    $('#slickPrev').on('click', function () {
        $('.slider-main').slick('slickPrev');
    });
    $('#slickNext').on('click', function () {
        $('.slider-main').slick('slickNext');
    });

    // =====================
    // GLightbox — fullscreen on click
    // =====================
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        openEffect: 'zoom',
        closeEffect: 'fade',
        slideEffect: 'slide',
        keyboardNavigation: true,
    });

    // Keep slick in sync when navigating in lightbox
    lightbox.on('slide_changed', ({ current }) => {
        $('.slider-main').slick('slickGoTo', current.index);
    });

});
