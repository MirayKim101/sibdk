import Swiper from 'swiper';
import {Navigation, Pagination, Thumbs} from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
    const bannerSlider = document.querySelector('.banner__slider .swiper');
    if (!bannerSlider) return;

    new Swiper(bannerSlider, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        watchOverflow: true,
        spaceBetween: 5,
        navigation: {
            nextEl: '.banner__slider-next',
            prevEl: '.banner__slider-prev',
        },
        pagination: {
            el: '.banner__slider-pagination',
            clickable: true,
        },

    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hitsSlider = document.querySelector('.hits .hits__content-slider .swiper');
    if (!hitsSlider) return;

    new Swiper(hitsSlider, {
        modules: [Navigation, Pagination],
        slidesPerView: 5,
        watchOverflow: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.hits__content-next',
            prevEl: '.hits__content-prev',
        },



    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hitsInnerSliders = document.querySelectorAll('.hits__card .top__slider .swiper');
    if (hitsInnerSliders.length === 0) return;

    hitsInnerSliders.forEach((slider)=> {
        new Swiper(slider, {
            modules: [Pagination],
            slidesPerView: 1,
            spaceBetween: 5,
            nested: true,
            pagination: {
                el: slider.closest('.top').querySelector('.top__slider-pagination'),
                clickable: true,
            },
        })
    })
});