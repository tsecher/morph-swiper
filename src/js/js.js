const init = function () {
	let KUTE = require('kute.js');
	const svg = require('kute.js/kute-svg.js')


	const button = document.querySelector('button');
	button.addEventListener('click', onClick);

	const img = document.querySelector('.wrapper');
	console.log(img);


	const options = {
		easing: 'easingElasticOut',
		// easing: 'bezier(0,.8,0,1)',
		morphIndex: 4,
		duration: 1000,

	};

	let state = 'square';

	function onClick() {


		KUTE.to('#rectangle-1', {path: '#round-1'}, options).start();

		// if (state === 'square') {
		// 	KUTE.to('#rectangle', {path: '#star'}, options).start();
		// 	state = 'round';
			img.setAttribute('class', 'round')
			// console.log(img.className)
			// img.className += ' round ';
			// console.log('to round')
		// } else {
		// 	console.log('to square')
		// 	KUTE.to('#rectangle', {path: '#square'}, options).start();
		// 	state = 'square';
		// 	img.className = img.className.split(' round ').join('');
		// }
	}
};


if (document.addEventListener) {
	document.addEventListener('DOMContentLoaded', init);
} else if (document.attachEvent) {
	document.attachEvent('DOMContentLoaded', init);
}

