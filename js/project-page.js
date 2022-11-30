const initPage = async () => {
	const urlParams = new URLSearchParams(window.location.search);
	const myParam = urlParams.get('id');
	let beer;

	try {
		const response = await fetch(`https://api.punkapi.com/v2/beers/${myParam}`);
		beer = await response.json();
		console.log(beer);
	} catch (error) {
		return error;
	}

	const beerProjectName = document.querySelector(`.project-info-heading`);
	beerProjectName.innerText = beer[0].name;
	const beerProjectText = document.querySelector(`.project-info-subheading`);
	beerProjectText.innerText = beer[0].tagline;
	const beerProjectDate = document.querySelector(`.project-info-date-day`);
	beerProjectDate.innerText = beer[0].first_brewed;
	const beerProjectImg = document.querySelector(`.project-info-img`);
	beerProjectImg.src = beer[0].image_url;
	const beerProjectDescription = document.querySelector(`.project-info-text`);
	beerProjectDescription.innerText = beer[0].description;
};

initPage();
