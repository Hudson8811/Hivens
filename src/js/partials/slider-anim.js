$(document).ready(function() {
	sliderAnim = new Swiper('.__js_slider-anim', {
		slidesPerView: 1,
		speed: 1500,
		effect: 'fade',
		pagination: {
			el: '.slider-anim__pagination',
			clickable: true
		},
		navigation: {
			prevEl: '.slider-prev',
			nextEl: '.slider-next'
		}
	});

	tl = new TimelineMax();

	tl
	.addPause()
	.addLabel('s0')
	.to('.slider-anim__image--1', 1.5, {
		x: -500
	}, 's0')
	.to('.anim-pic--1', 1.5, {
		scale: 0.7,
		transformOrigin:'bottom'
	}, 's0')
	.to('.anim-pic--2', 1.5, {
		scale: 0.5,
		transformOrigin: 'bottom'
	}, 's0')
	.to('.anim-pic--3', 1.5, {
		scale: 1.8,
		x: -10,
		transformOrigin: '72% 18% 0'
	}, 's0')
	.fromTo('.slider-anim__image--2', 1.5, {
		opacity: 0
	}, {
		opacity: 1
	}, 's0')
	.fromTo('.anim-pic--4', 1.5, {
		y: 250
	}, {
		y: 0
	}, 's0')
	.addPause()
	.addLabel('s1')
	.to('.anim-pic--3', 1.5, {
		y: -171,
		x: -90,
		opacity: 0.6,
		scale: 1.5
	}, 's1')
	.fromTo('.anim-pic--5', 1.5, {
		y: -300
	}, {
		y: 0
	}, 's1')
	.addPause()
	.addLabel('s2')
	.to('.slider-anim__image--2', 1.5, {
		opacity: 0
	}, 's2')
	.to('.anim-pic--3', 1.5, {
		y: -30,
		x: -244,
		scale: 1
	}, 's2')
	.to('.anim-pic--5', 1.5, {
		opacity: 0
	}, 's2')
	.to('.anim-pic--6', 1.5, {
		opacity: 1
	}, 's2')
	.to('.anim-pic--7', 1.5, {
		opacity: 1
	}, 's2')
	.addPause()
	.addLabel('3')
	.to('.anim-pic--1', 1.5, {
		x: 181,
		transformOrigin: 'bottom left',
		scale: 1.37
	}, 's3')
	.to('.anim-pic--2', 1.5, {
		x: 0,
		y: -50,
		scale: 1
	}, 's3')
	.to('.anim-pic--3', 1.5, {
		y: -90
	}, 's3')
	.to('.anim-pic--4, .anim-pic--6', 1.5, {
		x: -500
	}, 's3')
	.to('.anim-pic--7', 1.5, {
		x: window.innerWidth > 767 ? -266 : -131,
		y: window.innerWidth > 767 ? -81 : 100,
		scale: window.innerWidth > 1279 ? 0.4 : 0.3
	}, 's3')
	.fromTo('.anim-pic--8', 1.5, {
		x: 480
	}, {
		x: 0
	}, 's3')
	.fromTo('.anim-pic--9', 1.5, {
		y: 230
	}, {
		y: 0
	}, 's3')
	.addPause()
	.addLabel('4')
	.to('.anim-pic--10', 1.5, {
		opacity: 1
	}, 's4')
	.addPause()
	.addLabel('5')
	.to('.anim-pic--1', 1.5, {
		opacity: 0,
		y: 30
	}, 's5')
	.to('.anim-pic--2', 1.5, {
		opacity: 0,
		y: -20
	}, 's5')
	.to('.anim-pic--3', 1.5, {
		opacity: 0,
		y: -60
	}, 's5')
	.to('.anim-pic--7', 1.5, {
		x: window.innerWidth > 767 ? -184 : -82,
		y: window.innerWidth > 767 ? -25 : 140,
		scale: 0.2,
		opacity: 0
	}, 's5')
	.to('.anim-pic--8', 1.5, {
		scale: 0.53,
		transformOrigin: '65% 47%',
	}, 's5')
	.to('.anim-pic--9', 1.5, {
		opacity: 0
	}, 's5')
	.to('.anim-pic--10', 1.5, {
		opacity: 0
	}, 's5')
	.to('.anim-pic--11, .anim-pic--12, .anim-pic--13', 1.5, {
		opacity: 1
	}, 's5')
	.addPause()
	.addLabel('6')
	.to('.anim-pic--8, .anim-pic--11', 1.5, {
		y: -300,
		opacity: 0
	}, 's6')
	.to('.anim-pic--12, .anim-pic--13', 1.5, {
		opacity: 0
	}, 's6')
	.to('.anim-pic--14', 1.5, {
		opacity: 1
	}, 's6')
	.fromTo('.anim-pic--15', 1.5, {
		scale: 0
	}, {
		scale: 1
	}, 's6')
	.addPause()
	.addLabel('7')
	.to('.anim-pic--14', 1.5, {
		scale: 1.1,
		x: -17,
		y: -5
	}, 's7')
	.to('.anim-pic--15', 1.5, {
		x: -550
	}, 's7')
	.fromTo('.anim-pic--16', 1.5, {
		x: 500
	}, {
		x: 0
	}, 's7')
	.addPause()
	.addLabel('8')
	.to('.anim-pic--14', 1.5, {
		x: 450
	}, 's8')
	.to('.anim-pic--16', 1.5, {
		x: -550
	}, 's8')
	.fromTo('.anim-pic--17', 1.5, {
		scale: 0
	}, {
		scale: 1,
		opacity: 1
	}, 's8')
	.addPause()
	.addLabel('9')
	.to('.anim-pic--17', 1.5, {
		scale: 2,
		opacity: 0
	}, 's9')
	.to('.anim-pic--1', 1.5, {
		opacity: 1,
		x: 217,
		y: 30,
		scale: 0.97
	}, 's9')
	.to('.anim-pic--2', 1.5, {
		opacity: 1,
		scale: 0.85
	}, 's9')
	.to('.anim-pic--3', 1.5, {
		x: -130,
		y: -52
	}, 's9')
	.to('.anim-pic--3', 1.5, {
		opacity: 1
	}, 's9')
	.to('.anim-pic--9', 1.5, {
		opacity: 1,
		x: -21,
		y: -68,
		scale: 1.4
	}, 's9')
	.fromTo('.anim-pic--18', 1.5, {
		y: 150
	}, {
		y:0
	}, 's9')
	.fromTo('.anim-pic--19', 1.5, {
		scale: 0
	}, {
		scale: 1
	}, 's9')
	.addPause()
	.addLabel('10')
	.to('.anim-pic--1', 1.5, {
		y: -34,
		x: 280,
		scale: 0.7
	}, 's10')
	.to('.anim-pic--3', 1.5, {
		y: -181,
		x: -73,
		scale: 1.7
	}, 's10')
	.to('.anim-pic--9', 1.5, {
		x: 300
	}, 's10')
	.to('.anim-pic--18', 1.5, {
		y: -34
	}, 's10')
	.to('.anim-pic--19', 1.5, {
		opacity: 0
	}, 's10')
	.fromTo('.anim-pic--20', 1.5, {
		x: 320
	}, {
		x: 0
	}, 's10')
	.fromTo('.anim-pic--22', 1.9, {
		x: -380
	}, {
		x: 0
	}, 's10')
	.fromTo('.anim-pic--21', 1.5, {
		x: 320
	}, {
		x: 0
	}, 's10')
	.fromTo('.anim-pic--23', 1.9, {
		x: -380
	}, {
		x: 0
	}, 's10')
	.addPause()
	.addLabel('11')
	.to('.anim-pic--1, .anim-pic--2, .anim-pic--3', 1.5, {
		opacity: 0
	}, 's11')
	.to('.anim-pic--18', 1.5, {
		y: 150
	}, 's11')
	.to('.anim-pic--20', 1.5, {
		x: 320
	}, 's11')
	.to('.anim-pic--22', 1.5, {
		x: -380
	}, 's11')
	.to('.anim-pic--21', 1.5, {
		x: 320
	}, 's11')
	.to('.anim-pic--23', 1.5, {
		x: -380
	}, 's11')
	.fromTo('.anim-pic--24', 1.5, {
		y: -480
	}, {
		y: 0
	}, 's11')
	.addPause()
	.addLabel('12');

	tl.pause();

	sliderAnim.on('slideChange', function () {
		var active = sliderAnim.activeIndex,
			prev = sliderAnim.previousIndex,
			direction = prev < active ? 'next' : 'prev';

		if (direction == 'next') {
			tl.seek('s' + (active - 1)).play();
		} else if (direction == 'prev') {
			tl.seek('s' + (active + 1)).reverse();
		}
	});
});