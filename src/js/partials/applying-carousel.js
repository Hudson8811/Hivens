$(document).ready(function() {
	initApplyingSlider();

	function initApplyingSlider() {
		applyingCarousel = new Swiper('.__js_applying-carousel', {
			slidesPerView: 1,
			speed: 300,
			loop: true,
			navigation: {
				prevEl: '.slider-prev',
				nextEl: '.slider-next'
			},
		});
	}
});