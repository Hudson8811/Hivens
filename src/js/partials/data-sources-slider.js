window.addEventListener('load', () => {
	function toggleDataSourcesSlider() {
		const dataSources = document.querySelector(".data-sources");

		if (!dataSources) {
			return;
		}

		const mediaList = window.matchMedia("(max-width: 768px)");
		let dataSourcesSlider = null;

		changeSliderState();
		mediaList.addEventListener("change", changeSliderState);

		function changeSliderState() {
			if (mediaList.matches) {
				dataSourcesSlider = new Swiper(".data-sources__description", {
					slidesPerView: "auto",
					spaceBetween: 24,
					navigation: {
						nextEl: ".data-sources__button-next--long-arrow",
					}
				});
			} else {
				if (dataSourcesSlider) {
					dataSourcesSlider.destroy();
				}
			}
		}
	}

	toggleDataSourcesSlider();
});
