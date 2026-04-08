document.addEventListener('DOMContentLoaded', () => {
    const containerList = document.querySelector('.accordions__list');

    if (!containerList) return

    const items = containerList.querySelectorAll('.accordions__list-item');

    if (items.length) {
        items[0].classList.add('active');
    }

    items.forEach(item => {
        const button = item.querySelector('.header');

        button.addEventListener('click', () => {
            const isActive = item.classList.contains('active');


            items.forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});