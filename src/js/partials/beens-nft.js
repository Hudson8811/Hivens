$(window).on('load', () => {
  if($('.js-filtered-container').length > 0){
    $('.js-filtered-container').each(function (){
      let filterCarousel = null;
      let width = document.documentElement.clientWidth;
      let isInit = false;
      let breakpoint = 1079;

      let container = $(this);
      let section = container.find('.js-filtered-items');
      let filters = container.find('.js-filtered-tab[data-target]');
      let items = container.find('.js-filtered-item');
      let swiperSlider = $(this).find('.js-filtered-swiper');

      const initFilterSwiper = function() {
        let this_ID = swiperSlider.attr('id');
        filterCarousel = new Swiper('#'+this_ID, {
          speed: 300,
          slidesPerView: 'auto',
          preventClicks :true,
          a11y: false,
        });
      }

      const filterSwiper = function(current) {
        let activeFilter;
        if (current) {
          activeFilter = $(current)
        } else {
          activeFilter = container.find('.js-filtered-tab.active')
        }
        let target = activeFilter ? activeFilter.data('target') : null;
        if (current) {
          section.addClass('opacity');
          section.on('transitionend', () => {
            items.each(function() {
              let categories = $(this).data('category').split(',');
              categories = categories.map(it => {
                return it.trim()
              });
              if (categories.indexOf(target.toString()) != -1){
                $(this).removeAttr('hidden');
              } else {
                $(this).prop('hidden', true);
              }
            });
            section.removeClass('opacity');
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

      if (section && filters.length) {
        if (filters) {
          if (width <= breakpoint) {
            initFilterSwiper();
            isInit = true;
          }

          filterSwiper();

          filters.each(function (){
            $(this).on('click',function (){
              if($(this).hasClass('active')){return;}
              filters.removeClass('active');
              $(this).addClass('active');
              filterSwiper(this);
              filterCarousel.slideTo($(this).index());
            })
          })

          window.addEventListener('resize', () => {
            width = document.documentElement.clientWidth;
            if (width <= breakpoint && !isInit) {
              initFilterSwiper();
              isInit = true;
            } else if (width > breakpoint && isInit) {
              isInit = false;
              filterCarousel.destroy();
            }
          });


        }
      }

    });
  }
});
