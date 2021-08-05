$(document).ready(function () {
	function toggleAdvantagesSlider() {
		const advantages = document.querySelector(".advantages");

		if (!advantages) {
			return;
		}

		const advantagesSlider = new Swiper(".advantages__slider", {
			slidesPerView: 2,
			spaceBetween: 24,
			navigation: {
				nextEl: ".advantages__button-next--long-arrow",
			},
		});
	}

	toggleAdvantagesSlider();
});
