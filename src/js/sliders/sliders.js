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
    const hitsSliderEl = document.querySelector('.hits__slider');
    if (!hitsSliderEl) return;

    let hitsSwiper = null;

    const initHitsSlider = () => {
        const isMobile = window.innerWidth < 576;

        if (isMobile) {
            if (hitsSwiper) {
                hitsSwiper.destroy(true, true);
                hitsSwiper = null;
            }
            return;
        }

        if (!hitsSwiper) {
            hitsSwiper = new Swiper(hitsSliderEl, {
                modules: [Navigation, Pagination],
                slidesPerView: 5,
                spaceBetween: 20,
                watchOverflow: true,
                navigation: {
                    prevEl: '.slider__button-prev',
                    nextEl: '.slider__button-next',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 'auto',
                        enabled: false,
                    },

                    577: {
                        slidesPerView: 2,
                        enabled: true,
                    },

                    780: {
                        slidesPerView: 3,
                    },

                    1024: {
                        slidesPerView: 4,
                    },

                    1400: {
                        slidesPerView: 5,
                    }
                }
            });
        }
    };

    initHitsSlider();

    window.addEventListener('resize', initHitsSlider);
});

document.addEventListener('DOMContentLoaded', () => {
    const hitsInnerSliders = document.querySelectorAll('.image__slider .swiper');
    if (hitsInnerSliders.length === 0) return;

    hitsInnerSliders.forEach((slider)=> {
        new Swiper(slider, {
            modules: [Pagination],
            slidesPerView: 1,
            spaceBetween: 5,
            nested: true,
            pagination: {
                el: slider.closest('.product__card-content .image__wrapper').querySelector('.image__pagination'),
                clickable: true,
            },
        })
    })
});