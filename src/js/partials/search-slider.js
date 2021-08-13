$(document).ready(function () {
	function toggleSearchSlider() {
		const search = document.querySelector(".search"),
				filterBtns = document.querySelectorAll('.search-filters__button:not(.search-filters__button--dropdown)'),
				dropBtn = document.querySelector('.search-filters__button--dropdown'),
				dropLinks = document.querySelectorAll('.search-filters__dropdown a'),
				dropdown = dropBtn.querySelector('.search-filters__dropdown');

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
			if (!dropdown.classList.contains('open')) {
				dropdown.classList.add('open');
				filterBtns.forEach(n => n.classList.remove('active'));
			} else {
				dropLinks.forEach(function (el) {
					if (e.target === el) {
						e.preventDefault();
						dropBtn.querySelector('span').textContent = el.textContent + '...';
						dropdown.classList.remove('open');
						dropBtn.classList.add('active');
					}
				});
			}
		});

		document.addEventListener('click', function (e) {
			if (!(e.target == dropdown || dropdown.contains(e.target)) && !(e.target == dropBtn) && dropdown.classList.contains('open')) {
				dropdown.classList.remove('open');
			}
		}, true);

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
