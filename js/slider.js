const arrowPrev = document.querySelector('.slider__arrow--prev');
const arrowNext = document.querySelector('.slider__arrow--next');
const photosCont = document.querySelector('.slider__imagesCont');
const photosCount = photosCont.querySelectorAll('img').length;

let currentPhoto = 0;
const firstImgWidth = photosCont
	.querySelectorAll('img')[0]
	.getBoundingClientRect().width;
const picPerScreen = window.innerWidth / firstImgWidth;
let transformInPx = 0;

const changePhoto = direction => {
	if (currentPhoto + direction > -1) {
        arrowNext.style.opacity = '1';
		arrowPrev.style.opacity = '1';
		currentPhoto += direction;
		transformInPx = firstImgWidth * currentPhoto;
		const maxTransform =
			firstImgWidth * photosCount - picPerScreen * firstImgWidth;
		if (transformInPx > maxTransform) {
			transformInPx = maxTransform;
			currentPhoto -= direction;
        }
        transformInPx === maxTransform ? arrowNext.style.opacity = '0.5' : null;
        transformInPx === 0 ? arrowPrev.style.opacity = '0.5' : null;
		photosCont.style.transform = `translateX(${-transformInPx}px)`;
	}
};

arrowPrev.addEventListener('click', () => changePhoto(-1));
arrowNext.addEventListener('click', () => changePhoto(1));

// Swipe handler
const photosSwiper = new Hammer(document.querySelector('.gallery__sliderCont'));
photosSwiper.get('pan').set({ direction: Hammer.DIRECTION_VERTICAL, threshold: 5 });
photosSwiper.on("panleft panright", (ev) => {
    if(ev.type === 'panleft') {
        changePhoto(1)
    } else {
        changePhoto(-1)
    }
} )