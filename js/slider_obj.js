class Slider {
	constructor(data) {
		this.container = document.querySelector(`#${data.containerId}`);
		this.marginWidth = data.marginWidth;
		this.slideDuration = data.slideDuration;
		this.slideWidth = data.slideWidth;
		this.minSlidesOnScreen = data.minSlidesOnScreen;
		this.currSlide = 0;
		this.slidesCount =
			this.container &&
			this.container.querySelectorAll('.logos__slide').length;
		this.maxSlide = this.slidesCount;
		if (data.minSlidesOnScreen && window.innerWidth > 768) {
			this.maxSlide =
				this.slidesCount -
				(this.slidesCount % this.minSlidesOnScreen) -
				1;
		}
	}

	changeSlide(targetSlide) {
		if (targetSlide < 0) {
			this.currSlide = this.slidesCount - 1;
		} else if (targetSlide >= this.maxSlide) {
			this.currSlide = 0;
		} else {
			this.currSlide = targetSlide;
		}

		this.container.style.transform = `translateX(calc(${-this.currSlide *
			(this.container.querySelectorAll('.logos__slide')[this.currSlide]
				.offsetWidth +
				this.marginWidth)}px)`;
	}

	startSlideShow() {
		if (!this.container) {
			return;
		}
		let showTime = setInterval(
			() => this.changeSlide(this.currSlide + 1),
			this.slideDuration
		);
		const resetInterval = () => {
			clearInterval(showTime);
			showTime = setInterval(
				() => this.changeSlide(this.currSlide + 1),
				this.slideDuration
			);
		};
		const swipeHandler = new Hammer(this.container);
		swipeHandler.on('swipeleft', () => {
			this.changeSlide(this.currSlide + 1);
			resetInterval();
		});
		swipeHandler.on('swiperight', () => {
			this.changeSlide(this.currSlide - 1);
			resetInterval();
		});
		return showTime;
	}
}

const logosSlider = new Slider({
	containerId: 'logos-slider',
	marginWidth: 80,
	slideDuration: 3500,
	slideWidth: 20,
	minSlidesOnScreen: 1,
});

window.innerWidth < 768 && logosSlider.startSlideShow();
