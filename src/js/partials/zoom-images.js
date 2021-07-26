$(document).ready(function () {
	function toggleSlider() {
		const floors = document.querySelector(".how-platform-works__schema");

		if (!floors) {
			return;
		}

		const floorsItems = floors.querySelectorAll(".how-platform-works__item");
		const zoomImages = floors.querySelectorAll(
			".how-platform-works__zoom-image"
		);

		function clickHandler(event) {
			let target = event.target;

			target = target.closest(".how-platform-works__item");

			if (target) {
				const zoomedImage = floors.querySelector("img.active");

				zoomedImage.classList.remove("active");

				floorsItems.forEach((item, index) => {
					if (item === target) {
						zoomImages[index].classList.add("active");
					}
				});
			}
		}

		let schemaSlider;

		function adaptive(media) {
			console.log(media.matches);
			if (media.matches) {
				floors.removeEventListener("click", clickHandler);
				schemaSlider = new Swiper(".how-platform-works__content", {
					slidesPerView: "auto",
					spaceBetween: 20,
					navigation: {
						nextEl: ".swiper-button-next",
					},
				});

				slideChangeHandler();
			} else {
				if (schemaSlider) {
					schemaSlider.destroy();
					floors.addEventListener("click", clickHandler);
				}
			}
		}

		function slideChangeHandler() {
			schemaSlider.on("activeIndexChange", function () {
				console.log(schemaSlider.activeIndex);
				zoomImages.forEach((item, index) => {
					item.classList.remove("active");

					if (schemaSlider.activeIndex === index) {
						item.classList.add("active");
					}
				});
			});
		}

		function checkWidth() {
			const media = window.matchMedia("(max-width: 1000px)");

			adaptive(media);

			media.addEventListener("change", adaptive);
		}

		checkWidth();
	}

	toggleSlider();
});
