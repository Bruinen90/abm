const cellsArr = document.querySelectorAll('.welcome__text--number');
const numbersCont = document.querySelector('.welcome__button--desktop');

cellsArr.forEach(cell => {
	cell.addEventListener('mouseover', () => {
		const selectedNum = event.target.getAttribute('data-number');
		const allLinks = numbersCont.querySelectorAll('a');
		allLinks.forEach(link => {
			if (link.getAttribute('data-number') === selectedNum) {
				link.style.opacity = 1;
			} else {
				link.style.opacity = 0;
			}
		});
	});
});
