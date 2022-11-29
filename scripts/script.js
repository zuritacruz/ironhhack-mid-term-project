const beerCollection = async() => {
    try {
        const response = await fetch('https://api.punkapi.com/v2/beers');
        const data = await response.json();
        console.log(data)
        paintData(data);

    } catch(error) {
        return error;
    }
}

const paintData = (data) => {
    const randomNums = [];
    while (randomNums.length < 3) {
        const random = Math.floor(Math.random() * data.length);
        if (data[random].name.length <= 20 && data[random].tagline.length <= 30 && !randomNums.includes(random)) {
            randomNums.push(random)
        }
    }

    const firstProjectImg = document.querySelector('.first-project .project-box-img');
    const beerOneImg = data[randomNums[0]].image_url;
    firstProjectImg.src=`${beerOneImg}`;
    const firstProjectTitle = document.querySelector('.first-project .project-box-heading');
    const beerOneTitle = data[randomNums[0]].name;
    firstProjectTitle.innerText = `${beerOneTitle}`;
    const firstProjectText = document.querySelector('.first-project .project-box-text');
    const beerOneText = data[randomNums[0]].tagline;
    firstProjectText.innerText = `${beerOneText}`;

    const secondProjectImg = document.querySelector('.second-project .project-box-img');
    const beerTwoImg = data[randomNums[1]].image_url;
    secondProjectImg.src=`${beerTwoImg}`;
    const secondProjectTitle = document.querySelector('.second-project .project-box-heading');
    const beerTwoTitle = data[randomNums[1]].name;
    secondProjectTitle.innerText = `${beerTwoTitle}`;
    const secondProjectText = document.querySelector('.second-project .project-box-text');
    const beerTwoText = data[randomNums[1]].tagline;
    secondProjectText.innerText = `${beerTwoText}`;

    const thirdProjectImg = document.querySelector('.third-project .project-box-img');
    const beerTheeImg = data[randomNums[2]].image_url;
    thirdProjectImg.src=`${beerTheeImg}`;
    const thirdProjectTitle = document.querySelector('.third-project .project-box-heading');
    const beerTheeTitle = data[randomNums[2]].name;
    thirdProjectTitle.innerText = `${beerTheeTitle}`;
    const thirdProjectText = document.querySelector('.third-project .project-box-text');
    const beerTheeText = data[randomNums[2]].tagline;
    thirdProjectText.innerText = `${beerTheeText}`;
}

beerCollection();
