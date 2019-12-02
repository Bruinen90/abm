const realizationsSection = document.querySelector('.realizations');
const realizationsList = document.querySelector('.realizations__list');

const handleClickItem = item => {
	const element = realizationsSection.querySelector(`#${item}`);
	element.scrollIntoView({ behavior: 'smooth', block: 'center' });
	realizationsSection
		.querySelectorAll('.realizations__cell')
		.forEach(i => i.classList.remove('realizations__cell--active'));
	element.classList.add('realizations__cell--active');
};

realizationsList.querySelectorAll('li').forEach(item => {
	item.addEventListener('click', () => handleClickItem(item.dataset.id));
});
