$(window).on('load', () => {
  let filterCarousel = null;
  let width = document.documentElement.clientWidth;
  let isInit = false;
  const breakpoint = 767;
  const carouselEl = document.querySelector('.services-section__carousel');

  if (carouselEl) {
    const servicesCarousel = new Swiper(carouselEl, {
      //loop: true,
      speed: 300,
      slidesPerView: 'auto',
      spaceBetween: 32,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    const filtersBtns = document.querySelectorAll('.services-section__filter[data-target]');
    const slides = document.querySelectorAll('.services-section__card');
    
    if (width <= breakpoint) {
      initFilterCarousel();
      isInit = true;
    }

    if (filtersBtns && slides) {
      filterSlides();

      filtersBtns.forEach(it => {
        it.addEventListener('click', function(e) {
          filtersBtns.forEach(it => {
            it.classList.remove('active');
          });

          this.classList.add('active');
          filterSlides(this);
        })
      });
    }

    window.addEventListener('resize', () => {
      width = document.documentElement.clientWidth;
        
      if (width <= breakpoint && !isInit) {
        initFilterCarousel();
        isInit = true;
      } else if (width > breakpoint && isInit) {
        filterCarousel.destroy();
        isInit = false;
      }
    });

    function initFilterCarousel() {
      filterCarousel = new Swiper('.services-section__filters', {
        speed: 300,
        slidesPerView: 'auto',
        spaceBetween: 34
      });
    }

    function filterSlides(current) {
      const activeFilter = current || document.querySelector('.services-section__filter.active');
      const target = activeFilter.dataset.target;

      if (current) {
        carouselEl.classList.add('opacity');

        setTimeout(() => {
          carouselEl.classList.remove('opacity');
          for (slide of slides) {
            let categories = slide.dataset.category.split(',');
            categories = categories.map(it => {
              return it.trim()
            });
            slide.hidden = !categories.includes(target);
          }
          servicesCarousel.update();
        }, 550)
      
      } else {
        for (slide of slides) {
          let categories = slide.dataset.category.split(',');
          categories = categories.map(it => {
            return it.trim()
          });
          slide.hidden = !categories.includes(target);
        }
        servicesCarousel.update();
      }
    }
  }








});