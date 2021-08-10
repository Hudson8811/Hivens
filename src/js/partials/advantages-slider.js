window.addEventListener('load', () => {
	let width = document.documentElement.clientWidth;
	const carouselEl = document.querySelector('.advantages__slider');
  const breakpoint = 767;
	let isInit = false;
  let carousel = null;


	if (carouselEl) {
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
	}

	function initCarousel(el) {
		carousel = new Swiper(el, {
			speed: 300,
			slidesPerView: 'auto',
			spaceBetween: 24, 
			navigation: {
				nextEl: '.advantages__button-next--long-arrow',
			},
		});
	}

});
