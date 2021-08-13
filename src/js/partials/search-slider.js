$(document).ready(function () {
	function toggleSearchSlider() {
		const search = document.querySelector(".search"),
				filterBtns = document.querySelectorAll('.search-filters__button:not(.search-filters__button--dropdown)'),
				dropBtn = document.querySelector('.search-filters__button--dropdown'),
				dropLinks = document.querySelectorAll('.search-filters__dropdown a');

		if (!search) {
			return;
		}

		filterBtns.forEach(function (el) {
			el.addEventListener('click', function () {
				dropBtn.classList.remove('active');
				filterBtns.forEach(n => n.classList.remove('active'));
				el.classList.add('active');
			})
		});

		dropBtn.addEventListener('click', function (e) {
			if (!this.querySelector('.search-filters__dropdown').classList.contains('open')) {
				this.querySelector('.search-filters__dropdown').classList.add('open');
				filterBtns.forEach(n => n.classList.remove('active'));
			} else {
				dropLinks.forEach(function (el) {
					if (e.target === el) {
						e.preventDefault();
						dropBtn.querySelector('span').textContent = el.textContent + '...';
						dropBtn.querySelector('.search-filters__dropdown').classList.remove('open');
						dropBtn.classList.add('active');
					}
				});
			}
		});

		const searchSlider = new Swiper(".search-filters", {
			slidesPerView: "auto",
			breakpoints: {
				768: {
					slidesPerView: "auto",
					enabled: false,
				},
			},
		});
	}

	toggleSearchSlider();
});
