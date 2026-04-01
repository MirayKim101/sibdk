document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer')
    if (!footer) return

    const contexts = footer.querySelectorAll('.item__context')

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