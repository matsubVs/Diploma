import animation from './animation';

const hintsDesktop = () => {
    const advantagesWrapper = document.querySelector('.formula');
    const problemsWrapper = document.querySelector('.problems');
    const wrappers = [advantagesWrapper, problemsWrapper];

    const mouseoverHints = (event, className) => {
        if (document.documentElement.clientWidth <= 1024) {
            return;
        }
        const target = event.target;
        if (target.closest(`.${className}-item__icon, .svg-wrap`)) {
            const mainItem = target.closest(`.${className}-item__icon`),
                fillItem = mainItem.querySelector(`.${className}-item__icon-inner`),
                innerText = mainItem.querySelector(`.${className}-item__icon-inner-text`),
                itemPopup = mainItem.querySelector(`.${className}-item-popup`),
                itemStyle = document.head.querySelector(`#${itemPopup.classList[1]}`),
                distance = itemPopup.getBoundingClientRect(),
                rowBlock = target.closest('.row');

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
                
                if (className !== 'problems') {
                    itemPopup.style.transform = 'translateY(165%)';
                } else {
                    itemPopup.style.transform = 'translateY(130%)';
                }
                itemPopup.style.paddingTop = '35px';
                rowBlock.style.zIndex = 1;
            }
            itemPopup.style.visibility = 'visible';
            if (className !== 'problems') {
                innerText.style.color = 'white';
            }
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
    };

    const mouseoutHints = (event, className) => {
        if (document.documentElement.clientWidth <= 1024) {
            return;
        }
        const target = event.target;
        if (target.closest(`.svg-wrap, .${className}-item__icon`)) {
            const mainItem = target.closest(`.${className}-item__icon`),
                fillItem = mainItem.querySelector(`.${className}-item__icon-inner`),
                innerText = mainItem.querySelector(`.${className}-item__icon-inner-text`),
                itemPopup = mainItem.querySelector(`.${className}-item-popup`),
                itemStyle = document.head.querySelector(`#${itemPopup.classList[1]}`),
                rowBlock = target.closest('.row');
            
            if (className !== 'problems') {
                innerText.style.color = 'black';
            }
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
                rowBlock.style.zIndex = 0;
            }, 500);
        }
    };

    for (const wrap of wrappers) {
        wrap.addEventListener('mouseover', event => mouseoverHints(event, wrap.classList[0]));
        wrap.addEventListener('mouseout', event => mouseoutHints(event, wrap.classList[0]));
    }
};

export default hintsDesktop;
