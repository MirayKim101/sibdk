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

document.addEventListener('DOMContentLoaded', () => {

    const containerList = document.querySelector('.attributes__inner');

    if (!containerList) return;

    const items = containerList.querySelectorAll('.attributes__group');

    items.forEach(item => {

        const button = item.querySelector('.attributes__header');

        button.addEventListener('click', () => {

            item.classList.toggle('active');

        });

    });

});
document.addEventListener('DOMContentLoaded', () => {
  const moreButtons = document.querySelectorAll('.attributes__more');

    moreButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const group = btn.closest('.attributes__group');

            group.classList.toggle('show-all');
        })
    })
});

