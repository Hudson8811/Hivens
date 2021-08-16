window.addEventListener('load', () => {
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
		const floorsHelpButtonsWrapper = floors.querySelector(".how-platform-works__schema-floors");
		const floorsHelpButtons = floors.querySelectorAll(".how-platform-works__schema-floor");

		const borderPositionY = [20.1, 28.1, 35.9, 43.8, 51.8, 61.7, 72.2, 82.7];
		const borderPositionX = [50, 50, 50, 50, 50, 50, 50, 56.5];

		if (floorsHelpButtons) {
			floorsHelpButtons.forEach((it) => it.addEventListener('click', () => {
				const index = parseInt(it.dataset.index, 10);
				changeFloors(index);

				if (schemaSlider) {
					schemaSlider.slideTo(index);
				}
			}));
		}

		floors.addEventListener("click", clickHandler);

		function clickHandler(event) {
			let target = event.target;
			target = target.closest(".how-platform-works__item");

			if (target) {
				const index = schemaSlider ? parseInt(target.dataset.swiperSlideIndex, 10) : Array.from(floorsItems).indexOf(target);

				changeFloors(index);

				if (schemaSlider) {
					schemaSlider.slideTo(index)
				}
			}
		}

		let schemaSlider;

		function adaptive(media) {
			if (media.matches) {
				//floors.removeEventListener("click", clickHandler);
				schemaSlider = new Swiper(".how-platform-works__content", {
					loop: true,
					slidesPerView: "auto",
					spaceBetween: 20,
					navigation: {
						nextEl: ".swiper-button-next",
					},
					on: {
						activeIndexChange: function (swiper) {
							changeFloors(swiper.realIndex);
						}
					}
				});

				floors.querySelector('.how-platform-works__schema-image').append(floorsHelpButtonsWrapper);
			} else {
				floors.append(floorsHelpButtonsWrapper);

				if (schemaSlider) {
					schemaSlider.destroy();
				}
			}
		}

		function checkWidth() {
			const media = window.matchMedia("(max-width: 1000px)");

			adaptive(media);

			media.addEventListener("change", adaptive);
		}

		function changeFloors(index) {
			const zoomedImage = floors.querySelector("img.active");
			zoomedImage.classList.remove("active");
			zoomImages[index].classList.add("active");

			zoomBorder.style.cssText = `
				top: ${borderPositionY[index]}%;
				left: ${borderPositionX[index]}%;
				width: ${index === 7 ? 41 : 34.1}%;
			`;
		}
		
		checkWidth();
	}

	toggleSlider();
});
