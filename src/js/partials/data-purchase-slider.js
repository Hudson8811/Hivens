$(document).ready(function () {
	const purchaseDotsWrapper = document.querySelector(".data-purchase__dots");

	const purchaseDotsSlider = new Swiper(purchaseDotsWrapper, {
		slidesPerView: "auto",
		preventClicks: true,
		a11y: false,
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
		preventClicks :true,
		a11y: false,
	});




	purchaseSlider.on("slideChange", function () {
		const dotActive = purchaseDotsWrapper.querySelector(".active");
		const thumbActive = purchaseDotsWrapper.querySelector(
			".swiper-slide-thumb-active"
		);

		dotActive.classList.remove("active");
		thumbActive.classList.add("active");
		purchaseDotsSlider.slideTo(purchaseSlider.activeIndex/*$(dotActive).index()-1*/);
	});

	function checkWidth() {
		const media = window;
	}
});
