const popupContainer = document.querySelector('.popup');
const popupCover = popupContainer.querySelector('.popup__cover');
const popupToggleButton = document.querySelector('.welcome__playButton')

popupToggleButton.addEventListener('click', () => popupContainer.classList.add('popup--visible'));
popupCover.addEventListener('click', () => popupContainer.classList.remove('popup--visible'));