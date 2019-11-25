const arrowPrev = document.querySelector('.slider__arrow--prev');
const arrowNext = document.querySelector('.slider__arrow--next');

const photosCont = document.querySelector('.slider__imagesCont');

const photosCount = photosCont.querySelectorAll('img').length;

let currentPhoto = 0;

const changePhoto = (direction) => {
    const currImgWidth = photosCont.querySelectorAll('img')[0].getBoundingClientRect().width;
    console.log(currImgWidth)
    if(currentPhoto+direction > -1 && currentPhoto+direction < photosCount) {
        currentPhoto += direction;
        photosCont.style.transform = `translateX(${-currImgWidth*currentPhoto}px)`
        console.log('changing photo')
    }
}

arrowPrev.addEventListener('click', ()=>changePhoto(-1));
arrowNext.addEventListener('click', ()=>changePhoto(1));
