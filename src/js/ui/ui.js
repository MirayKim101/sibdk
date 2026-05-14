document.addEventListener('DOMContentLoaded', () => {
    const cookie = document.querySelector('.cookie');
    if (!cookie) return;

    const cookieName = 'cookie_consent'


    const hasCookie = document.cookie.includes(`${cookieName}=true`)

    if (!hasCookie) {
        cookie.classList.add('cookie__visible')
    }

    const cookieApply = cookie.querySelector('.cookie__apply')

    if (!cookieApply) return;

    cookieApply.addEventListener('click', () => {

        cookie.classList.remove('cookie__visible')

        document.cookie = `${cookieName}=true; max-age=2592000; path=/`
    })

});


document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.reviews');

    if (!section) return;

    const cards = section.querySelectorAll('.reviews__card');

    cards.forEach(card => {
        const sectionContent = card.querySelector('.text__wrapper');
        const sectionButton = card.querySelector('.more');
        const buttonText = sectionButton.querySelector('span');

        sectionButton.addEventListener('click', () => {
            sectionContent.classList.toggle('active');

            if (sectionContent.classList.contains('active')) {
                buttonText.textContent = 'Скрыть';
            } else {
                buttonText.textContent = 'Подробнее';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.product__caption');
    if (!section) return;

    const blocks = section.querySelectorAll('.text__wrapper');

    blocks.forEach((block) => {
        const text = block.querySelector('.text');
        const button = block.querySelector('button');
        const buttonText = button.querySelector('span');

        button.addEventListener('click', () => {
            const isOpen = text.classList.contains('active');

            if (isOpen) {
                text.style.maxHeight = text.scrollHeight + 'px';

                requestAnimationFrame(() => {
                    text.style.maxHeight = '200px';
                });

                text.classList.remove('active');
                buttonText.textContent = 'Подробное описание';
            } else {
                text.style.maxHeight = text.scrollHeight + 'px';
                text.classList.add('active');
                buttonText.textContent = 'Скрыть описание';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.product__mobile-cart');

    if (!modal) return;

    const openModalButton = document.querySelector('.product__details .price__button');
    const closeModalButton = modal.querySelector('.modal .top .top__title button');

    openModalButton.addEventListener('click', () => {

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    })

    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    })

})


document.addEventListener('DOMContentLoaded', () => {
    const filterCategories = document.querySelector('.catalog__category .filters .filters__categories');
    if (!filterCategories) return;

    const mainItems = filterCategories.querySelectorAll('.main__categories');

    mainItems.forEach(item => {
        const link = item.querySelector('a');

        link.addEventListener('click', (e) => {
            e.preventDefault(); // для теста на верстке

            mainItems.forEach(el => el.classList.remove('active'));

            item.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.catalog__category');

    if (!section) return;

    const btn = section.querySelector('.popular__btn');
    const container = section.querySelector('.popular__content');

    btn.addEventListener('click', () => {
        container.classList.toggle('active');
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.catalog__mobile');

    if (!section) return;

    const btn = section.querySelector('.sort__btn');
    const container = section.querySelector('.sort__list');

    btn.addEventListener('click', () => {
        container.classList.toggle('active');
        btn.classList.toggle('active');
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.catalog__mobile');

    if (!section) return;

    const btnList = section.querySelectorAll(
        '.mobile__cards .product__card .control .cart'
    );

    const modal = document.querySelector('.cart__mobile');
    const closeBtn = modal.querySelector('.close');

    if (!modal || !closeBtn) return;

    btnList.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('active');

            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');

        document.body.style.overflow = '';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.catalog__mobile');

    if (!section) return;

    const btn = section.querySelector('.mobile__filters-btn');
    const container = section.querySelector('.mobile__filters-attributes');
    const close = section.querySelector('.attributes__heading .close');
    btn.addEventListener('click', () => {
        container.classList.toggle('active');
        btn.classList.add('active');
    })

    close.addEventListener('click', () => {
        container.classList.remove('active');
    })
})
