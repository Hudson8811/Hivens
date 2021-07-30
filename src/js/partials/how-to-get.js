$(window).on('load', () => {
  let width = document.documentElement.clientWidth;
  let isInit = false;
  let carousel = null;
  const breakpoint = 767;
  const carouselEl = document.querySelector('.__js_how-to-get-pagi-carousel');
  const sliderEl = document.querySelector('.__js_how-to-get-carousel');

  if (carouselEl && sliderEl) {
    const slider = new Swiper(sliderEl, {
      slidesPerView: 1,
			speed: 300,
			loop: true,
			navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
      },
      pagination: {
          el: '.how-to-get__pagination .swiper-wrapper',
          clickable: true,
          renderBullet: function (index, className) {
            return '<button class="button button--dark-green button--rounded button--outline how-to-get__dot swiper-slide ' + className + '"><span>' + (this.passedParams.loop ? this.slides[index + 1].dataset.bullet : this.slides[index].dataset.bullet) + '</span></button>';
          }
        }
    })
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
      });
    }
  }
})