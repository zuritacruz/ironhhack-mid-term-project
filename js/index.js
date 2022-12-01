const beerCollection = async () => {
	try {
		const response = await fetch('https://api.punkapi.com/v2/beers');
		const data = await response.json();
		console.log(data);
		paintData(data);
	} catch (error) {
		return error;
	}
};

const paintData = (data) => {
	const randomNums = [];
	while (randomNums.length < 3) {
		const random = Math.floor(Math.random() * data.length);
		if (
			data[random].name.length <= 20 &&
			data[random].tagline.length <= 30 &&
			!randomNums.includes(random)
		) {
			randomNums.push(random);
		}
	}

	randomNums.forEach((cervezaIndex, index) => {
		const projectBox = ['.first-project', '.second-project', '.third-project'];
		const projectImg = document.querySelector(
			`${projectBox[index]} .project-box-img`
		);
		const beerImg = data[cervezaIndex].image_url;
		projectImg.src = beerImg;
		const projectHeading = document.querySelector(
			`${projectBox[index]} .project-box-heading`
		);
		const beerName = data[cervezaIndex].name;
		projectHeading.innerText = beerName;
		const projectText = document.querySelector(
			`${projectBox[index]} .project-box-text`
		);
		const beerText = data[cervezaIndex].tagline;
		projectText.innerText = beerText;

		const learnLink = document.querySelector(
			`${projectBox[index]} .project-learn-more`
		);
		learnLink.href = `./project-page.html?id=${data[cervezaIndex].id}`;
	});
};

beerCollection();
