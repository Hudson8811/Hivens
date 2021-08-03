$(window).on("load", () => {
	let filterCarousel = null;
	const carouselEl = document.querySelector(".fields__slider");

	if (carouselEl) {
		const businessCasesCarousel = new Swiper(carouselEl, {
			//loop: true,
			speed: 300,
			slidesPerView: "auto",
			spaceBetween: 32,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
			},
		});

		const filtersBtns = document.querySelectorAll(
			".fields__filter[data-target]"
		);

		const slides = document.querySelectorAll(".fields__slide");

		if (filtersBtns && slides) {
			filterSlides();

			filtersBtns.forEach((it) => {
				it.addEventListener("click", function (e) {
					filtersBtns.forEach((it) => {
						it.classList.remove("active");
					});

					this.classList.add("active");
					filterSlides(this);
				});
			});
		}

		function filterSlides(current) {
			const activeFilter =
				current || document.querySelector(".fields__filter.active");
			const target = activeFilter.dataset.target;

			if (current) {
				carouselEl.classList.add("opacity");

				setTimeout(() => {
					carouselEl.classList.remove("opacity");
					for (slide of slides) {
						let categories = slide.dataset.category.split(",");

						categories = categories.map((it) => {
							return it.trim();
						});
						slide.hidden = !categories.includes(target);
						slide.style.display = slide.hidden ? "none" : "block";
					}
					businessCasesCarousel.update();
				}, 550);
			} else {
				for (slide of slides) {
					let categories = slide.dataset.category.split(",");
					categories = categories.map((it) => {
						return it.trim();
					});
					slide.hidden = !categories.includes(target);
					slide.style.display = slide.hidden ? "none" : "block";
				}
				businessCasesCarousel.update();
			}
		}
	}
});
