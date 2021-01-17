import animation from './animation';

const hintsDesktop = () => {
    const mouseoverHints =  (event, className) => {
        if (document.documentElement.clientWidth <= 1024) {
            return;
        }
        console.log(document.documentElement.clientWidth);


        const target = event.target;
        const mainItem = target.closest(`${className}__icon`),
            fillItem = mainItem.querySelector(`${className}__icon-inner`),
            innerText = mainItem.querySelector(`${className}__icon-inner-text`),
            itemPopup = mainItem.querySelector(`${className}-popup`),
            itemStyle = document.head.querySelector(`#${itemPopup.classList[1]}`),
            distance = itemPopup.getBoundingClientRect(),
            rowBlock = mainItem.closest('.row');

        if (distance.top < 0) {
            if (itemStyle && itemStyle.textContent !== 0) {
                itemStyle.textContent = `
                .${itemPopup.classList[1]}::before {
                    transform: rotate(180deg);
                }
                `;
            } else {
                const style = document.createElement('style');
                style.id = itemPopup.classList[1];
                style.textContent = `
                    .${itemPopup.classList[1]}::before {
                        transform: rotate(180deg);
                    }
                `;
                document.head.appendChild(style);
            }
            
            if (className !== '.problems-item') {
                itemPopup.style.transform = 'translateY(165%)';
            } else {
                itemPopup.style.transform = 'translateY(130%)';
            }
            itemPopup.style.paddingTop = '35px';
            rowBlock.style.zIndex = 1;
        }
        itemPopup.style.visibility = 'visible';
        if (className !== '.problems-item') {
            innerText.style.color = 'white';
        }
        fillItem.style.opacity = 1;

        animation({
            duration: 100,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                itemPopup.style.opacity = progress;
            }
        });
    };

    const mouseoutHints = (event, className) => {
        if (document.documentElement.clientWidth <= 1024) {
            return;
        }

        console.log(document.documentElement.clientWidth);
        const target = event.target;
        const mainItem = target.closest(`${className}__icon`),
            fillItem = mainItem.querySelector(`${className}__icon-inner`),
            innerText = mainItem.querySelector(`${className}__icon-inner-text`),
            itemPopup = mainItem.querySelector(`${className}-popup`),
            itemStyle = document.head.querySelector(`#${itemPopup.classList[1]}`),
            rowBlock = mainItem.closest('.row');

        if (className !== '.problems-item') {
            innerText.style.color = 'black';
        }
        fillItem.style.opacity = 0;

        if (itemStyle) {
            setTimeout(() => {
                itemStyle.textContent = '';
                itemPopup.style.transform = '';
            }, 200);
        }

        animation({
            duration: 100,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                itemPopup.style.opacity = 1 - progress;
            }
        });

        setTimeout(() => {
            itemPopup.style.paddingTop = '';
            itemPopup.style.visibility = 'hidden';
            rowBlock.style.zIndex = 0;
        }, 200);
    };

    const problemsItems = document.querySelectorAll('.problems-item__icon');
    problemsItems.forEach(item => {
        item.addEventListener('mouseenter', event => mouseoverHints(event, '.problems-item'));
        item.addEventListener('mouseleave', event => mouseoutHints(event, '.problems-item'));
    });

    const formulaItems = document.querySelectorAll('.formula-item__icon');
    formulaItems.forEach(item => {
        item.addEventListener('mouseenter', event => mouseoverHints(event, '.formula-item'));
        item.addEventListener('mouseleave', event => mouseoutHints(event, '.formula-item'));
    });

};

export default hintsDesktop;
