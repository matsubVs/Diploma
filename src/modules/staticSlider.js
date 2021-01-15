import animation from './animation';

const staticSlider = () => {
    class SliderCarousel {
        constructor({ main, wrap, next, prev, position = 0, slidesToShow = 3, infinity = false, responsive = [], 
            hide = false, hideButtons = false, divideBy = 1 }) {
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.responsive = responsive;
            this.options = {
                position,
                divideBy,
                infinity,
                hideButtons,
                widthSlide: Math.floor(100 / this.slidesToShow),
                hide
            };
        }
    
        init() {
            this.addGloClass();
            this.addStyle();
    
            if (this.next && this.prev) this.controlSlider();
            else {
                this.addArrow();
                this.controlSlider();
            }
            if (this.responsive) {
                this.responseInit();
            }
            this.hideSlider();
            this.checkButton();
        }
    
        addGloClass() {
            this.main.classList.add('glo-slider');
            this.wrap.classList.add('glo-slider__wrap');
            for (const slide of this.slides) slide.classList.add('glo-slider__item');
        }
    
        addStyle() {
            let style = document.getElementById('sliderCarousel-style');
            if (!style) {
                style = document.createElement('style');
                style.id = 'sliderCarousel-style';
            }
            
            style.textContent = `
                .glo-slider {
                    overflow: hidden !important;
                }
                .glo-slider__wrap {
                    display: flex !important;
                    flex-wrap: nowrap !important;
                    transition: transform 0.5s !important;
                    will-change: transform !important;
                    overflow: visible !important;
                }
    
                .glo-slider__item {
                    flex: 0 0 ${this.options.widthSlide}% !important;
                    margin: auto 0 !important;
                }
            `;
    
            document.head.appendChild(style);
        }

        hideSlider() {
            if (this.options.hide) {
                [...this.slides].forEach((item, index) => {
                    if (index === this.options.position) {
                        animation({
                            duration: 200,
                            timing(timeFraction) {
                                return timeFraction;
                            },
                            draw(progress) {
                                item.style.opacity = progress;
                            }
                        });
                    } else {
                        item.style.opacity = 0;   
                    }
                });
            }
            
        }

        checkButton(flag = false) {
            if (this.options.hideButtons) {
                if (flag) {
                    if (this.options.position === (this.slides.length - this.slidesToShow)) {
                        this.next.style.visibility = 'hidden';
                    } else {
                        this.prev.style.visibility = 'visible';
                    }
                } else {
                    if (this.options.position === 0) {
                        this.prev.style.visibility = 'hidden';
                    } else {
                        this.next.style.visibility = 'visible';
                    }
                }
            }
        }

        prevSlider() {
            if (this.options.infinity || this.options.position > 0) {
                --this.options.position;

                this.checkButton();
                this.hideSlider();

                if (this.options.position < 0) {
                    this.options.position = this.slides.length - this.slidesToShow;
                    this.hideSlider();
                }
                this.wrap.style.transform = 
                `translateX(-${(this.options.position * this.options.widthSlide) / this.options.divideBy}%)`;
            }
        }
    
        nextSlider() {
            if (this.options.infinity || this.options.position < (this.slides.length - this.slidesToShow)) {
                ++this.options.position;

                this.checkButton(true);
                this.hideSlider();

                if (this.options.position > (this.slides.length - this.slidesToShow)) {
                    this.options.position = 0;
                    this.hideSlider();
                }
                this.wrap.style.transform = 
                `translateX(-${(this.options.position * this.options.widthSlide) / this.options.divideBy}%)`;
            }
        }
    
        controlSlider() {
            this.next.addEventListener('click', () => this.nextSlider());
            this.prev.addEventListener('click', () => this.prevSlider());
        }
        
        responseInit() {
            const slidesToShowDefault = this.slidesToShow;
            const allResponse = this.responsive.map(item => item.breakpoint);
            const maxResponse = Math.max(...allResponse);
    
            const checkResponse = () => {
                const widthWindow = document.documentElement.clientWidth;
                if (widthWindow < maxResponse) {
                    for (let i = 0; i < allResponse.length; i++) {
                        if (widthWindow < allResponse[i]) {
                            this.slidesToShow = this.responsive[i].slidesToShow;
                            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                            this.addStyle();
                        }
                    }
                } else {
                    this.slidesToShow = slidesToShowDefault;
                    this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                    this.addStyle();
                }
            };
    
            checkResponse();
            
            window.addEventListener('resize', checkResponse);
        }
    }

    const reviews = new SliderCarousel(
        { main: '.reviews',
            wrap: '.reviews-slider',
            next: '#reviews-arrow_right',
            prev: '#reviews-arrow_left',
            slidesToShow: 1,
            hide: true
        }
    );

    reviews.init();

    const partners = new SliderCarousel(
        { main: '.partners-wrapper',
            wrap: '.partners-slider',
            next: '#partners-arrow_right',
            prev: '#partners-arrow_left',
            hideButtons: true,
            slidesToShow: 3,
            responsive: [{
                breakpoint: 1024,
                slidesToShow: 2
            },
            {
                breakpoint: 575,
                slidesToShow: 1
            }
            ]
        }
    );

    partners.init();

    const documents = new SliderCarousel(
        {
            main: '.transparency-wrapper',
            wrap: '.transparency-slider',
            next: '#transparency-arrow_right',
            prev: '#transparency-arrow_left',
            hideButtons: true,
            divideBy: 2,
            slidesToShow: 3,
            responsive: [{
                breakpoint: 1024,
                slidesToShow: 1
            }]
        }
    );

    documents.init();

    const problems = new SliderCarousel(
        {
            main: '.problems-slider-wrap',
            wrap: '.problems-slider',
            next: '#problems-arrow_right',
            prev: '#problems-arrow_left',
            hideButtons: true,
            slidesToShow: 1,
            divideBy: 3,
        }
    );

    problems.init();

    const formula = new SliderCarousel(
        {
            main: '.formula-slider-wrap',
            wrap: '.formula-slider',
            next: '#formula-arrow_right',
            prev: '#formula-arrow_left',
            hideButtons: true,
            slidesToShow: 3,
            responsive: [{
                breakpoint: 768,
                slidesToShow: 2
            },  
            {
                breakpoint: 575,
                slidesToShow: 1
            }]
        }
    );

    formula.init();

    const problemsWrapper = document.querySelector('.problems-slider-wrap');
    problemsWrapper.classList.remove('glo-slider');

    const formulaWrapper = document.querySelector('.formula-slider-wrap');
    formulaWrapper.classList.remove('glo-slider');
};  

export default staticSlider;
