gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
	'(min-width: 769px)' : function() {
		gsap.from('.hero-text p', {
			scrollTrigger : {
				toggleActions : 'play none restart restart',
				trigger       : '.hero-text'
			},
			opacity       : 0,
			delay         : 1.1,
			z             : 100,
			duration      : 2,
			stagger       : 0.5
		});

		gsap.from('.moon', {
			scrollTrigger : {
				toggleActions : 'play none restart restart',
				trigger       : '.moon'
			},
			opacity       : 0,
			duration      : 4,
			delay         : 3
		});

		gsap.to('.moon1', {
			delay    : 3,
			rotation : 360,
			duration : 3
		});

		gsap.from('.cloud1', {
			opacity  : 0,
			duration : 3,
			x        : -400,
			duration : 4,
			delay    : 3
		});

		gsap.from('.cloud2', {
			opacity  : 0,
			duration : 3,
			x        : 400,
			duration : 4,
			delay    : 3
		});

		gsap.from('.info-btn', {
			scrollTrigger : {
				toggleActions : 'play none reverse restart',
				trigger       : '.info',
				start         : '20% center',
				end           : '30% center',
				scrub         : true
			},
			opacity       : 0,
			duration      : 2,
			y             : 400
		});

		gsap.from('.lorem', {
			scrollTrigger : {
				toggleActions : 'play none reverse restart',
				trigger       : '.info',
				start         : '0% bottom',
				end           : '30% center',
				scrub         : true
			},
			opacity       : 0,
			duration      : 2,
			x             : 200
		});

		gsap.from('.pic', {
			scrollTrigger : {
				toggleActions : 'play none reverse restart',
				trigger       : '.info',
				start         : '0% bottom',
				end           : '30% center',
				scrub         : true
			},
			opacity       : 0,
			duration      : 1,
			y             : 200
		});

		gsap.from('.info2-title', {
			scrollTrigger : {
				toggleActions : 'play none none reverse',
				trigger       : '.info2',
				start         : '0% bottom',
				end           : '20% center',
				scrub         : 0.5
			},
			opacity       : 0,
			duration      : 5,
			z             : -200
		});

		gsap.from('.logo', {
			scrollTrigger : {
				toggleActions : 'play none reverse restart',
				trigger       : '.info2',
				start         : '0% bottom',
				end           : '20% center',
				scrub         : 0.5
			},
			opacity       : 0,
			duration      : 2,
			x             : -200
		});

		gsap.from('.info3', {
			scrollTrigger : {
				toggleActions : 'play none none reverse',
				trigger       : '.info3',
				start         : '0% center',
				end           : '20% center',
				scrub         : 0.5
			},
			opacity       : 0,
			duration      : 2,
			z             : 200,
			delay         : 0
		});

		gsap.from('.line-1', {
			scrollTrigger : {
				toggleActions : 'play none none reverse',
				trigger       : '.info3',
				start         : '0% bottom',
				end           : '20% center',
				scrub         : 0.5
			},
			opacity       : 0,
			duration      : 2,
			z             : 200,
			delay         : 0
		});

		gsap.from('.summary', {
			scrollTrigger : {
				toggleActions : 'play none reverse restart',
				trigger       : '.info2',
				start         : '0% bottom',
				end           : '20% center',
				scrub         : 0.5
			},
			opacity       : 0,
			duration      : 2,
			x             : 200,
			delay         : 0.4
		});

		gsap.from('.tooltip', {
			scrollTrigger : {
				toggleActions : 'play none none reverse',
				trigger       : '.info3',
				start         : '0% bottom',
				end           : '10% center',
				scrub         : 3
			},
			y             : 400,
			opacity       : 0,
			duration      : 1,
			stagger       : 0.2
		});

		gsap.from('.links', {
			scrollTrigger : {
				toggleActions : 'play none none reverse',
				trigger       : '.info3',
				start         : '0% center',
				end           : '10% center',
				scrub         : 1
			},
			y             : 400,
			opacity       : 0,
			duration      : 1
		});
	}
});

function myFunction() {
	let dots = document.getElementById('dots');
	let moreText = document.getElementById('more');
	let btnText = document.getElementById('myBtn');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}

function myFunction2() {
	let dots = document.getElementById('dots2');
	let moreText = document.getElementById('more2');
	let btnText = document.getElementById('myBtn2');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}

function myFunction3() {
	let dots = document.getElementById('dots3');
	let moreText = document.getElementById('more3');
	let btnText = document.getElementById('myBtn3');

	if (dots.style.display === 'none') {
		dots.style.display = 'inline';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'inline';
	}
}

$(document).ready(function() {
	$('.button a').click(function() {
		$('.overlay').fadeToggle(200);
		$(this).toggleClass('btn-open').toggleClass('btn-close');
	});
});
$('.overlay').on('click', function() {
	$('.overlay').fadeToggle(200);
	$('.button a').toggleClass('btn-open').toggleClass('btn-close');
	open = false;
});
