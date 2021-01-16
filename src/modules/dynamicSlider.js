const dynamicSlider = () => {
    const sliders = ['.repair-types', '.designs', '.scheme', '.popup-design', '.popup-portfolio', 
        '.popup-transparency', '.portfolio'];
    for (const elem of sliders) {
        const main = document.querySelector(`${elem}`);
        let mainSlider;
        if (elem === '.portfolio') {
            mainSlider = main.querySelector(`${elem}-slider-mobile`);
        } else {
            mainSlider = main.querySelector(`${elem}-slider`);
        }
        const navItems = [...main.querySelectorAll(`.button_o`)],
            mainSliderItems = [...mainSlider.children], // <--- slider which correlate with active tabs
            sliderItemImgs = [], // <--- imgs inside active slider
            sliderCurrent = main.querySelector('.slider-counter-content__current'),
            sliderTotal = main.querySelector('.slider-counter-content__total');
            
        if (sliderCurrent) {
            sliderCurrent.textContent = 1;
        }

        const dispalySlider = indexSlider => {
            let textBlocks;
            if (elem === '.popup-design') {
                textBlocks = [...main.querySelectorAll('.popup-design-text')];   
            }
            let previewBlocks;
            if (elem === '.designs') {
                previewBlocks = [...main.querySelectorAll('.preview-block')];   
            }
            let schemeBlocks;
            if (elem === '.scheme') {
                schemeBlocks = [...main.querySelectorAll('.scheme-description-block')];
            }
            let portfolioBlocks;
            if (elem === '.popup-portfolio') {
                portfolioBlocks = [...main.querySelectorAll('.popup-portfolio-text')];
            }

            mainSliderItems.forEach((item, index) => {
                if (index === indexSlider) {
                    item.style.display = 'block';
                    if (sliderTotal && elem !== '.popup-portfolio') {
                        sliderTotal.textContent = [...item.children].length;
                    }
                    if (textBlocks) textBlocks[index].classList.add('visible-content-block');
                    if (previewBlocks) previewBlocks[index].classList.add('visible');
                    if (schemeBlocks) schemeBlocks[index].classList.add('visible-content-block');
                    if (portfolioBlocks) portfolioBlocks[index].classList.add('visible-content-block');
                } else {
                    item.style.display = 'none';
                    if (textBlocks) textBlocks[index].classList.remove('visible-content-block');
                    if (previewBlocks) previewBlocks[index].classList.remove('visible');
                    if (schemeBlocks) schemeBlocks[index].classList.remove('visible-content-block');
                    if (portfolioBlocks) portfolioBlocks[index].classList.remove('visible-content-block');
                }
            });
        };

        const findSlider = () => {
            if (mainSliderItems[0].classList.contains('portfolio-slider__slide-frame')) {
                return mainSliderItems;
            } else if (mainSliderItems[0].classList.contains('popup-portfolio-slider__slide')) {
                return mainSliderItems;
            }
            const slider = mainSliderItems.filter(item => {
                if (item.style.display === 'block') return true;
            });

            return slider[0];
        };

        const switchSlider = (next = false, prev = false) => {
            if (elem === '.scheme') {
                return;
            }
            const slider = findSlider();

            let current;
            let previous;
            let sliderLength;

            if (elem === '.portfolio' || elem === '.popup-portfolio') {
                current = slider[+sliderCurrent.textContent - 1];
                previous = slider[+sliderCurrent.textContent - 2];
                sliderLength = slider.length;
            } else {
                current = [...slider.children][+sliderCurrent.textContent - 1];
                previous = [...slider.children][+sliderCurrent.textContent - 2];
                sliderLength = [...slider.children].length;    
            }
            
            if (next === true) {
                if (+sliderCurrent.textContent < sliderLength) {
                    current.classList.add('slider-disabled');
                    current.classList.remove('slider-active');
                    current.nextElementSibling.classList.add('slider-active');
                    current.nextElementSibling.classList.remove('slider-disabled');
                    sliderCurrent.textContent = +sliderCurrent.textContent + 1;
                }
            } else if (prev === true) {
                if (+sliderCurrent.textContent > 1) {
                    current.classList.add('slider-disabled');
                    current.classList.remove('slider-active');
                    previous.classList.remove('slider-disabled');
                    previous.classList.add('slider-active');
                    sliderCurrent.textContent = +sliderCurrent.textContent - 1;
                }
            }
        };

        if (elem === '.popup-portfolio') {
            dispalySlider(+sliderCurrent.textContent - 1);
        }

        main.addEventListener('click', event => {
            const target = event.target;
            
            if (target.matches('.button_o')) {
                navItems.forEach(item => {
                    if (item === target) {
                        const activeItem = navItems.filter(item => item.classList.contains('active'));
                        activeItem[0].classList.remove('active');
                        target.classList.add('active');

                        const currentIndex = [];
                        navItems.forEach((item, index) => {
                            if (item === target) {
                                currentIndex.push(index);
                            } else false;
                        });
                        dispalySlider(currentIndex[0]);
                        if (sliderCurrent) sliderCurrent.textContent = 1;

                        const firstSlide = findSlider();
                        [...firstSlide.children].forEach((item, index) => {
                            if (index === 0) {
                                item.classList.add('slider-active');
                                item.classList.remove('slider-disabled');
                            } else {
                                item.classList.add('slider-disabled');
                                item.classList.remove('slider-active');
                            }
                        });
                    }
                });
            } else if (target.closest('.slider-arrow')) {
                const arrow = target.closest('.slider-arrow');
                if (arrow.classList.contains('slider-arrow_right')) {
                    switchSlider(true, false);
                } else if (arrow.classList.contains('slider-arrow_left')) {
                    switchSlider(false, true);
                }
            } else if (target.closest('.portfolio-arrow-mobile')) {
                const arrow = target.closest('.portfolio-arrow-mobile');
                if (arrow.matches('#portfolio-arrow-mobile_right')) {
                    switchSlider(true, false);
                } else if (arrow.matches('#portfolio-arrow-mobile_left')) {
                    switchSlider(false, true);
                }
            } else if (target.closest('.slider-arrow-tablet-mobile')) {
                const arrow = target.closest('.slider-arrow-tablet-mobile');
                if (arrow.matches('#design_right')) {
                    switchSlider(true, false);
                } else if (arrow.matches('#design_left')) {
                    switchSlider(false, true);
                }
            } else if (target.closest('.popup-arrow') && target.closest('.popup-design')) {
                const arrow = target.closest('.popup-arrow');
                if (arrow.matches('#popup_design_right')) {
                    switchSlider(true, false);
                } else if (arrow.matches('#popup_design_left')) {
                    switchSlider(false, true);
                }
            }  else if (target.closest('.popup-arrow') && target.closest('.popup-portfolio')) {
                const arrow = target.closest('.popup-arrow');
                if (arrow.matches('#popup_portfolio_right')) {
                    switchSlider(true, false);
                    dispalySlider(+sliderCurrent.textContent - 1);
                } else if (arrow.matches('#popup_portfolio_left')) {
                    switchSlider(false, true);
                    dispalySlider(+sliderCurrent.textContent - 1);
                } 
            } else if (target.closest('.popup-arrow_transparency')) {
                const arrow = target.closest('.popup-arrow');

                if (arrow.matches('#transparency_right')) {
                    switchSlider(true, false);
                } else if (arrow.matches('#transparency_left')) {
                    switchSlider(false, true);
                }
            }
        });

        mainSliderItems.forEach((item, index) => {
            if (index === 0) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
            if (elem === '.portfolio') {
                sliderItemImgs.push([...item.children][0]);
            } else {
                sliderItemImgs.push([...item.children]);
            }
        });
        if (sliderTotal !== null) {
            if (elem === '.portfolio' || elem === '.popup-portfolio') {
                sliderTotal.textContent = sliderItemImgs.length;
            } else {
                sliderTotal.textContent = sliderItemImgs[0].length;
            }
        }
    }

    const popupProfile = document.querySelector('.popup-portfolio');
    const portfolio = document.querySelector('.portfolio');

    portfolio.addEventListener('click', event => {
        const target = event.target;

        if (target.matches('.portfolio-slider__slide-frame')) {
            popupProfile.style.visibility = 'visible';
        }
    });


    const popupDesign = document.querySelector('.popup-design');
    const designLink = document.querySelector('.link-list-designs');
    designLink.addEventListener('click', () => popupDesign.style.visibility = 'visible');

    const popupTransparency = document.querySelector('.popup-transparency');
    const transparencyBlock = document.querySelector('.transparency-slider');

    transparencyBlock.addEventListener('click', event => {
        const target = event.target;

        if (target.matches('.transparency-item__img')) {
            popupTransparency.style.visibility = 'visible';
            popupTransparency.querySelector('.slider-counter-content__current').textContent = 1;
            const allItems = [...transparencyBlock.querySelectorAll('.transparency-item__img')];
            let curIndex;

            allItems.forEach((item, index) => {
                if (item === target) {
                    curIndex = index;
                }
            });

            [...popupTransparency.querySelectorAll('.popup-transparency-slider__slide')]
                .forEach((item, index) => {
                    if (index === curIndex) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
        }
    });
};

export default dynamicSlider;
