$(document).ready(function() {
	var menuWidth = $('.footer__menu').outerWidth(),
		menuItems = $('.footer__menu-item'),
		menuBottom = $('.footer__bottom-links'),
		breakpoint = window.matchMedia('(max-width: 1079px)');

	/*$(window).resize(function () {
		setDots(menuItems);
	});

	setDots(menuItems);

	$(window).resize(function () {
		setDots(menuBottom);
	});

	setDots(menuBottom);*/

	breakpoint.addListener(checkBreakpointDots);

	function checkBreakpointDots() {
		if (breakpoint.matches === true) {
			setDots(menuItems);
			setDots(menuBottom);
		} else if (breakpoint.matches === false) {
			menuItems.find('a:not(.top-link)').removeAttr('class');
		}
	}

	function setDots(elem) {
		$(this).find('a:not(.top-link)').removeAttr('class');

		elem.each(function () {
			var links = $(this).find('a:not(.top-link)'),
				sumWidth = 0;

			links.each(function () {
				if (sumWidth === 0) {
					sumWidth = $(this).outerWidth(true);
				} else {
					if ((sumWidth + $(this).outerWidth(true)) < menuWidth) {
						sumWidth += $(this).outerWidth(true);
						$(this).addClass('dot');
					} else {
						sumWidth = $(this).outerWidth(true);
					}
				}
			});
		});
	}
});