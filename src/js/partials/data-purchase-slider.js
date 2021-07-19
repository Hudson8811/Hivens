$(document).ready(function () {
	const purchaseSlider = new Swiper(".data-purchase__slider", {
		slidesPerView: 1,
		centeredSlides: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	const purchaseDots = new Swiper(".data-purchase__dots", {});
});
