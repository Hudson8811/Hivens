$(document).ready(function () {
	function toggleDataTypesSlider() {
		const dataTypes = document.querySelector(".data-types");

		if (!dataTypes) {
			return;
		}

		const dataTypesSlider = new Swiper(".data-types__slider", {
			slidesPerView: "auto",
			spaceBetween: 30,
			navigation: {
				prevEl: ".data-types__button-prev",
				nextEl: ".data-types__button-next",
			},
		});
	}

	toggleDataTypesSlider();
});
