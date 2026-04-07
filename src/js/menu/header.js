document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    if (!header) return;


    const body = {
        lock() {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.paddingRight = scrollBarWidth + 'px';
            document.body.style.overflow = 'hidden';
            document.body.style.boxShadow = 'none';
            document.body.style.backgroundColor = '#FDFDFF';
        },
        unlock() {
            document.body.style.paddingRight = '';
            document.body.style.overflow = '';
        }
    };

    const menus = [
        {
            trigger: '.content__top-catalog',
            target: '.catalog__nav',
            extra: ['.content__top-catalog']
        },
        {
            trigger: '.item__menu',
            target: '.header__mobile-menu',
            extra: ['.mobile__navigation']
        }
    ];

    menus.forEach(({trigger, target, extra}) => {
        const btn = header.querySelector(trigger);
        const menu = header.querySelector(target);
        const extraEls = extra.map(sel => header.querySelector(sel));

        if (!btn || !menu) return;

        btn.addEventListener('click', () => {
            const isActive = menu.classList.toggle('active');

            header.classList.toggle('active', isActive);

            extraEls.forEach(el => el?.classList.toggle('active', isActive));

            isActive ? body.lock() : body.unlock();
        });
    });


    const mobileCatalog = header.querySelector('.header__mobile-catalog');
    const openCatalogBtn = header.querySelector('.header__mobile-menu .catalog__button');
    const closeCatalogBtn = mobileCatalog?.querySelector('.catalog__close');

    if (mobileCatalog && openCatalogBtn) {
        openCatalogBtn.addEventListener('click', () => {
            mobileCatalog.classList.add('active');
            body.lock();
        });

        closeCatalogBtn?.addEventListener('click', () => {
            mobileCatalog.classList.remove('active');
            body.unlock();
        });
    }


    const mobileCategories = header.querySelector('.header__mobile-categories');
    const categoriesLinks = header.querySelectorAll('.header__mobile-catalog .content__menu-nav a');
    const closeCategoriesBtn = mobileCategories?.querySelector('.categories__close');

    if (mobileCategories && categoriesLinks.length) {
        categoriesLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                mobileCategories.classList.add('active');
                body.lock();
            });
        });

        closeCategoriesBtn?.addEventListener('click', () => {
            mobileCategories.classList.remove('active');
            body.unlock();
        });
    }

});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector(".header");
    if (!header) return

    const contexts = header.querySelectorAll('.item__context')

    contexts.forEach((context) => {
        const button = context.querySelector('.item__button')

        button.addEventListener('click', (e) => {
            e.stopPropagation()

            contexts.forEach((item) => {
                if (item !== context) {
                    item.classList.remove('active')
                }
            })

            context.classList.toggle('active')
        })
    })

    document.addEventListener('click', () => {
        contexts.forEach((context) => {
            context.classList.remove('active')
        })
    })
})


