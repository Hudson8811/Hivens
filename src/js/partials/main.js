$(window).on('load', function() {
	if ($('.select').length){
		$('.select').select2({
			minimumResultsForSearch: Infinity
		});
	}

	$(document).on('click','.tabs-switch__item',function (){
		let index = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.tabs-switch').next('.tabs-content').find('.tabs-content__item').eq(index).addClass('active').siblings().removeClass('active');
	});

	$(document).on('click','.accordion__title',function (){
		$(this).parent('.accordion').toggleClass('active').find('.accordion__text').slideToggle('300');
	});

	
	$('map').imageMapResize();
	

	const tokenSaleListItems = document.querySelectorAll('.token-sale__more-item-list li');

	if (tokenSaleListItems) {
		tokenSaleListItems.forEach(it => {
			const text = it.textContent;

			if (text.length > 22) {
				it.setAttribute('title', text);
				it.textContent = text.slice(0, 22).trim() + '...';
			}
		})
	}

	const first_screen_play = document.querySelector('.first-screen__play');
	const text_modal_first_screen = document.querySelector('.text-modal-first-screen');
	const text_modal_first_screen_close = document.querySelector('.text-modal-first-screen__close');
	const text_modal_first_screen_back = document.querySelector('.text-modal-first-screen__back');
	
	first_screen_play.addEventListener("click", function(e) {
		text_modal_first_screen.classList.add('js-text-modal-active');
	});
	text_modal_first_screen_close.addEventListener("click", function(e) {
		text_modal_first_screen.classList.remove('js-text-modal-active');
	});
	text_modal_first_screen_back.addEventListener("click", function(e) {
		text_modal_first_screen.classList.remove('js-text-modal-active');
	});
})