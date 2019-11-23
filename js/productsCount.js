const number = document.querySelector('.productsCount__number');
const text = document.querySelector('.productsCount__text');

const historyImg = document.querySelector('.history__image');

const eventsCount = document.querySelector('.events__number');

const wagon = document.querySelector('.yearsOnMarket__wagon');
const yearsText = document.querySelector('.yearsOnMarket__text');
const train = document.querySelector('.yearsOnMarket__train');

const getElScroll = (el, startOnTop) => {
	const windowHeight = window.innerHeight;
	const elRec = el.getBoundingClientRect();
	const elPos = elRec.top + elRec.height * (startOnTop ? 0 : 1 / 2);
	if (elPos < windowHeight + elRec.height && elRec.bottom > elRec.height / 6) {
		return (200 * (elPos - windowHeight / 2)) / windowHeight;
	}
};

const animateCounter = () => {
	number.style.transform = `translateX(${getElScroll(number)}%)`;
	text.style.transform = `translateX(${-1 * getElScroll(number)}%)`;

	historyImg.style.transform = `translateY(${-0.15 *
		getElScroll(historyImg, true)}vh)`;

	if (window.innerWidth > 959) {
		eventsCount.style.transform = `translate(${-0.5 *
			Math.abs(getElScroll(eventsCount))}%, ${-0.5 *
			Math.abs(getElScroll(eventsCount))}%)`;
	}
	if (window.innerWidth < 960) {
		wagon.style.transform = `translate(${-0.346 *
			getElScroll(wagon, true)}vh, ${-0.2 * getElScroll(wagon, true)}vh)`;
		yearsText.style.transform = `translate(${0.346 *
			getElScroll(train)}vh, ${0.2 *
			getElScroll(train)}vh) rotate(30deg)`;
	} else {
        wagon.style.transform = `translate(${-0.692 *
			getElScroll(wagon, true)}vh, ${-0.4 * getElScroll(wagon, true)}vh)`;
		yearsText.style.transform = `translate(${0.692 *
			getElScroll(train)}vh, ${0.4 *
			getElScroll(train)}vh) rotate(30deg)`;
    }
};

window.addEventListener('scroll', animateCounter);
