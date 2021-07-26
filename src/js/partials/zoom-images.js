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
		const zoomBorder = floors.querySelector(".how-platform-works__schema-zoom");

		const borderPositionY = [20.1, 28.1, 35.9, 43.8, 51.8, 61.7, 72.2, 82.7];
		const borderPositionX = [50, 50, 50, 50, 50, 50, 50, 56.5];

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
				floors.addEventListener("click", clickHandler);

				if (schemaSlider) {
					schemaSlider.destroy();
				}
			}
		}

		function slideChangeHandler() {
			schemaSlider.on("activeIndexChange", function () {
				zoomImages.forEach((item, index) => {
					item.classList.remove("active");

					if (schemaSlider.activeIndex === index) {
						item.classList.add("active");
						zoomBorder.style.cssText = `
							top: ${borderPositionY[index]}%;
							left: ${borderPositionX[index]}%;
							width: ${schemaSlider.activeIndex === 7 ? 41 : 34.1}%;
						`;
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
