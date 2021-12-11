//import $ from 'jquery'; window.jQuery = $; window.$ = $ 


document.addEventListener('DOMContentLoaded', () => {

	let
		circle = document.querySelectorAll('.circle'),
		content = document.querySelector('.main-content'),
		header = document.querySelector('.header'),
		hamburger = document.querySelector('.hamburger'),
		menu = document.querySelector('.nav-menu');


	hamburger.addEventListener('click', () => {
		if (!hamburger.classList.contains('is-active')) {
			hamburger.classList.add('is-active');
			content.classList.add('hidden');
			header.classList.add('header-active');
			menu.classList.add('open-menu');
			// if (document.querySelector('.artist-video')) {
			// 	let artist = document.querySelector('.artist-video');
			// 	artist.classList.add('animate__animated', 'animate__bounceOut');
			// }
			setTimeout(() => {
				content.classList.add('none');
			}, 500)



			// circle
			
			circle.forEach(item => {
				item.classList.add('circle-active');
			})
		} else {
			hamburger.classList.remove('is-active');
			header.classList.remove('header-active');
			content.classList.remove('none');
			menu.classList.remove('open-menu');

			// if (document.querySelector('.artist-video')) {
			// 	let artist = document.querySelector('.artist-video');
			// 	artist.classList.remove('animate__bounceOut');
			// 	artist.classList.add('animate__bounceIn');
			// }

			setTimeout(() => {
				content.classList.remove('hidden');
			}, 500)
			circle.forEach(item => {
				item.classList.remove('circle-active');
			})
		}
	})


	/// open & animation modal
	// const 
	// 		body = document.querySelector('body'),
	// 		close = document.querySelector('.close'),
	// 		linkModal = document.querySelector('.modal-open'),
	// 		windowModal = document.querySelector('#windowModal');
	// if(windowModal.classList.contains('hidden') != true) {
	// 	windowModal.classList.add('hidden');
	// }
	// function modal(event) {
	// 	let bgModal = document.createElement('div'); // create new ellement (DOM)
	// 	bgModal.classList.add('overflow_bg'); 
	// 	if(event.target == linkModal.firstElementChild) { // click for link
	// 		event.preventDefault();
	// 		body.appendChild(bgModal);
	// 		windowModal.classList.remove('hidden','animate__zoomOutUp');
	// 		windowModal.classList.add('animate__zoomInUp');

	// 	}
	// 	if (windowModal.classList.contains('hidden') == false) {
	// 		if(event.target == close || event.target == bgModal) {
	// 			windowModal.classList.add('animate__zoomOutUp');
	// 			windowModal.classList.remove('animate__zoomInUp');
	// 			setTimeout(() => {
	// 				windowModal.classList.add('hidden');
	// 				document.querySelector('.overflow_bg').remove();	
	// 			},1000)

	// 		}

	// 	}
	// }
	// window.addEventListener('click', modal);





})
