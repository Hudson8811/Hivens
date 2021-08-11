$(window).on('load', () => {
  let filterCarousel = null;
  let width = document.documentElement.clientWidth;
  let isInit = false;
  const breakpoint = 767;
  const filters = document.querySelectorAll('.payments-map__filter[data-target]');
  const pins = document.querySelectorAll('.pin');
  const pinsWrapper = document.querySelector('.payments-map__wrapper');
  const buttonsWrapper = document.querySelector('.payments-map__buttons');
  const map = document.querySelector('.payments-map__map');
  const container = document.querySelector('.payments-map__container');

  if (filters && pins && pinsWrapper) {
    if (width <= breakpoint) {
      initFilterCarousel();
      isInit = true;
    }
    
    filterPins();

    filters.forEach(it => {
      it.addEventListener('click', function() {
        filters.forEach(it => {
          it.classList.remove('active')
        });
        it.classList.add('active');
        filterPins(this);
      })
    });

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
      filterCarousel = new Swiper('.__js_pins-filters', {
        speed: 300,
        slidesPerView: 'auto'
      });
    }

    function filterPins(current) {
      const activeFilter = current || document.querySelector('.payments-map__filter.active');
      const target = activeFilter.dataset.target;

      for (pin of pins) {
        let categories = pin.dataset.category.split(',');
        categories = categories.map(it => {
          return it.trim();
        });
        categories.includes(target) ? pin.classList.remove('hide') : pin.classList.add('hide');
      }
    }
  }

  if (buttonsWrapper && map) {
    const toBeginBtn = document.querySelector('.payments-map__btn--beginning');
    const toEndBtn = document.querySelector('.payments-map__btn--end');

    changeBtnVisibility();

    if (toBeginBtn && toEndBtn) {
      toEndBtn.addEventListener('click', moveToEndMap);
      toBeginBtn.addEventListener('click', moveToBeginMap);

      window.addEventListener('resize', () => {
        width = document.documentElement.clientWidth;
        changeBtnVisibility();

        map.removeAttribute('style');
        toBeginBtn.classList.add('hide');
        toEndBtn.classList.remove('hide');
      });
    }

    map.addEventListener('touchstart', e => {
      if (width < map.offsetWidth) {
        const startX = e.changedTouches[0].clientX;

        map.addEventListener("touchend", eEnd => {
          const endX = eEnd.changedTouches[0].clientX;
          endX < startX ? moveToEndMap() : moveToBeginMap();
        });
      }
    })

    

    function moveToEndMap() {
      map.style.transform = 'translateX(-' + (map.offsetWidth - container.offsetWidth) + 'px)';
      if (toBeginBtn && toEndBtn) {
        toEndBtn.classList.add('hide');
        toBeginBtn.classList.remove('hide');
      }
    }

    function moveToBeginMap() {
      map.style.transform = 'translateX(0)';
      if (toBeginBtn && toEndBtn) {
        toBeginBtn.classList.add('hide');
        toEndBtn.classList.remove('hide');
      }
    }

    function changeBtnVisibility() {
      width < map.offsetWidth ? buttonsWrapper.classList.remove('hide') : buttonsWrapper.classList.add('hide');
    }

    function qq() {
      el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
    }
  }
});