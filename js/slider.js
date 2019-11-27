const arrowPrev = document.querySelector('.slider__arrow--prev');
const arrowNext = document.querySelector('.slider__arrow--next');
const photosCont = document.querySelector('.slider__imagesCont');

const photosCount = photosCont.querySelectorAll('img').length;

let currentPhoto = 0;
const firstImgWidth = photosCont
	.querySelectorAll('img')[0]
	.getBoundingClientRect().width;
const picPerScreen = window.innerWidth / firstImgWidth;

const changePhoto = direction => {
	if (currentPhoto + direction > -1) {
		currentPhoto += direction;
		let transformInPx = firstImgWidth * currentPhoto;
		const maxTransform =
			firstImgWidth * photosCount - picPerScreen * firstImgWidth;
		if (transformInPx > maxTransform) {
            transformInPx = maxTransform;
            currentPhoto -= direction;
		}
		photosCont.style.transform = `translateX(${-transformInPx}px)`;
	}
};

arrowPrev.addEventListener('click', () => changePhoto(-1));
arrowNext.addEventListener('click', () => changePhoto(1));
