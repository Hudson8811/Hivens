window.onload = () => {
  let width = document.documentElement.clientWidth;
  let isInit = false;
  let carousel = null;
  const breakpoint = 767;
  
  const carouselEl = document.querySelector('.__js_about-nodes-carousel');
  const showBeehiveBtn = document.querySelector('.about-nodes__btn');
  const scene = document.querySelector('.about-nodes__scene');
  const sceneOuter = document.querySelector('.about-nodes__scene-outer');
  const sceneInner = document.querySelector('.about-nodes__scene-inner');
  const dots = document.querySelectorAll('.about-nodes__scene-dot');
  const slides = document.querySelectorAll('.about-nodes__item');
  const zoomEl = document.querySelector('.about-nodes__scene-zoom');
  const zoomElGuards1 = document.querySelector('.about-nodes__scene-zoom--guards-1');
  const zoomElGuards2 = document.querySelector('.about-nodes__scene-zoom--guards-2');
  const area = document.querySelector('.close-beehive');
  const zoom = {
    acceptance: {
      top: '22%',
      left: '20.7%',
      width: '57.3%',
      height: '18.1%',
      duration: 0.3
    },
    legal: {
      top: '36%',
      left: '59.6%',
      width: '14.1%',
      height: '9.4%',
      duration: 0.3
    },
    processing: {
      top: '45.7%',
      left: '51.5%',
      width: '11.2%',
      height: '6.9%',
      duration: 0.3
    },
    analytical: {
      top: '52.6%',
      left: '23.5%',
      width: '51.2%',
      height: '7.8%',
      duration: 0.3
    },
    segmentation: {
      top: '59.2%',
      left: '23.5%',
      width: '51.3%',
      height: '10.3%',
      duration: 0.3
    },
    storage: {
      top: '68.4%',
      left: '23.5%',
      width: '51.3%',
      height: '10.3%',
      duration: 0.3
    },
    bank: {
      top: '81%',
      left: '23.5%',
      width: '51.3%',
      height: '14.2%',
      duration: 0.3
    },
    guards: {
      top: '43.2%',
      left: '5%',
      width: '21.6%',
      height: '49%',
      duration: 0.3
    },
    guards1: {
      top: '43.2%',
      left: '72%',
      width: '21.5%',
      height: '24%',
      display: 'block',
      duration: 0.3
    },
    guards2: {
      top: '81.6%',
      left: '72%',
      width: '21.5%',
      height: '10.6%',
      display: 'block',
      duration: 0.3
    }
  };
  const zoomImages = document.querySelectorAll('.about-nodes__zoom-image');

  if (scene) {
    scene.addEventListener('click', e => {
      if (width <= breakpoint) {
        e.preventDefault();
      }
    });
    showBeehiveBtn.addEventListener('click', (e) => {
      if (sceneInner.classList.contains('hide')) {
        if (width > breakpoint) {
          scene.append(setOverlay(closeBeehive));
          document.body.style.overflow = 'hidden';
          document.body.style.marginRight = getScrollbarWidth() + 'px';
        }
        window.scrollTo({
          top: width > breakpoint ? scene.offsetTop - (document.documentElement.clientHeight - scene.offsetHeight) / 2 : scene.offsetTop,
          behavior: "smooth"
        });
        sceneOuter.classList.add('hide');
        sceneInner.classList.remove('hide');
      } else {
        closeBeehive(e);
      }
    });

    area.addEventListener('click', closeBeehive);

    if (width <= breakpoint) {
      area.removeEventListener('click', closeBeehive);
    }

    if (dots && slides) {
      sceneInner.addEventListener('click', e => {
        const currentDot = e.target.closest('.about-nodes__scene-dot');
        const isItem = e.target.closest('.about-nodes__item-inner');

        if (isItem) {
          e.preventDefault();
          return;
        }
        
        if (currentDot) {
      
          const target = currentDot.dataset.target
          //console.log(currentDot, target)

          if (width > breakpoint) {
            slides.forEach(it => {
              if (it.dataset.target === target) {
                it.classList.toggle('hide');
              } else {
                it.classList.add('hide');
              }
            });
          } else {
            const index = parseInt(currentDot.dataset.index, 10);
            carousel.slideTo(index);
            changeZoom(currentDot);
          }
        } else {
          slides.forEach(it => it.classList.add('hide'));
        }

      });
    }

    if (width <= breakpoint) {
      sceneInner.classList.remove('hide');
      initCarousel();
      isInit = true;
    }

    window.addEventListener('resize', (e) => {
      width = document.documentElement.clientWidth;

      resetScene();

      if (width <= breakpoint && !isInit) {
        initCarousel();
        isInit = true;
        area.removeEventListener('click', closeBeehive);
      } else if (width > breakpoint && isInit) {
        carousel.destroy();
        isInit = false;
        sceneInner.classList.add('hide');
        area.addEventListener('click', closeBeehive);
      }
    });

    function initCarousel() {
      carousel = new Swiper(carouselEl, {
        speed: 300,
        slidesPerView: 'auto',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          beforeInit: function(swiper) {
            sceneInner.classList.remove('hide');
          },
          afterInit: function (swiper) {
            sceneInner.classList.add('hide');
            const el = swiper.slides[swiper.activeIndex];
            changeZoom(el);
          },
          slideChange: function (swiper) {
            const el = swiper.slides[swiper.activeIndex];
            changeZoom(el);
          }
        }
      });
    }

    function closeBeehive(e) {
      e.preventDefault();
      const overlay = scene.querySelector('.about-nodes__overlay');
      sceneOuter.classList.remove('hide');
      sceneInner.classList.add('hide');
        zoomEl.removeAttribute('style');
        zoomElGuards1.removeAttribute('style');
        zoomElGuards2.removeAttribute('style');

      if (overlay) {
        sceneInner.addEventListener('transitionend', () => {
          overlay.remove();

          document.body.style.overflow = '';
          document.body.style.marginRight = '';
        }, {once: true});
      }
    }

    function resetScene() {
      const overlay = scene.querySelector('.about-nodes__overlay');
      sceneOuter.classList.remove('hide');

      //if (isInit) {
        sceneInner.classList.add('hide');
        zoomEl.removeAttribute('style');
        zoomElGuards1.removeAttribute('style');
        zoomElGuards2.removeAttribute('style');
      //}

      if (overlay) {
        overlay.remove();
        document.body.style.overflow = '';
        document.body.style.marginRight = '';
      }
    }

    function changeZoom(el) {
      const target = el.dataset.target;

      if (target === 'guards') {
        gsap.to(zoomEl, zoom[target]);
        gsap.to(zoomElGuards1, zoom.guards1);
        gsap.to(zoomElGuards2, zoom.guards2);

      } else {
        gsap.to(zoomEl, zoom[target]);
        gsap.to(zoomElGuards1, zoom[target]);
        gsap.to(zoomElGuards2, zoom[target]);

      }

      zoomImages.forEach(it => {
        const vars = {duration: .3};

        if (it.dataset.id === target) {
          vars.opacity = 1;
          it.classList.add('active');
        } else {
          vars.opacity = 0;
          it.classList.remove('active');
        }
        gsap.to(it, vars);
      });
      
    }
  }

  function setOverlay(cb) {
    const overlay = document.createElement('div');
    overlay.classList.add('about-nodes__overlay');
    overlay.addEventListener('click', cb);
    return overlay;
  }

  function getScrollbarWidth() {
    var block = $('<div>').css({'height':'50px','width':'50px'});
    var indicator = $('<div>').css({'height':'200px'});

    $('body').append(block.append(indicator));

    var w1 = $('div', block).innerWidth();
    block.css('overflow-y', 'scroll');

    var w2 = $('div', block).innerWidth();
    $(block).remove();

    return (w1 - w2);
  }
};