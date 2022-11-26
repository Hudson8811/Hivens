$(window).on('load', () => {
  let filterCarousel = null;
  let width = document.documentElement.clientWidth;
  let isInit = false;
  const breakpoint = 1079;
  const accordion = document.querySelector('.js-accordion');
  const activeClass = 'accordion__item--active';
  const filters = document.querySelectorAll('.js-faqs__filter[data-target]');
  const items = document.querySelectorAll('.accordion__item');

  if (accordion && filters.length) {

    accordion.addEventListener('click', e => {
      const target = e.target;

      if (target.closest('.accordion__item-header')) {
        if (target.parentElement.classList.contains(activeClass)) {
          target.parentElement.classList.remove(activeClass);
        } else {
          items.forEach(it => {
            it.classList.remove(activeClass)
          });
          target.parentElement.classList.add(activeClass);
        }
      }
    });

    if (filters) {
      if (width <= breakpoint) {
        initFilterCarousel();
        isInit = true;
      }

      filterAccordion();

      filters.forEach(it => {
        it.addEventListener('click', function() {
          filters.forEach(it => {
            it.classList.remove('active')
          });
          it.classList.add('active');
          filterCarousel.slideTo($(this).index());
          filterAccordion(this);
        })
      });

      window.addEventListener('resize', () => {
        width = document.documentElement.clientWidth;

        if (width <= breakpoint && !isInit) {
          initFilterCarousel();
          isInit = true;
        } else if (width > breakpoint && isInit) {
          //console.log(filterCarousel)
          isInit = false;
          filterCarousel.destroy();
        }
      });

      function initFilterCarousel() {
        filterCarousel = new Swiper('.__js_faq-filters', {
          speed: 300,
          slidesPerView: 'auto',
          preventClicks :true,
          a11y: false,
        });
      }
    }
  }


  function filterAccordion(current) {
    const activeFilter = current || document.querySelector('.js-faqs__filter.active');
    const target = activeFilter ? activeFilter.dataset.target : null;

    if (current) {
      accordion.classList.add('opacity');

      accordion.addEventListener('transitionend', () => {
        for (item of items) {
          let categories = item.dataset.category.split(',');
          categories = categories.map(it => {
            return it.trim()
          });
          item.hidden = !categories.includes(target);
        }
        accordion.classList.remove('opacity');
      });

    } else {
      for (item of items) {
        let categories = item.dataset.category.split(',');
        categories = categories.map(it => {
          return it.trim()
        });
        item.hidden = !categories.includes(target);
      }
    }
  }
});