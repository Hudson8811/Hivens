$(document).ready(function() {
	var footerCarousel,
		breakpoint = window.matchMedia('(min-width: 1080px)');

	breakpoint.addListener(checkBreakpoint);

	checkBreakpoint();

	function checkBreakpoint() {
		if (breakpoint.matches === true) {
			if (footerCarousel !== undefined) {
				footerCarousel.destroy(true, true);
			}

			return;
		} else if (breakpoint.matches === false) {
			return initFooterSlider();
		}
	}
	
	function initFooterSlider() {
		footerCarousel = new Swiper('.__js_footer-carousel', {
			slidesPerView: 1,
			speed: 300,
			loop: true,
			pagination: {
				el: '.footer__pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '"></span>';
				}
			}
		});
	}
});