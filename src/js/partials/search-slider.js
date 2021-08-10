$(document).ready(function () {
	function toggleSearchSlider() {
		const search = document.querySelector(".search");

		if (!search) {
			return;
		}

		const searchSlider = new Swiper(".search-filters", {
			slidesPerView: "auto",
			breakpoints: {
				768: {
					slidesPerView: "auto",
					enabled: false,
				},
			},
		});
	}

	toggleSearchSlider();
});
