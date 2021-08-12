$(document).ready(function() {
	var parent = $('.header'),
		dropdowns = parent.find('.dropdown'),
		links = parent.find('.dropdown__link');

	// Equal height to dropdown parts
	dropdowns.find('.dropdown__left').each(function () {
		$(this).outerHeight($(this).find('.dropdown__submenu').outerHeight());
	});

	links.each(function () {
		if ($(this).outerWidth() + $(this).find('.dropdown__submenu').outerWidth() > $(window).width() - $(this).offset().left ||
			$(this).outerWidth() + $(this).find('.dropdown__center').outerWidth() > $(window).width() - $(this).offset().left) {
			$(this).addClass('reverse');

			if ($(this).find('.dropdown__submenu').offset().left < 0) {
				$(this).removeClass('reverse').addClass('column');
				$(this).find('.dropdown__submenu').outerWidth($(window).width() - $(this).find('.dropdown__submenu').offset().left);
			}
		}
	});
});