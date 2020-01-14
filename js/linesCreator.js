class DottedLine {
	constructor({
		startNodeId,
		endNodeId,
		startPoint,
		endPoint,
		backgroundImg,
	}) {
		this.startRectPos = document
			.getElementById(startNodeId)
			.getBoundingClientRect();
		this.endRectPos = document
			.getElementById(endNodeId)
			.getBoundingClientRect();
		this.startPoint = this.calculatePoint(this.startRectPos, startPoint);
		this.endPoint = this.calculatePoint(this.endRectPos, endPoint);
		this.lineLenght = this.calculateLineParams().length;
		this.rotation = this.calculateLineParams().rotation;
		this.backgroundImg = backgroundImg;
	}

	calculatePoint(rectPos, pointCoordinates) {
		const pos = { left: 0, top: 0 };
		switch (pointCoordinates.horizontal) {
			case 'left':
				pos.left = rectPos.x;
				break;
			case 'center':
				pos.left = rectPos.x + rectPos.width / 2;
				break;
			case 'right':
				pos.left = rectPos.x + rectPos.width;
				break;
			default:
				throw new Error(
					'Select proper start and end horizontal points and try again'
				);
		}
		switch (pointCoordinates.vertical) {
			case 'top':
				pos.top = rectPos.y + window.scrollY;
				break;
			case 'center':
				pos.top = rectPos.y + rectPos.height / 2 + window.scrollY;
				break;
			case 'bottom':
				pos.top = rectPos.y + rectPos.height + window.scrollY;
				break;
			default:
				throw new Error(
					'Select proper start and end vertical points and try again'
				);
		}
		return pos;
	}

	calculateLineParams() {
		const a = Math.abs(this.startPoint.left - this.endPoint.left);
		const b = Math.abs(this.startPoint.top - this.endPoint.top);
		const length = Math.sqrt(a * a + b * b);
		let rotation = (180 / Math.PI) * Math.acos(a / length);
		if (
			this.startPoint.left < this.endPoint.left &&
			this.startPoint.top > this.endPoint.top
		) {
			rotation *= -1;
		}
		return {
			length: length,
			rotation: rotation,
		};
	}

	drawTheLine() {
		const line = document.createElement('div');
		line.setAttribute('class', 'lineCreatedWithJS');
		line.style.width = this.lineLenght + 'px';
		line.style.height = '1px';
		line.style.position = 'absolute';
		line.style.transformOrigin = 'left';
		line.style.backgroundImage = `url(${this.backgroundImg})`;
		line.style.backgroundRepeat = 'repeat-X';
		line.style.top = this.startPoint.top + 'px';
		line.style.left = this.startPoint.left + 'px';
		line.style.transform = `rotate(${this.rotation}deg)`;
		line.style.zIndex = 1;
		document.body.appendChild(line);
		this.line = line;
	}

	removeLine() {
		document.body.removeChild(this.line);
	}
}

const drawRealizationLine = () => {
	const MissionLine = new DottedLine({
		startNodeId: 'realizationsArrow',
		endNodeId: 'missionLineEndPoint',
		startPoint: { horizontal: 'center', vertical: 'bottom' },
		endPoint: { horizontal: 'center', vertical: 'center' },
		backgroundImg: './img/dots_horizontal.svg',
	});
	window.innerWidth > 768 && MissionLine.drawTheLine();
};
