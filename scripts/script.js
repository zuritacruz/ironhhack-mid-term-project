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
    const firstProjectImg = document.querySelector('.first-project .project-box-img');
    const beerOneImg = data[9].image_url;
    firstProjectImg.src=`${beerOneImg}`;
    const firstProjectTitle = document.querySelector('.first-project .project-box-heading');
    const beerOneTitle = data[9].name;
    firstProjectTitle.innerText = `${beerOneTitle}`;
    const firstProjectText = document.querySelector('.first-project .project-box-text');
    const beerOneText = data[9].tagline;
    firstProjectText.innerText = `${beerOneText}`;

    const secondProjectImg = document.querySelector('.second-project .project-box-img');
    const beerTwoImg = data[12].image_url;
    secondProjectImg.src=`${beerTwoImg}`;
    const secondProjectTitle = document.querySelector('.second-project .project-box-heading');
    const beerTwoTitle = data[12].name;
    secondProjectTitle.innerText = `${beerTwoTitle}`;
    const secondProjectText = document.querySelector('.second-project .project-box-text');
    const beerTwoText = data[12].tagline;
    secondProjectText.innerText = `${beerTwoText}`;

    const thirdProjectImg = document.querySelector('.third-project .project-box-img');
    const beerTheeImg = data[24].image_url;
    thirdProjectImg.src=`${beerTheeImg}`;
    const thirdProjectTitle = document.querySelector('.third-project .project-box-heading');
    const beerTheeTitle = data[24].name;
    thirdProjectTitle.innerText = `${beerTheeTitle}`;
    const thirdProjectText = document.querySelector('.third-project .project-box-text');
    const beerTheeText = data[24].tagline;
    thirdProjectText.innerText = `${beerTheeText}`;
}

beerCollection();
