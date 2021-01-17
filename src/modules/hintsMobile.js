// import animation from './animation';

const hintsMobile = () => {

    const formula = document.querySelector('.formula');
    const formulaSlider = document.querySelector('.formula-slider');
    const formulaItems = [...formulaSlider.children];

    formulaSlider.style.display = 'flex';
    formulaSlider.style.margin = '0 auto';
    formulaItems.forEach((item, index) => {
        if (index > 2) {
            item.style.display = 'none';
        }
        if (index === 1) {
            item.classList.add('active-item');
        }
    });

    const nextItem = () => {
        const currentItem = formulaItems.filter(item => item.classList.contains('active-item'));
        const currentIndex = formulaItems.indexOf(currentItem[0]);
        currentItem[0].classList.remove('active-item');

        formulaItems.forEach((item, index) => {
            if (index === currentIndex - 1) {
                console.log(item);
            }
        });
    };

    const prevItem = () => {
        const currentItem = formulaItems.filter(item => item.classList.contains('active-item'));
        console.log(currentItem);
    };

    const sliderHandler = event => {
        const target = event.target;

        if (target.closest('#formula-arrow_right')) {
            nextItem();
        } else if (target.closest('#formula-arrow_left')) {
            prevItem();
        } else if (target.closest('.formula-item')) {
            console.log('here');
        }
    };
    
    formula.addEventListener('click', event => sliderHandler(event));
};

export default hintsMobile;
