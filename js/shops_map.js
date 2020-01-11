const SHOPS_DATA = {
	krakow: {
		title: 'Kraków',
		street: 'ul. Dobry początek 6',
		phone: '+48 12 296 47 00',
		email: 'info@abm.pl',
		subtitle: 'Dział handlowy',
		employees: [
			{
				name: 'Piotr',
				phone: '+48 515 212 301',
			},
			{
				name: 'Nikodem',
				phone: '+48 515 212 316',
			},
		],
	},
	lublin: {
		title: 'Lublin',
		street: 'ul.  Łęczyńska 43a',
		phone: '+48 12 296 47 00',
		email: 'info@abm.pl',
		subtitle: 'Dział handlowy',
		employees: [
			{
				name: 'Piotr',
				phone: '+48 515 212 301',
			},
			{
				name: 'Nikodem',
				phone: '+48 515 212 316',
			},
		],
	},
	modlniczka: {
		title: 'Modlniczka',
		street: 'ul. Kasztanowa 15',
		phone: '+48 12 296 47 00',
		email: 'info@abm.pl',
		subtitle: 'Dział handlowy',
		employees: [
			{
				name: 'Piotr',
				phone: '+48 515 212 301',
			},
			{
				name: 'Nikodem',
				phone: '+48 515 212 316',
			},
		],
	},
	rzeszow: {
		title: 'Rzeszów',
		street: 'ul. Hanasiewicza 16',
		phone: '+48 12 296 47 00',
		email: 'info@abm.pl',
		subtitle: 'Dział handlowy',
		employees: [
			{
				name: 'Piotr',
				phone: '+48 515 212 301',
			},
			{
				name: 'Nikodem',
				phone: '+48 515 212 316',
			},
		],
	},
	tarnow: {
		title: 'Tarnów',
		street: 'ul. Narutowicza 28',
		phone: '+48 12 296 47 00',
		email: 'info@abm.pl',
		subtitle: 'Dział handlowy',
		employees: [
			{
				name: 'Piotr',
				phone: '+48 515 212 301',
			},
			{
				name: 'Nikodem',
				phone: '+48 515 212 316',
			},
		],
	},
	katowice: {
		title: 'Katowice',
		street: 'ul. Kościuszki 227',
		phone: '+48 12 296 47 00',
		email: 'info@abm.pl',
		subtitle: 'Dział handlowy',
		employees: [
			{
				name: 'Piotr',
				phone: '+48 515 212 301',
			},
			{
				name: 'Nikodem',
				phone: '+48 515 212 316',
			},
		],
	},
};

let activeDotId = 'krakow';

const shopsLine = () => {
	const arrow = document.querySelector('.ourShops__arrow');
	const line = document.querySelector('.ourShops__mapLine');
	const adjustLine = (from, to, line) => {
		// Calculate starting point
		const fromPos = from.getBoundingClientRect();
		const fromTop = fromPos.y + fromPos.height / 2 + window.scrollY;
		const fromLeft = fromPos.x + fromPos.width / 2;
		line.style.top = fromTop + 'px';
		line.style.left = fromLeft + 'px';

		// Calculate ending point
		const toPos = to.getBoundingClientRect();
		const toTop = toPos.y + toPos.height / 2 + window.scrollY;
		// Just to starting-left point of arrow
		const toLeft = toPos.x;

		// Calculate length of line
		const triangleBase = Math.abs(fromLeft - toLeft);
		const triangleHeight = Math.abs(fromTop - toTop);
		const lineLenght = Math.sqrt(
			triangleBase * triangleBase + triangleHeight * triangleHeight
		);
		line.style.width = lineLenght + 'px';

		// Calculate rotation angle
		const angle = (180 / Math.PI) * Math.acos(triangleBase / lineLenght);
		line.style.transform = `rotate(${-angle}deg)`;
	};
	adjustLine(document.getElementById(activeDotId), arrow, line);
};

const shopsMap = () => {
	const map = document.querySelector('.ourShops__map');
	if (!map) {
		return;
	}
	const allDots = map.querySelectorAll('.map__dot');
	const addressBox = document.querySelector('.ourShops__addressBox');
	const styleDots = () =>
		allDots.forEach(d => {
			d.setAttribute('r', d.id === activeDotId ? '10' : '4');
			d.setAttribute(
				'fill',
				d.id === activeDotId ? '#8D3CD0' : '#141414'
			);
		});

	const setBoxContent = () => {
		const data = SHOPS_DATA[activeDotId];
		addressBox.innerHTML = `
            <div class="ourShops__arrow">
                <div class="arrow arrow--right"><div class="arrow__pointer"></div></div>
            </div>
            <h3 class="ourShops__addressTitle">${data.title}</h3>
            <div class="ourShops__subTitle">${data.street}</div>
            <a href="tel: ${data.phone}" class="ourShops__phone"
                >${data.phone}</a
            >
            <a href="mailto: ${data.email}" class="ourShops__mail"
                >${data.email}</a
            >
            <h3 class="ourShops__subTitle">${data.subtitle}</h3>
            
                ${data.employees
					.map(
						emp => `
                    <div class="ourShops__employeeCont">
                    <img src="./img/icons/phone__icon.svg"
                    class="ourShops__phoneIcon"
                />
                <span class="ourShops__employeeName">${emp.name}</span>
                <a href="tel: ${emp.phone}" class="ourShops__employeePhone">${emp.phone}</a>
                </div>`
					)
					.join('')}
        `;
	};

	styleDots();
	setBoxContent();
	shopsLine();

	allDots.forEach(dot => {
		dot.addEventListener('click', () => {
			activeDotId = dot.id;
			styleDots();
			setBoxContent();
			shopsLine();
		});
	});
};
window.onload = shopsMap;
