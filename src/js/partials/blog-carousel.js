window.addEventListener('load', () => {
	let breakpoint = window.matchMedia('(min-width: 1080px)'),
		blogCarousel;

	let blogCarouselEl = document.querySelector('.__js_blog-carousel');

if (blogCarouselEl) {
		breakpoint.addEventListener('change', checkBreakpoint);
		checkBreakpoint();

		function checkBreakpoint() {
			if (breakpoint.matches === true) {
				if (blogCarousel !== undefined) {
					blogCarousel.destroy(true, true);
				}

				return;
			} else if (breakpoint.matches === false) {
				return initBlogCarousel();
			}
		}

		function initBlogCarousel() {
			blogCarousel = new Swiper(blogCarouselEl, {
				slidesPerView: 1.6,
				speed: 300,
				spaceBetween: 19,
				loop: true,
				navigation: {
					nextEl: '.slider-next-long'
				},
				breakpoints: {
					768: {
						slidesPerView: 2.6
					}
				}
			});
		}
	}
});