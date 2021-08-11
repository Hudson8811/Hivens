window.addEventListener('load', () => {
	let recordsCarousel,
		breakpoint = window.matchMedia('(min-width: 1080px)');
	const recordsCarouselEl = document.querySelector('.__js_records-carousel');

	if (recordsCarouselEl) {
		breakpoint.addEventListener('change', checkBreakpoint);
		checkBreakpoint();

		function checkBreakpoint() {
			if (breakpoint.matches === true) {
				if (recordsCarousel !== undefined) {
					recordsCarousel.destroy(true, true);
				}

				return;
			} else if (breakpoint.matches === false) {
				return initFooterSlider();
			}
		}

		function initFooterSlider() {
			recordsCarousel = new Swiper(recordsCarouselEl, {
				slidesPerView: 'auto',
				speed: 300,
				loop: true,
				spaceBetween: 15,
				navigation: {
					nextEl: '.slider-next-long'
				},
			});
		}
	}
});