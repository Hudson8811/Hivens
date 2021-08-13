$(window).on("load", () => {
	const carouselEl = document.querySelector(".fields__slider");

	if (carouselEl) {
		const showBtns = carouselEl.querySelectorAll('.fields__slide-show');

		showBtns.forEach(function (el) {
			el.addEventListener('click', function (e) {
				let text = el.querySelector('span');

				e.preventDefault();
				el.classList.toggle('rotate');
				el.previousElementSibling.classList.toggle('show');
				text.innerText === 'показать' ? text.innerText = 'скрыть' : text.innerText = 'показать';
			});
		});

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

		const filtersSlider = new Swiper(".fields__categories", {
			slidesPerView: "auto",
			spaceBetween: 20,
			breakpoints: {
				768: {
					enabled: false,
				},
			},
		});

		const filtersBtns = document.querySelectorAll(
			".fields__filter[data-target]"
		);

		const slides = document.querySelectorAll(".fields__slide");
		const filters = document.querySelectorAll(".fields__filter");

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

			filtersSlider.on("activeIndexChange", (event) => {
				filterSlides(filters[filtersSlider.activeIndex]);
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
