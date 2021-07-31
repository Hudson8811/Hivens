$(window).on('load', () => {
  let width = document.documentElement.clientWidth;
  let isInit = false;
  let carousel = null;
  const breakpoint = 767;
  const carouselEl = document.querySelector('.__js_steps-carousel');

  if (carouselEl) {
    if (width <= breakpoint) {
      initCarousel();
      isInit = true;
    }

    window.addEventListener('resize', () => {
      width = document.documentElement.clientWidth;
        
      if (width <= breakpoint && !isInit) {
        initCarousel();
        isInit = true;
      } else if (width > breakpoint && isInit) {
        carousel.destroy();
        isInit = false;
      }
    });

    function initCarousel() {
      carousel = new Swiper(carouselEl, {
        speed: 300,
        slidesPerView: 'auto',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }








});