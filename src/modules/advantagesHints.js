import animation from './animation';

const advantagesHints = () => {
    const advantagesWrapper = document.querySelector('.formula');
    const allHints = advantagesWrapper.querySelectorAll('.formula-item-popup');

    advantagesWrapper.addEventListener('mouseover', event => {
        const target = event.target;
        if (target.closest('.formula-item__icon')) {
            const mainItem = target.closest('.formula-item__icon'),
                fillItem = mainItem.querySelector('.formula-item__icon-inner'),
                innerText = mainItem.querySelector('.formula-item__icon-inner-text'),
                itemPopup = mainItem.querySelector('.formula-item-popup'),
                itemStyle = document.head.querySelector(`#${itemPopup.classList[1]}`),
                distance = itemPopup.getBoundingClientRect();

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
                
                console.log(itemPopup.classList[1]);
                itemPopup.style.transform = 'translateY(165%)';
                itemPopup.style.paddingTop = '35px';
            }
            itemPopup.style.visibility = 'visible';
            innerText.style.color = 'white';
            fillItem.style.opacity = 1;

            animation({
                duration: 400,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    itemPopup.style.opacity = progress;
                }
            });
        }
    });

    advantagesWrapper.addEventListener('mouseout', event => {
        const target = event.target;
        if (target.closest('.formula-item__icon')) {
            const mainItem = target.closest('.formula-item__icon'),
                fillItem = mainItem.querySelector('.formula-item__icon-inner'),
                innerText = mainItem.querySelector('.formula-item__icon-inner-text'),
                itemPopup = mainItem.querySelector('.formula-item-popup'),
                itemStyle = document.head.querySelector(`#${itemPopup.classList[1]}`);
            
            innerText.style.color = 'black';
            fillItem.style.opacity = 0;

            if (itemStyle) {
                setTimeout(() => {
                    itemStyle.textContent = '';
                    itemPopup.style.transform = '';
                }, 500);
            }

            animation({
                duration: 200,
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
            }, 500);
        }
    });
};

export default advantagesHints;
