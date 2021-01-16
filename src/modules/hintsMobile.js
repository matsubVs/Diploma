import animation from './animation';

const hintsMobile = () => {
    const over = (event, className) => {
        console.log(event.target);
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

    const formula = document.querySelector('.formula-slider');

    const formulaItems = formula.querySelectorAll('.formula-item ');
    formulaItems.forEach(item => {
        item.addEventListener('mouseenter', event => {
            over(event, '.formula-item');
            console.log('here');
        });
        item.addEventListener('mouseleave', event => out(event, '.formula-item'));
    });

};

export default hintsMobile;
