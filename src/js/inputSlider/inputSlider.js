import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

const slider = document.getElementById('slider-price');

if (slider) {

    const minInput = document.querySelector('.price__field--min');
    const maxInput = document.querySelector('.price__field--max');

    noUiSlider.create(slider, {
        start: [100, 5000],

        connect: true,

        step: 100,

        range: {
            min: 0,
            max: 10000
        }
    });

    slider.noUiSlider.on('update', (values) => {

        minInput.value = Math.round(values[0]);
        maxInput.value = Math.round(values[1]);

    });

}