$(document).ready(function () {
	const purchaseDotsWrapper = document.querySelector(".data-purchase__dots");

	const purchaseDotsSlider = new Swiper(purchaseDotsWrapper, {
		slidesPerView: "auto",
	});

	const purchaseSlider = new Swiper(".data-purchase__slider", {
		slidesPerView: 1,
		centeredSlides: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		thumbs: {
			swiper: purchaseDotsSlider,
		},
	});

	purchaseSlider.on("slideChange", function () {
		const dotActive = purchaseDotsWrapper.querySelector(".active");
		const thumbActive = purchaseDotsWrapper.querySelector(
			".swiper-slide-thumb-active"
		);

		dotActive.classList.remove("active");
		thumbActive.classList.add("active");
	});

	function checkWidth() {
		const media = window;
	}
});
