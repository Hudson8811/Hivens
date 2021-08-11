window.addEventListener('load', () => {
	let breakpoint = window.matchMedia('(min-width: 1080px)'),
			applyingPagiCarousel,
			bullet = ['Маркетинг', 'Продажи', 'Рекрутинг', 'Менеджмент'];
	
	const applyingCarouselEl = document.querySelector('.__js_applying-carousel');
	const applyingPagiCarouselEl = document.querySelector('.__js_applying-pagi-carousel');

	if (applyingCarouselEl && applyingPagiCarouselEl) {
		initApplyingSlider();

		function initApplyingSlider() {
			applyingCarousel = new Swiper('.__js_applying-carousel', {
				slidesPerView: 1,
				speed: 300,
				loop: true,
				navigation: false,
				observer: true,
				observeParents: true,
				pagination: {
					el: '.applying__pagination .swiper-wrapper',
					clickable: true,
					renderBullet: function (index, className) {
						return '<button class="button button--dark-green button--rounded button--outline applying__filter-btn swiper-slide ' + className + '"><span>' + (bullet[index]) + '</span></button>';
					}
				},
				breakpoints: {
					1080: {
						navigation: {
							prevEl: '.slider-prev',
							nextEl: '.slider-next'
						}
					}
				}
			});
		}

		breakpoint.addEventListener('change', checkBreakpoint);
		checkBreakpoint();

		function checkBreakpoint() {
			if (breakpoint.matches === true) {
				if (applyingPagiCarousel !== undefined) {
					applyingPagiCarousel.destroy(true, true);
				}

				return;
			} else if (breakpoint.matches === false) {
				return initApplyingPagiCarousel();
			}
		}

		function initApplyingPagiCarousel() {
			applyingPagiCarousel = new Swiper('.__js_applying-pagi-carousel', {
				slidesPerView: 2.24,
				speed: 300,
				spaceBetween: 34,
				breakpoints: {
					561: {
						slidesPerView: 3.24
					},
					768: {
						slidesPerView: 4.24
					}
				}
			});
		}
	}
});