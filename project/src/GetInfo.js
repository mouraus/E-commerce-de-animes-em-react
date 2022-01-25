const axios = require("axios").default;


const animeList = [];
const instanceAxios = axios.get('https://api.jikan.moe/v4/top/anime', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
}
)

instanceAxios.then((response) => {
    for (const data of response.data.data) {

        animeList.push({

            title: data.title,
            image: data.images.jpg.image_url
        });
    };
    // console.log(`resposta`,animeList)

}).catch((error) => {
    console.error(`message:`,error);
});


export default animeList;