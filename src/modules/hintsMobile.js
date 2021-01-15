import animation from './animation';

const hintsMobile = () => {
    const activeFormulaPopup = (event, item) => {
        const target = event.target;
        const itemParentClass = item.split('-')[0];
        if (target.closest(`${itemParentClass}-item`)) {
            let item;
            if (target.closest(`${itemParentClass}-item__icon`)) {
                item = target.closest(`${itemParentClass}-item__icon`);
            } else {
                item = target.closest(`${itemParentClass}-item`);
            }
            const popup = item.querySelector(`${itemParentClass}-item-popup`);
            const type = event.type;

            if (type === 'mouseenter') {
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
            } else if (type === 'mouseleave') {
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
        slider.addEventListener('mouseenter', event => activeFormulaPopup(event, item));
        slider.addEventListener('mouseleave', event => activeFormulaPopup(event, item));
    
    });

};

export default hintsMobile;
