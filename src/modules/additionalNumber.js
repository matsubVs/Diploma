import animation from './animation';

const additionalNumber = () => {
    const numberVisibleButton = document.querySelector('.header-contacts__arrow');
    const additionalNumberBlock = document.querySelector('.header-contacts__phone-number-accord');
    const newNumber = [...additionalNumberBlock.children][0];

    additionalNumberBlock.style.top = '0px';
    
    numberVisibleButton.addEventListener('click', () => {
        console.log(additionalNumberBlock.style.top);
        if (additionalNumberBlock.style.top === '0px') {
            animation({
                duration: 100,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    additionalNumberBlock.style.top = progress * 20 + 'px';
                }
            });
            newNumber.style.opacity = 1;

        } else {
            animation({
                duration: 100,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    additionalNumberBlock.style.top = 20 - (progress * 20) + 'px';
                }
            });

            newNumber.style.opacity = 0;
        }
    });
};

export default additionalNumber;
