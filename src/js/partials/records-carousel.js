$(document).ready(function() {
	var recordsCarousel,
		breakpoint = window.matchMedia('(min-width: 1080px)');

	breakpoint.addListener(checkBreakpoint);

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
		recordsCarousel = new Swiper('.__js_records-carousel', {
			slidesPerView: 'auto',
			speed: 300,
			loop: true,
			spaceBetween: 15,
			navigation: {
				nextEl: '.slider-next-long'
			},
		});
	}
});