$(window).on("load", () => {
	let filterCarousel = null;
	const carouselEl = document.querySelector(".business-cases__carousel");

	if (carouselEl) {
		const businessCasesCarousel = new Swiper(carouselEl, {
			//loop: true,
			speed: 300,
			slidesPerView: 1,
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
			".business-cases__filter[data-target]"
		);

		const slides = document.querySelectorAll(".business-cases__card");

		function initFilterCarousel() {
			filterCarousel = new Swiper(".business-cases__filters", {
				speed: 300,
				slidesPerView: "auto",
				spaceBetween: 34,
			});
		}

		initFilterCarousel();

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

			filterCarousel.on("activeIndexChange", (event) => {
				filterSlides(filtersBtns[filterCarousel.activeIndex]);
				const activeFilterBtn = document
					.querySelector(".business-cases__filters")
					.querySelector(".active");
				activeFilterBtn.classList.remove("active");
				filtersBtns[filterCarousel.activeIndex].classList.add("active");
			});
		}

		function filterSlides(current) {
			const activeFilter =
				current || document.querySelector(".business-cases__filter.active");
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
