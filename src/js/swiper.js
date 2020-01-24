import * as $ from 'jquery';
import Swiper from 'swiper';


class SVGSwiperClass {

	constructor($contianer) {
		this.$swiperContainer = $contianer;

		this.KUTE = require('kute.js');
		const svg = require('kute.js/kute-svg.js')

		this.options = {
			easing: 'easingElasticOut',
			morphIndex: 4,
			duration: 1000,
		}

		this.initSlides();
	}

	init() {
		this.mySwiper = new Swiper('.swiper-container', {
			speed: 400,
			spaceBetween: 0,
			slidesPerView: 'auto',
			freeMode: false,
			loop: true,
			// centeredSlides: true,
			on: {
				slideChangeTransitionStart: (evt) => this.slideChangeTransitionStart(evt)
			}
		});
	}

	slideChangeTransitionStart(evt) {
		// Suppression du round.
		this.$swiperContainer.find('.rounded').each((i,n) => {
			n = $(n);
			const index = n.attr('data-index');
			n.removeClass('rounded');

			this.KUTE.to('#rectangle-'+index, {path: '#square-'+index}, this.options).start();
			console.log('nex' , index);
		})

		// Passage en mode round.
		const $svg = this.$swiperContainer.find('.swiper-slide-active [data-index]');
		const svgId = $svg.attr('data-index');
		$svg.addClass('rounded');
		this.KUTE.to('#rectangle-'+svgId, {path: '#round-'+svgId}, this.options).start();
	}

	initSlides() {
		for (var i = 0; i < 10; i++) {
			this.$swiperContainer.find('.swiper-wrapper').append(
				`
<div class="swiper-slide">
	<div class="text">Hello world c'est cool<br/>OK</div>
	<div class="wrapper">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600"
	     preserveAspectRatio="none" data-index="${i}">
			<clipPath id="my-clip-${i}">
				<path id="rectangle-${i}" class="rectangle"
				    d="m59.60425,24.95711l104.8191,-0.73403l117.44526,-0.73403l121.84944,2.2021l152.67883,0c23.97841,3.18081 42.81858,4.15952 45.51004,40.3718l-1.46807,106.43476l-1.46806,110.10493l1.46806,137.26414c0.14757,0.73401 0.14757,115.24313 0.14757,115.24313c0,-0.73403 -4.40419,36.70164 -40.3718,35.96761c-27.15921,1.46807 -152.67883,1.46807 -152.8264,0.73405c0.14757,0.73402 -117.29767,1.46805 -117.44525,0.73403c0.14758,0.73402 -145.92495,-2.20211 -145.92495,-2.20211c0,0 -107.90283,0.73404 -108.63686,0c-0.73403,-0.73404 -32.59262,-7.3403 -33.17906,-35.23356c-0.58644,-27.89326 -0.58645,-162.9553 -0.73403,-163.68932c0.14758,0.73402 -3.52258,-57.25457 -3.52258,-57.25457c0,0 -0.73403,-146.80656 -0.14759,-147.54059c-0.58644,0.73403 3.08372,-75.60538 2.93613,-76.33941c0.14759,0.73403 16.51574,-64.99632 58.87022,-65.32893z"/>
				<path id="square-${i}" style="visibility:hidden" class="bg-lime square"
				    d="m59.60425,24.95711l104.8191,-0.73403l117.44526,-0.73403l121.84944,2.2021l152.67883,0c23.97841,3.18081 42.81858,4.15952 45.51004,40.3718l-1.46807,106.43476l-1.46806,110.10493l1.46806,137.26414c0.14757,0.73401 0.14757,115.24313 0.14757,115.24313c0,-0.73403 -4.40419,36.70164 -40.3718,35.96761c-27.15921,1.46807 -152.67883,1.46807 -152.8264,0.73405c0.14757,0.73402 -117.29767,1.46805 -117.44525,0.73403c0.14758,0.73402 -145.92495,-2.20211 -145.92495,-2.20211c0,0 -107.90283,0.73404 -108.63686,0c-0.73403,-0.73404 -32.59262,-7.3403 -33.17906,-35.23356c-0.58644,-27.89326 -0.58645,-162.9553 -0.73403,-163.68932c0.14758,0.73402 -3.52258,-57.25457 -3.52258,-57.25457c0,0 -0.73403,-146.80656 -0.14759,-147.54059c-0.58644,0.73403 3.08372,-75.60538 2.93613,-76.33941c0.14759,0.73403 16.51574,-64.99632 58.87022,-65.32893z"/>
				<path id="round-${i}" style="visibility:hidden" class="round"
					d="m118.32688,105.70072c14.87614,-27.15921 62.78375,-22.75502 77.65989,-49.91423l85.88184,-33.03147l121.84944,2.93613l152.67883,0c23.97841,3.18081 42.81858,4.15952 45.51004,40.3718l-1.46807,106.43476l-1.46806,110.10493c0.48935,45.75471 -30.5847,95.17959 -63.86086,125.51962c-66.64941,77.80745 -54.90489,76.33938 -64.44731,85.14778c-9.54243,8.80839 -12.47855,13.94662 -28.62728,33.03148c-16.14872,19.08485 -14.24177,19.08488 -34.64712,28.6273c-20.40535,9.54241 -117.29767,18.3508 -117.44525,17.61678c0.14758,0.73402 -145.92495,-2.20211 -145.92495,-2.20211c0,0 -16.88275,-12.47856 -44.04197,-61.65876c-27.15922,-49.1802 -20.8481,-36.70162 -26.57277,-66.79697c-5.72467,-30.09535 7.92679,-39.63776 -16.88275,-70.46715c-24.80954,-30.82939 -11.59694,-19.8189 -17.4692,-61.65877c13.94662,-31.56341 16.58757,-35.9676 13.065,-72.66924c-3.52257,-36.70164 -0.1476,-46.24406 11.74452,-74.13731c11.89211,-27.89325 12.11155,-56.92196 54.46603,-57.25457z"/>
			</clipPath>
	<image clip-path="url(#my-clip-${i})" xlink:href="img-square.png" x="0" y="0" height="100%" width="100%"/>
	</svg></div></div>
`
			);
		}


	}
}


function init() {

	$('.swiper-container').each((i, n) => {
		new SVGSwiperClass($(n)).init();
	})
}

if (document.addEventListener) {
	document.addEventListener('DOMContentLoaded', init);
} else if (document.attachEvent) {
	document.attachEvent('DOMContentLoaded', init);
}
