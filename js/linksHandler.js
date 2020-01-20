const allOnClicks = document.querySelectorAll('[data-target]');
allOnClicks.forEach(link => {
	link.addEventListener('click', () => {
		document
			.querySelector(link.getAttribute('data-target'))
			.scrollIntoView({ behavior: 'smooth' });
	});
});
