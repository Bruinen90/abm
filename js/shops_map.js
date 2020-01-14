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
const addressBox = document.querySelector('.ourShops__addressBox');

const shopsMap = () => {
	const map = document.querySelector('.ourShops__map');
	if (!map) {
		return;
	}
	const allDots = map.querySelectorAll('.map__dot');
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
            <div class="ourShops__arrow" id="ourShopsArrow">
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
	let NewShopsLine = new DottedLine({
		startNodeId: activeDotId,
		endNodeId: 'ourShopsArrow',
		startPoint: { horizontal: 'center', vertical: 'center' },
		endPoint: { horizontal: 'left', vertical: 'center' },
		backgroundImg: './img/dots_horizontal.svg',
	});

	NewShopsLine.drawTheLine();

	allDots.forEach(dot => {
		dot.addEventListener('click', () => {
			activeDotId = dot.id;
			styleDots();
			setBoxContent();
			NewShopsLine.removeLine();
			NewShopsLine = new DottedLine({
				startNodeId: dot.id,
				endNodeId: 'ourShopsArrow',
				startPoint: { horizontal: 'center', vertical: 'center' },
				endPoint: { horizontal: 'left', vertical: 'center' },
				backgroundImg: './img/dots_horizontal.svg',
			});
			NewShopsLine.drawTheLine();
		});
	});
};
