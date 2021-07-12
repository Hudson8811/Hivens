$(document).ready(function() {
	var parent = $('.cookies'),
		btnAccept = $('.cookies__button--accept');

	if (parent) {
		if (!Cookies.get('cookieAccepted')) {
			setTimeout(function () {
				parent.addClass('visible');
			}, 2000);

			btnAccept.click(function () {
				Cookies.set('cookieAccepted');
				parent.removeClass('visible');
			});
		}
	}
});