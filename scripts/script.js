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
    const projectBoxImg = document.querySelector('.project-box .project-box-img')
    const beerOneImg = data[0].image_url;
    projectBoxImg.src=`${beerOneImg}`;
}

beerCollection();
