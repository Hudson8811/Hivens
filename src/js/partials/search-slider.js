$(document).ready(function () {
	function toggleSearchSlider() {
		const search = document.querySelector(".search"),
				filterBtns = document.querySelectorAll('.search-filters__button');

		if (!search) {
			return;
		}

		filterBtns.forEach(function (el) {
			el.addEventListener('click', function () {
				filterBtns.forEach(n => n.classList.remove('active'));
				el.classList.add('active');
			})
		});

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
