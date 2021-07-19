$(document).ready(function() {
	var parent = $('.cookies'),
		btnAccept = parent.find('.cookies__button--accept'),
		btnClose = parent.find('.cookies__button--close');

	if (parent) {
		if (!Cookies.get('cookieAccepted')) {
			setTimeout(function () {
				parent.addClass('visible');
			}, 2000);

			btnAccept.click(function () {
				Cookies.set('cookieAccepted');
				parent.removeClass('visible');
			});

			btnClose.click(function () {
				parent.removeClass('visible');
			});
		}
	}
});