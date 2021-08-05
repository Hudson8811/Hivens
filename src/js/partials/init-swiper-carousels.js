window.addEventListener('load', () => {
  let width = document.documentElement.clientWidth;
  const elements = [
    {selector: '.__js_steps-carousel'},
    {selector: '.__js_rating-carousel'},
    {selector: '.__js-why-crypto-carousel'},
    {selector: '.__js_crypto-solution-carousel'},
    {selector: '.__js_crypto-line-carousel'},
    {selector: '.__js_team-carousel'},
    {selector: '.__js_advisors-carousel'},
    {selector: '.__js_partners-carousel'},
    {selector: '.__js_token-sale-carousel'},
    {selector: '.__js_node-types-carousel'},
    {selector: '.__js_documents-carousel', breakpoint: 1079}
  ];

  elements.forEach(it => {
    const carouselEl = document.querySelector(it.selector);
    let isInit = false;
    let carousel = null;

    if (carouselEl) {
      let isInit = false;
      let carousel = null;
      const breakpoint = it.breakpoint || 767;

      if (width <= breakpoint) {
        initCarousel(carouselEl);
        isInit = true;
      }

      window.addEventListener('resize', () => {
        width = document.documentElement.clientWidth;
          
        if (width <= breakpoint && !isInit) {
          initCarousel(carouselEl);
          isInit = true;
        } else if (width > breakpoint && isInit) {
          carousel.destroy();
          isInit = false;
        }
      });

      function initCarousel(el) {
        carousel = new Swiper(el, {
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

  
});