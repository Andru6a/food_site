function slider ({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){
    
    // ============Slider====================================================================
    // ============Slider====================================================================
    // ============Slider====================================================================
    const sliderBtnNext = document.querySelector(nextArrow),
        sliderBtnPrev = document.querySelector(prevArrow),
        slider = document.querySelector(container),
        slides = document.querySelectorAll(slide),
        totalSlides = document.querySelector(totalCounter),
        currentSlidesIndex = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0;


    if (slides.length < 10) {
        totalSlides.innerHTML = `0${slides.length}`;
        currentSlidesIndex.textContent = `0${slideIndex}`;
    } else {
        totalSlides.innerHTML = slides.length;
        currentSlidesIndex.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';


    const slidesNav = document.createElement('ol'),
        dots = [];

    slidesNav.classList.add('carousel-indicators');

    function dotsOpacity() {
        dots.forEach((dot => dot.style.opacity = '0.5'));
        dots[slideIndex - 1].style.opacity = '1';
    };

    function toggleIndex() {
        if (slides.length < 10) {
            currentSlidesIndex.textContent = `0${slideIndex}`;
        } else {
            currentSlidesIndex.textContent = slideIndex;
        }
    };

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
            dot.style.opacity = 1;
        }
        slidesNav.append(dot);
        dots.push(dot);
    };

    slider.append(slidesNav);


    function replacePx(str) {
        return +str.replace(/\D/gi, '');
    }

    sliderBtnNext.addEventListener('click', () => {
        if (offset == replacePx(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += replacePx(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex === slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        toggleIndex();

        dotsOpacity();
    });

    sliderBtnPrev.addEventListener('click', () => {
        if (offset == 0) {
            offset += replacePx(width) * (slides.length - 1);
        } else {
            offset -= replacePx(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex === 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        toggleIndex();

        dotsOpacity();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = replacePx(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            dotsOpacity();

            toggleIndex();
        })
    })

}


export default slider;