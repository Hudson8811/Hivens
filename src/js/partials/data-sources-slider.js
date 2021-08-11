$(document).ready(function () {
	function toggleDataSourcesSlider() {
		const dataSources = document.querySelector(".data-sources");

		if (!dataSources) {
			return;
		}

		const dataSourcesSlider = new Swiper(".data-sources__description", {
			slidesPerView: "auto",
			spaceBetween: 24,
			navigation: {
				nextEl: ".data-sources__button-next--long-arrow",
			},
			breakpoints: {
				768: {
					enabled: false,
				},
			},
		});
	}

	toggleDataSourcesSlider();
});
