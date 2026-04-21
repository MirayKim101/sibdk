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