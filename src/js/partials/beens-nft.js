$(window).on('load', () => {
  let filterCarousel = null;
  let width = document.documentElement.clientWidth;
  let isInit = false;
  const breakpoint = 1079;
  const accordion = document.querySelector('.bees-nft__list');
  const activeClass = 'accordion__item--active';
  const filters = document.querySelectorAll('.faqs__filterBeer[data-target]');
  const items = document.querySelectorAll('.bees-nft__item');

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
          slidesPerView: 'auto'
        });
      }
    }
  }
  

  function filterAccordion(current) {
    const activeFilter = current || document.querySelector('.faqs__filter.active');
    const target = activeFilter ? activeFilter.dataset.target : null;

    if (current) {
      accordion.classList.add('opacity');
      
      accordion.addEventListener('transitionend', () => {
        for (item of items) {
          let categories = item.dataset.category.split(',');
					console.log(item)
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


	// let filterCarouselNode = null;
  // let widthNode = document.documentElement.clientWidth;
  // let isInitNode = false;
  // const breakpointNode = 1079;
  // const accordionNode = document.querySelector('.node-nft__list ');
  // const activeClassNode = 'accordion__item--active';
  // const filtersNode = document.querySelectorAll('.faqs__filterNode[data-target]');
  // const itemsNode = document.querySelectorAll('.node-nft__item');
	// console.log(itemsNode)

  // if (accordionNode && filtersNode.length) {

  //   accordionNode.addEventListener('click', e => {
  //     const target = e.target;
      
  //     if (target.closest('.accordion__item-header')) {
  //       if (target.parentElement.classList.contains(activeClassNode)) {
  //         target.parentElement.classList.remove(activeClassNode);
  //       } else {
  //         itemsNode.forEach(it => {
  //           it.classList.remove(activeClassNode)
  //         });
  //         target.parentElement.classList.add(activeClassNode);
  //       }
  //     }
  //   });

  //   if (filtersNode) {
  //     if (widthNode <= breakpointNode) {
  //       initFilterCarousel();
  //       isInitNode = true;
  //     }
      
  //     filterAccordion();

  //     filtersNode.forEach(it => {
  //       it.addEventListener('click', function() {
  //         filtersNode.forEach(it => {
  //           it.classList.remove('active')
  //         });
  //         it.classList.add('active');
  //         filterAccordion(this);
  //       })
  //     });

  //     window.addEventListener('resize', () => {
  //       widthNode = document.documentElement.clientWidth;

  //       if (widthNode <= breakpointNode && !isInitNode) {
  //         initFilterCarousel();
  //         isInitNode = true;
  //       } else if (widthNode > breakpointNode && isInitNode) {
  //         //console.log(filterCarousel)
  //         isInitNode = false;
  //         filterCarouselNode.destroy();
  //       }
  //     });

  //     function initFilterCarousel() {
  //       filterCarouselNode = new Swiper('.__js_faq-filters', {
  //         speed: 300,
  //         slidesPerView: 'auto'
  //       });
  //     }
  //   }
  // }
  

  // function filterAccordion(current) {
  //   const activeFilter = current || document.querySelector('.faqs__filterNode.active');
  //   const target = activeFilter ? activeFilter.dataset.target : null;

  //   if (current) {
  //     accordionNode.classList.add('opacity');
      
  //     accordionNode.addEventListener('transitionend', () => {
  //       for (item of items) {
  //         let categories = item.dataset.category.split(',');
	// 				console.log(item)
  //         categories = categories.map(it => {
  //           return it.trim()
  //         });
  //         item.hidden = !categories.includes(target);
  //       }
  //       accordionNode.classList.remove('opacity');
  //     });

  //   } else {
  //     for (item of items) {
  //       let categories = item.dataset.category.split(',');
  //       categories = categories.map(it => {
  //         return it.trim()
  //       });
  //       item.hidden = !categories.includes(target);
  //     }
  //   }
  // }
});
