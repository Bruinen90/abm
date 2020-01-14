const cellsArr = document.querySelectorAll('.welcome__text--number');
const numbersCont = document.querySelector('.welcome__button--desktop');
const allLinks = numbersCont.querySelectorAll('a');

cellsArr.forEach(cell => {
	cell.addEventListener('mouseover', () => {
		const selectedNum = event.target.getAttribute('data-number');
		allLinks.forEach(link => {
			if (link.getAttribute('data-number') === selectedNum) {
				link.style.opacity = 1;
			} else {
				link.style.opacity = 0;
			}
		});
	});
	cell.addEventListener('mouseout', () => {
		allLinks.forEach(link => {
			link.style.opacity = 0;
		});
	});
});
