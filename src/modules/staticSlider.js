import animation from './animation';

const staticSlider = () => {
    class SliderCarousel {
        constructor({ main, wrap, next, prev, position = 0, slidesToShow = 3, infinity = false, responsive = [], 
            hide = false, hideButtons = false, divideBy = 1, multiplyBy = 1 }) {
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
                multiplyBy,
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
                            duration: 100,
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
                `translateX(-${((this.options.position * this.options.widthSlide) / this.options.divideBy) * 
                    this.options.multiplyBy}%)`;
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
                `translateX(-${((this.options.position * this.options.widthSlide) / this.options.divideBy) * 
                    this.options.multiplyBy}%)`;
            }
        }
    
        controlSlider() {
            this.next.addEventListener('click', () => this.nextSlider());
            this.prev.addEventListener('click', () => this.prevSlider());
        }
        
        responseInit() {
            const slidesToShowDefault = this.slidesToShow;
            const multy = this.responsive.map(item => item.multiplyBy).filter(item => item);
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
                            if (multy[i]) {
                                this.options.multiplyBy = multy[i];
                            }
                        }
                    }
                } else {
                    this.slidesToShow = slidesToShowDefault;
                    this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                    this.addStyle();
                    this.options.multiplyBy = 1;
                }
            };
    
            checkResponse();
            
            window.addEventListener('resize', checkResponse);
        }
    }

    class CustomCarousel extends SliderCarousel {
        addStyle() {
            let style = document.getElementById('customCarousel-style');
            if (!style) {
                style = document.createElement('style');
                style.id = 'CustomCarousel-style';
            }
            
            style.textContent = `
                .custom-slider {
                    overflow: hidden !important;
                }
                .custom-slider__wrap {
                    display: flex !important;
                    flex-wrap: nowrap !important;
                    transition: transform 0.5s !important;
                    will-change: transform !important;
                    overflow: visible !important;
                }
    
                .custom-slider__item {
                    margin: auto 0 !important;
                }
            `;
    
            document.head.appendChild(style);
        }

        addGloClass() {
            this.main.classList.add('custom-slider');
            this.wrap.classList.add('custom-slider__wrap');
            for (const slide of this.slides) slide.classList.add('custom-slider__item');
        }
    }

    class ReviewsCarousel extends SliderCarousel {
        addStyle() {
            let style = document.getElementById('ReviewsCarousel-style');
            if (!style) {
                style = document.createElement('style');
                style.id = 'ReviewsCarousel-style';
            }
            
            style.textContent = `
            .reviews-carousel {
                overflow: hidden !important;
            }
            .reviews-carousel__wrap {
                display: flex !important;
                flex-wrap: nowrap !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
                overflow: visible !important;
            }
            .reviews-carousel__item {
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
            }
            `;
            document.head.appendChild(style);
        }

        addGloClass() {
            this.main.classList.add('reviews-carousel');
            this.wrap.classList.add('reviews-carousel__wrap');
            for (const slide of this.slides) slide.classList.add('reviews-carousel__item');
        }
    }

    const reviews = new ReviewsCarousel(
        { main: '.reviews',
            wrap: '.reviews-slider',
            next: '#reviews-arrow_right',
            prev: '#reviews-arrow_left',
            slidesToShow: 1,
            hide: true,
            hideButtons: true,
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
                slidesToShow: 2,
                multiplyBy: 1
            }, 
            {
                breakpoint: 900,
                slidesToShow: 2,
                multiplyBy: 1
   
            },
            {
                breakpoint: 576,
                slidesToShow: 1,
                multiplyBy: 0.8
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
            multiplyBy: 1,
            responsive: [{
                breakpoint: 1024,
                slidesToShow: 1,
                multiplyBy: 0.8,
            },
            {
                breakpoint: 690,
                slidesToShow: 1,
                multiplyBy: 1.2,
            },
            {
                breakpoint: 576,
                slidesToShow: 1,
                multiplyBy: 1.7,
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
            responsive: [{
                breakpoint: 576,
                slidesToShow: 1,
                multiplyBy: 3
            }]
        }
    );

    problems.init();

    const navListRepair = new CustomCarousel({
        main: `.nav-wrap-repair`,
        wrap: `.nav-list-repair`,
        next: `#nav-arrow-repair-right_base`,
        prev: `#nav-arrow-repair-left_base`,
        slidesToShow: 3,
        multiplyBy: 1,
        hideButtons: true,
        responsive: [{
            breakpoint: 576,
            slidesToShow: 1,
            multiplyBy: 0.2
        }]
    });

    const navListDesigns = new CustomCarousel({
        main: `.nav-wrap-designs`,
        wrap: `.nav-list-designs`,
        next: `#nav-arrow-designs_right`,
        prev: `#nav-arrow-designs_left`,
        slidesToShow: 3,
        multiplyBy: 1,
        hideButtons: true,
        responsive: [{
            breakpoint: 576,
            slidesToShow: 1,
            multiplyBy: 0.2
        }]
    });

    navListDesigns.init();

    const navListDesignsPopup = new CustomCarousel({
        main: `.nav-wrap-designs-popup`,
        wrap: `.nav-list-designs-popup `,
        next: `#nav-arrow-popup-designs_right`,
        prev: `#nav-arrow-popup-designs_left`,
        slidesToShow: 2,
        multiplyBy: 1,
        hideButtons: true,
        responsive: [{
            breakpoint: 576,
            slidesToShow: 1,
            multiplyBy: 0.2
        }]
    });

    navListDesignsPopup.init();

    const navListRepairPopup = new CustomCarousel({
        main: `.nav-wrap-repair-popup`,
        wrap: `.nav-list-popup-repair`,
        next: `#nav-arrow-popup-repair_right`,
        prev: `#nav-arrow-popup-repair_left`,
        slidesToShow: 3,
        multiplyBy: 1,
        hideButtons: true,
        responsive: [{
            breakpoint: 1024,
            slidesToShow: 2,
            multiplyBy: 0.3
        },
        {
            breakpoint: 576,
            slidesToShow: 1,
            multiplyBy: 0.18
        }]
    });

    const navListScheme = new CustomCarousel(
        { main: '.nav-wrap-scheme ',
            wrap: '.nav-list-scheme',
            next: '#nav-arrow-scheme_right',
            prev: '#nav-arrow-scheme_left',
            slidesToShow: 3,
            multiplyBy: 1,
            hideButtons: true,
            responsive: [
                {
                    breakpoint: 1024,
                    slidesToShow: 2,
                    multiplyBy: 0.3
                },
                {
                    breakpoint: 576,
                    slidesToShow: 1,
                    multiplyBy: 0.16
                }]
        }
    );

    navListScheme.init();

    const portfolio = new SliderCarousel({
        main: '.portfolio-slider-wrap',
        wrap: '.portfolio-slider',
        next: '#portfolio-arrow_right',
        prev: '#portfolio-arrow_left',
        slidesToShow: 3,
        hideButtons: true,
        multiplyBy: 1.2,
        responsive: [{
            breakpoint: 1140,
            slidesToShow: 3,
            multiplyBy: 1.3
        },
        {
            breakpoint: 1024,
            slidesToShow: 2,
            multiplyBy: 1
        },
        {
            breakpoint: 900,
            slidesToShow: 2,
            multiplyBy: 2.2
        }]
    });

    portfolio.init();

    navListRepair.init();
    navListRepairPopup.init();

    const fixTabs = () => {
        if (document.documentElement.clientWidth < 578) {
            document.querySelector('.portfolio-slider').classList.remove('glo-slider__wrap');
            document.querySelector('.portfolio-slider-wrap').classList.remove('glo-slider');
        } else {
            document.querySelector('.portfolio-slider').classList.add('glo-slider__wrap');
            document.querySelector('.portfolio-slider-wrap').classList.add('glo-slider');
        }

        const wrapRepair = document.querySelector('.nav-list-repair');
        const wrapRepairPopup = document.querySelector('.nav-list-popup-repair');
        if (document.documentElement.clientWidth <= 1024) {
            wrapRepair.classList.add('custom-slider__wrap');
            wrapRepairPopup.classList.add('custom-slider__wrap');              
        } else {
            wrapRepair.classList.remove('custom-slider__wrap');
            wrapRepairPopup.classList.remove('custom-slider__wrap');            
        }
    };

    fixTabs();
    window.addEventListener('resize', () => fixTabs());

    const problemsWrapper = document.querySelector('.problems-slider-wrap');
    problemsWrapper.classList.remove('glo-slider');

    const formulaWrapper = document.querySelector('.formula-slider-wrap');
    formulaWrapper.classList.remove('glo-slider');
};

export default staticSlider;
