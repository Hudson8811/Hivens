$(document).ready(function () {
	function toggleCasesSlider() {
		const cases = document.querySelector(".cases");

		if (!cases) {
			return;
		}

		const casesSlider = new Swiper(".cases__items", {
			slidesPerView: "auto",
			spaceBetween: 24,
			navigation: {
				nextEl: ".data-sources__button-next--long-arrow",
			},
		});
	}

	toggleCasesSlider();
});
