$(document).ready(function() {
	sliderAnim = new Swiper('.__js_slider-anim', {
		slidesPerView: 1,
		speed: 1000,
		effect: 'fade',
		//spaceBetween: 34,
		pagination: {
			el: '.slider-anim__pagination',
			clickable: true
		},
		navigation: {
			prevEl: '.slider-prev',
			nextEl: '.slider-next'
		}/*,
		slideChange: function () {
			/!* Animation *!/
			gsap.timeline()
				.to('.slider-anim__image', 1, {x:-500})
		},*/
	});

	sliderAnim.on('slideChange', function () {
		TweenMax.to('.js-anim', 1, {
			x: -500
		});
	});

	sliderAnim.on('slideChangeTransitionEnd', function () {
		TweenMax.to('.js-anim', 1, {
			x: -500

		});
	});
});