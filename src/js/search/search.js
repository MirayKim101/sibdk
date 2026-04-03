document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.content__top-search');
    if (!searchForm) return


    let products = []

    const input = searchForm.querySelector('.search__wrapper input')
    const resultBlock = searchForm.querySelector('.search__result')
    const resultList = searchForm.querySelector('.result__list')
    const closeSearch = searchForm.querySelector('.reset__search')

    const debounce = (callback, delay = 300) => {
        let timeout;


        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => callback.apply(this, args), delay);
        }
    }

    const loadProducts = async () => {
        try {
            const response = await fetch('http://localhost:5173/src/js/search/products.json');

            if (!response.ok) {
                throw new Error('HTTP ошибка: ' + response.status);
            }

            products = await response.json();

        } catch (e) {
            console.error('Ошибка загрузки:', e);
        }
    };

    const renderResults = (items) => {
        resultList.innerHTML = ''

        if (!items.length) {
            resultList.innerHTML = 'Ничего не найдено'
            return
        }

        items.forEach(item => {
            const el = document.createElement('div')

            el.className = 'result__list-item'

            el.innerHTML = `
        <a href="#" class="item__overlay"></a>
        <div class="item__content">
          <div class="item__content-image">
            <img src="${item.image}" alt="">
          </div>
          <div class="item__content-info">
            <div class="title">${item.title}</div>
            <div class="price">
              <div class="price__wrapper">
                <span class="current">${item.price} ₽</span>
                ${item.oldPrice ? `<span class="old">${item.oldPrice} ₽</span>` : ''}
              </div>
                ${item.oldPrice ? `<div class="sale">-${item.sale}%</div>` : ''}        
              </div>
          </div>
        </div>
      `;

            resultList.appendChild(el)
        })
    }

    const search = (query) => {
        if (!products.length) return []

        const normalized = query.toLowerCase();


        return products.filter(item =>
            item.title.toLowerCase().includes(normalized)
        );
    }

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    closeSearch.addEventListener('click', (e) => {
        e.stopPropagation()

        resultList.innerHTML = ''
        resultBlock.classList.remove('active');
        closeSearch.classList.remove('active');


    })


    const handleSearch = debounce((value) => {
        if (!value.trim()) {
            resultBlock.classList.remove('active');
            return;
        }

        const results = search(value);

        renderResults(results);

        resultBlock.classList.add('active');
        closeSearch.classList.add('active');

    }, 300)

    input.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });

    loadProducts();


})