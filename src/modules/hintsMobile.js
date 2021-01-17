import animation from './animation';

const hintsMobile = () => {
    const formula = document.querySelector('.formula');
    const formulaSlider = document.querySelector('.formula-slider');
    const formulaItems = [...formulaSlider.children];

    const init = (slider, items) => {
        slider.style.display = 'flex';
        slider.style.position = 'relative';
        slider.style.margin = '0 auto';
        items.forEach((item, index) => {
            if (index > 2) {
                item.style.display = 'none';
            }
            if (index === 1) {
                item.classList.add('active-item');
            }
        });
    };

    const nextItem = items => {
        const currentItem = formulaItems.filter(item => item.classList.contains('active-item'));
        const currentIndex = formulaItems.indexOf(currentItem[0]);
        if (currentIndex + 2 === formulaItems.length) {
            items[currentIndex + 1].style.display = 'none';
            items[currentIndex].classList.remove('active-item');
            items[currentIndex].style.display = 'none';
            items[currentIndex - 1].style.display = 'none';

            items[0].style.display = 'flex';
            items[1].style.display = 'flex';
            items[1].classList.add('active-item');
            items[2].style.display = 'flex';
        } else {
            items[currentIndex].classList.remove('active-item');
            items[currentIndex - 1].style.display = 'none';
            items[currentIndex + 2].style.display = 'flex';
            items[currentIndex + 1].classList.add('active-item');
        }
    };

    const prevItem = items => {
        const currentItem = items.filter(item => item.classList.contains('active-item'));
        const currentIndex = items.indexOf(currentItem[0]);
        if (currentIndex === 1) {
            items[currentIndex].classList.remove('active-item');
            items[currentIndex].style.display = 'none';
            items[currentIndex - 1].style.display = 'none';
            items[currentIndex + 1].style.display = 'none';

            items[formulaItems.length - 1].style.display = 'flex';
            items[formulaItems.length - 2].style.display = 'flex';
            items[formulaItems.length - 2].classList.add('active-item');
            items[formulaItems.length - 3].style.display = 'flex';
        } else {
            items[currentIndex].classList.remove('active-item');
            items[currentIndex + 1].style.display = 'none';
            items[currentIndex - 1].style.display = 'flex';
            items[currentIndex - 1].classList.add('active-item');
            items[currentIndex - 2].style.display = 'flex';
        }
    };

    const sliderHandler = event => {
        const target = event.target;

        if (target.closest('#formula-arrow_right')) {
            nextItem(formulaItems);
        } else if (target.closest('#formula-arrow_left')) {
            prevItem(formulaItems);
        }   
    };
    
    init(formulaSlider, formulaItems);
    formula.addEventListener('click', event => sliderHandler(event));

    const over = (event, className) => {
        const popup = event.target.querySelector(`${className}-popup`);
        const item = event.target.closest(className);
        popup.style.visibility = 'visible';
        if (event.target.closest('.formula-item-popup ')) {
            return;
        }

        if (className === '.problems-item') item.classList.add('active-item');
        animation({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                item.style.opacity = progress;
            }
        });
        animation({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                popup.style.opacity = progress;
            }
        });
    };

    const out = (event, className) => {
        const popup = event.target.querySelector(`${className}-popup`);
        const item = event.target.closest(className);
        if (event.target.closest('.formula-item-popup ')) {
            return;
        }

        if (className === '.problems-item') item.classList.remove('active-item');
        animation({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                item.style.opacity = 1 - progress + 0.4;
            }
        });
        animation({
            duration: 300,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                popup.style.opacity = 1 - progress;
            }
        });
        setTimeout(() => popup.style.visibility = 'hidden', 350);
    };

    const problemsItems = document.querySelectorAll('.problems-item__icon');
    problemsItems.forEach(item => {
        item.addEventListener('mouseenter', event => over(event, '.problems-item'));
        item.addEventListener('mouseleave', event => out(event, '.problems-item'));
    });

};

export default hintsMobile;
