$(window).on('load', () => {
  const html = document.documentElement;
  const timelineScene = document.querySelector('.timeline__scene');
  
  let offset = timelineScene ? timelineScene.offsetTop : null;
  let width = html.clientWidth;
  let isInit = false;
  let carousel = null;
  const breakpoint = 1079;
  const carouselEl = document.querySelector('.__js_timeline-carousel');

  const items = [
    {el: document.querySelector('.p1'), start: 4196, end: 4140},
    {el: document.querySelector('.p2'), start: 4196, end: 4140},
    {el: document.querySelector('.p3'), start: 4196, end: 4140},
    {el: document.querySelector('.p4'), start: 4079, end: 4079},
    {el: document.querySelector('.p5'), start: 3912, end: 3912},
    {el: document.querySelector('.p49'), start: 65, end: 26},
    {el: document.querySelector('.p48'), start: 121, end: 75},
    {el: document.querySelector('.p47-3'), start: 121, end: 75},
    {el: document.querySelector('.p47-2'), start: 121, end: 75},
    {el: document.querySelector('.p47-1'), start: 121, end: 75},
    {el: document.querySelector('.p46'), start: 121, end: 75},
    {el: document.querySelector('.p45'), start: 294, end: 294},
    {el: document.querySelector('.p44'), start: 355, end: 355},
    {el: document.querySelector('.p43'), start: 400, end: 400},
    {el: document.querySelector('.p42'), start: 583, end: 583},
    {el: document.querySelector('.p41'), start: 634, end: 634},
    {el: document.querySelector('.p40'), start: 690, end: 690},
    {el: document.querySelector('.p39'), start: 703, end: 703},
    {el: document.querySelector('.p38'), start: 717, end: 717},
    {el: document.querySelector('.p37'), start: 877, end: 877},
    {el: document.querySelector('.p36'), start: 910, end: 910},
    {el: document.querySelector('.p35'), start: 944, end: 944},
    {el: document.querySelector('.p34'), start: 961, end: 961},
    {el: document.querySelector('.p33'), start: 1012, end: 1012},
    {el: document.querySelector('.p32'), start: 1655, end: 1655},
    {el: document.querySelector('.p31-8'), start: 1749, end: 1749, fill: '#00A99E'},
    {el: document.querySelector('.p31-7'), start: 1749, end: 1749, fill: '#00A99E'},
    {el: document.querySelector('.p31-6'), start: 1749, end: 1749, fill: '#00A99E'},
    {el: document.querySelector('.p31-5'), start: 1749, end: 1749, fill: '#00A99E'},
    {el: document.querySelector('.p31-4'), start: 1749, end: 1749, fill: '#00A99E'},
    {el: document.querySelector('.p31-3'), start: 1749, end: 1749, fill: '#00A99E'},
    {el: document.querySelector('.p31-2'), start: 1749, end: 1749, fill: '#00A99E'},
    {el: document.querySelector('.p31-1'), start: 1749, end: 1749, fill: '#00A99E'},
    {el: document.querySelector('.p30'), start: 1960, end: 1960},
    {el: document.querySelector('.p29'), start: 2089, end: 2014},
    {el: document.querySelector('.p28'), start: 2089, end: 2014},
    {el: document.querySelector('.p27'), start: 2089, end: 2014, fill: '#00A99E'},
    {el: document.querySelector('.p26'), start: 2089, end: 2014},
    {el: document.querySelector('.p25'), start: 2285, end: 2285},
    {el: document.querySelector('.p24'), start: 2343, end: 2343},
    {el: document.querySelector('.p23'), start: 2364, end: 2364},
    {el: document.querySelector('.p22'), start: 2387, end: 2387},
    {el: document.querySelector('.p21'), start: 2400, end: 2400},
    {el: document.querySelector('.p20'), start: 2594, end: 2594},
    {el: document.querySelector('.p19'), start: 2670, end: 2670},
    {el: document.querySelector('.p18'), start: 2757, end: 2757},
    {el: document.querySelector('.p17'), start: 2774, end: 2774},
    {el: document.querySelector('.p16'), start: 2792, end: 2792},
    {el: document.querySelector('.p15'), start: 2808, end: 2808},
    {el: document.querySelector('.p14'), start: 3227, end: 3227},
    {el: document.querySelector('.p13'), start: 3307, end: 3307},
    {el: document.querySelector('.p11'), start: 3539, end: 3539},
    {el: document.querySelector('.p12'), start: 3506, end: 3506},
    {el: document.querySelector('.p10'), start: 3556, end: 3556},
    {el: document.querySelector('.p9'), start: 3745, end: 3745},
    {el: document.querySelector('.p8-1'), start: 3779, end: 3779},
    {el: document.querySelector('.p7'), start: 3846, end: 3846},
    {el: document.querySelector('.p8'), start: 3812, end: 3812},
    {el: document.querySelector('.p6'), start: 3863, end: 3863},
    {el: document.querySelector('.timeline__item--2017-Q1'), start: 4273, end: 4252, isQ: true},
    {el: document.querySelector('.timeline__item--2017-Q2'), start: 3988, end: 3967, isQ: true},
    {el: document.querySelector('.timeline__item--2018-Q1'), start: 3704, end: 3678, isQ: true},
    {el: document.querySelector('.timeline__item--2018-Q2'), start: 3415, end: 3393, isQ: true},
    {el: document.querySelector('.timeline__item--2018-Q3'), start: 2517, end: 2491, isQ: true},
    {el: document.querySelector('.timeline__item--2018-Q4'), start: 2198, end: 2176, isQ: true},
    {el: document.querySelector('.timeline__item--2019-Q1'), start: 1861, end: 1835, isQ: true},
    {el: document.querySelector('.timeline__item--2019-Q2'), start: 1106, end: 1085, isQ: true},
    {el: document.querySelector('.timeline__item--2019-Q3'), start: 809, end: 787, isQ: true},
    {el: document.querySelector('.timeline__item--2019-Q4'), start: 515, end: 489, isQ: true},
    {el: document.querySelector('.timeline__item--2020-Q1'), start: 217, end: 192, isQ: true}
  ];

  const slides = items.filter(it => it.isQ).map(it => it.el);

  if (timelineScene) {
    //const offset = timelineScene.offsetTop;
    const triggerStart = offset - html.clientHeight / 2;
    let timelineSceneHeight = timelineScene.offsetHeight - parseInt(window.getComputedStyle(timelineScene).getPropertyValue('padding-bottom'), 10);

    const line = document.querySelector('.line');
    const length = line.getTotalLength();
    const startLineLengthOffset = parseInt(timelineScene.dataset.fillStart, 10) || 152;
    const endLineLengthOffset = parseInt(timelineScene.dataset.fillEnd, 10) || 3226;

    ///
    /*const out = document.querySelector('.timeline__scene-out div');

    document.querySelector('.timeline__scene-out').addEventListener('click', function(e) {
      const current = e.target.closest('.timeline__scene-btn');
      if (current) {
        html.scrollTop += current.classList.contains('top') ? -1 : 1;
      }
    })*/
    ////

    if (width <= breakpoint) {
      initCarousel();
      isInit = true;
      prepareSlides();
    } else {
      items.forEach(it => {
        if (it.el) {
          if (it.el.hasAttribute('fill')) {
            it.el.setAttribute('fill', 'none');
          } else {
            pathPrepare(it.el, it.isQ);
          }
        }
      });

      //pathPrepare(line);
      line.style.strokeDasharray = length;
      line.style.strokeDashoffset = length - startLineLengthOffset;
      setLineAnimation();

      window.addEventListener('scroll', setLineAnimation);
    }

    window.addEventListener('resize', () => {
      width = html.clientWidth;
      offset = timelineScene.offsetTop;
      timelineSceneHeight = timelineScene.offsetHeight - parseInt(window.getComputedStyle(timelineScene).getPropertyValue('padding-bottom'), 10);
        
      if (width <= breakpoint && !isInit) {
        initCarousel();
        isInit = true;
        prepareSlides();
      } else if (width > breakpoint && isInit) {
        carousel.destroy();
        isInit = false;

        slides.forEach(it => {
          it.classList.remove('timeline__item--active');
        });

        setLineAnimation();
      }



      slides.forEach(it => {
        width <= breakpoint ? it.classList.add('timeline__item--active') :  it.classList.remove('timeline__item--active');
      });
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

    function prepareSlides() {
      slides.forEach((it, index) => {
        const method = index < 7 ? 'add' : 'remove';
        it.classList[method]('timeline__item--active');
      });
    }

    function setLineAnimation() {
      let scroll = window.pageYOffset;
      if (scroll >= triggerStart) {
        let percent = (scroll - triggerStart) * 100 / timelineSceneHeight ;
        let part = length * percent / 100;
        //out.textContent = Math.floor(length - part);
        //out.textContent = Math.floor(part);

        if (part < startLineLengthOffset) {
          part = startLineLengthOffset;
        }

        if (part <= endLineLengthOffset) {
          line.style.strokeDashoffset = part < length ? length - part : 0;
          checkItems(length - part);
        } else {
          line.style.strokeDashoffset = length - endLineLengthOffset;
          checkItems(length - endLineLengthOffset);
        }

      } else {
        line.style.strokeDashoffset = length - startLineLengthOffset;
        checkItems(length - startLineLengthOffset);
      }
    }
  }

  function checkItems(current) {
    items.forEach(it => {
      const length = !it.isQ ? it.el.getTotalLength() : null;
      const isFill = it.el.hasAttribute('fill');

      if (it.el && current <= (it.start + it.end) / 2) {
        if (it.isQ) {
          it.el.classList.add('timeline__item--active')
        }
        if (isFill) {
          it.el.setAttribute('fill', it.fill);
        } else {
          it.el.style.strokeDashoffset = 0;
        }
      } else if (it.el) {
        if (it.isQ) {
          it.el.classList.remove('timeline__item--active')
        }
        if (isFill) {
          it.el.setAttribute('fill', 'none');
        } else {
          it.el.style.strokeDashoffset = length;
        }
      }
    });
  }

  function pathPrepare(el, flag) {
    const isQ = flag || false;

    if (!isQ) {
      const lineLength = el.getTotalLength();
      el.style.strokeDasharray = lineLength;
      el.style.strokeDashoffset = lineLength;
    }
  }
})