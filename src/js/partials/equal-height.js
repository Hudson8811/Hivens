$(document).ready(function() {
	// Set equal height to elems in footer carousel
	$(window).resize(function () {
		setEqualHeight($('.footer__menu-item'));
		setEqualHeight($('.blog__item'));
	});

	setEqualHeight($('.footer__menu-item'));
	setEqualHeight($('.blog__item'));

	function setEqualHeight(el) {
		if (window.matchMedia('(min-width: 1080px)').matches) {
			var tallestcolumn = 0;

			el.each(function() {
				var currentHeight = $(this).height();

				if (currentHeight > tallestcolumn) {
					tallestcolumn = currentHeight;
				}
			});

			el.height(tallestcolumn);
		} else {
			el.height('auto');
		}
	}
});