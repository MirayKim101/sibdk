document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.mobile__wrapper');
    if (!wrapper) return;

    const tabs = wrapper.querySelectorAll('.tab');
    const contents = wrapper.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {

            const target = tab.dataset.tab;

            tabs.forEach(t => t.classList.remove('active'));

            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');

            const activeContent = wrapper.querySelector(`.content[data-tab="${target}"]`);

            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
});