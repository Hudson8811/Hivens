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

	const text_modal_btn = document.querySelector('.text-modal-btn');
	const text_modal_first_screen = document.querySelector('.text-modal-first-screen');
	const text_modal_first_screen_close = document.querySelector('.text-modal-first-screen__close');
	const text_modal_first_screen_back = document.querySelector('.text-modal-first-screen__back');
	const body_ovh = document.querySelector('body');
	text_modal_btn.addEventListener("click", function(e) {
		text_modal_first_screen.classList.add('js-text-modal-active');
		body_ovh.style.cssText=`overflow: hidden`;
	});
	text_modal_first_screen_close.addEventListener("click", function(e) {
		text_modal_first_screen.classList.remove('js-text-modal-active');
		body_ovh.style.cssText=`overflow: visible`;
	});
	text_modal_first_screen_back.addEventListener("click", function(e) {
		text_modal_first_screen.classList.remove('js-text-modal-active');
		body_ovh.style.cssText=`overflow: visible`;
	});
})