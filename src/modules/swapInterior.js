const swapInterior = () => {
    const designsWrapper = document.querySelector('.designs');
    
    const swap = interior => {
        const sliderWrapper = document.querySelector('.designs-slider');
        const blockWrapper = interior.closest('.preview-block');
        let visibleBlock;
        [...sliderWrapper.children].forEach(item => {
            if (item.style.display === 'block') {
                visibleBlock = [...item.children];
                console.log(visibleBlock);
            }
        });

        [...blockWrapper.children].forEach((item, index) => {
            if (item === interior) {
                visibleBlock[index].classList.add('slider-active');
                visibleBlock[index].classList.remove('slider-disabled');
                [...item.children][0].classList.add('preview_active');
            } else {
                visibleBlock[index].classList.add('slider-disabled');
                visibleBlock[index].classList.remove('slider-active');
                [...item.children][0].classList.remove('preview_active');
            }
        });
    };

    designsWrapper.addEventListener('click', event => {
        const target = event.target;

        if (target.closest('.preview-block__item')) {
            swap(target.closest('.preview-block__item'));
        }
    });
};

export default swapInterior;
