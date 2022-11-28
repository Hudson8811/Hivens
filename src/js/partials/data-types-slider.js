$(document).ready(function () {
	function toggleDataTypesSlider() {
		const dataTypes = document.querySelector(".data-types");

		if (!dataTypes) {
			return;
		}

		const dataTypesSlider = new Swiper(".data-types__slider", {
			slidesPerView: "auto",
			spaceBetween: 43,
			navigation: {
				prevEl: ".data-types__button-prev",
				nextEl:
					".data-types__button-next, .data-types__button-next--long-arrow",
			},

			breakpoints: {
				767: {
					spaceBetween: 30,
				},
			}

		}).on('afterInit slideChange resize', function (swiper) {
			var sliderConainer=$(swiper.wrapperEl).closest('.data-types__slider-container');

			if(sliderConainer.find('.swiper-button-prev.data-types__button-prev.swiper-button-disabled, .swiper-button-next.data-types__button-next.swiper-button-disabled').length===2){
				sliderConainer.addClass('slider-container-disabled-all-arrows');
			}
			else{
				sliderConainer.removeClass('slider-container-disabled-all-arrows');
			}

			console.log();
		});
	}

	toggleDataTypesSlider();
});
