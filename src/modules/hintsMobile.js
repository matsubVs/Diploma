import animation from './animation';

const hintsMobile = () => {
    const activeFormulaPopup = (event, item) => {
        const target = event.target;
        const itemParentClass = item.split('-')[0];
        if (target.closest(`${itemParentClass}-item, ${itemParentClass}-item__icon`)) {
            let item;
            if (!target.closest(`${itemParentClass}-item__icon`)) {
                item = target.closest(`${itemParentClass}-item`);
            } else {
                item = target.closest(`${itemParentClass}-item__icon`);
            }
            const popup = item.querySelector(`${itemParentClass}-item-popup`);
            const type = event.type;

            if (type === 'mouseover') {
                popup.style.visibility = 'visible';
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
            } else {
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
            }
        }
    };

    const hintsMobile = ['.formula-slider', '.problems-slider'];
    hintsMobile.forEach(item => {
        const slider = document.querySelector(item);
        slider.addEventListener('mouseover', event => activeFormulaPopup(event, item));
        slider.addEventListener('mouseout', event => activeFormulaPopup(event, item));
    
    });

};

export default hintsMobile;
