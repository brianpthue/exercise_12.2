var navButton = document.querySelector('.nav-icon');
	navButton.addEventListener('click', function() {
		console.log('open the navigation');
		document
		.querySelector('body')
		.classList
		.toggle('nav-open');
	});

var closeButton = document.querySelector('.close-icon');
	closeButton.addEventListener('click', function() {
		console.log('close the navigation');
		document
			.querySelector('body')
			.classList
			.toggle('nav-open');
	});