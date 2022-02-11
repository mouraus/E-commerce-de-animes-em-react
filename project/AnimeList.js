
const BASE_URL = 'https://api.jikan.moe/v4/';


async function handlePopulateCards(setAnimeList,setAnimeTopList) {


    const responseAnimeList = await fetch(`${BASE_URL}anime?type=tv`);
    const responseTopAnimes = await fetch(`${BASE_URL}top/anime?type=tv&limit=10&page=4`);
    const dataAnime = await responseAnimeList.json();
    const dataTopAnimes = await responseTopAnimes.json();

    let IdNext = 1;

    const formattedTopAnimesList = [];
    const formattedAnimeList = [];

    for (const data of dataAnime.data) {

        formattedAnimeList.push({

            id: IdNext,
            title: data.title,
            image: data.images.jpg.image_url,
            price: 1039,
            quantity: 0

        });

        IdNext++;

    }

    for (const data of dataTopAnimes.data) {

        formattedTopAnimesList.push({

            id: IdNext,
            title: data.title,
            image: data.images.jpg.image_url,
            price: 2500,
            quantity: 0

        });

        IdNext++;

    }
    setAnimeTopList(formattedTopAnimesList);
    formattedAnimeList.push(...formattedTopAnimesList);
    setAnimeList(formattedAnimeList);
    console.log(formattedAnimeList.length);



}



export default handlePopulateCards();