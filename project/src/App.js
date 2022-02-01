import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';



function App() {
  const BASE_URL = 'https://api.jikan.moe/v4/';

  const [animeList, setAnimeList] = useState([]);
  const [animeTopList, setAnimeTopList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

    handlePopulateCards();

  }, []);


  async function handlePopulateCards() {


    const responseAnimeList = await fetch(`${BASE_URL}anime?type=tv`);
    const responseTopAnimes = await fetch(`${BASE_URL}top/anime?type=tv&limit=4`);
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

  function handleSearchAnime(searchTerm) {
    setSearchTerm(searchTerm);

    if (searchTerm !== "") {
      const newAnimeList = animeList.filter((anime) => {

        return anime
          .title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      });
      setSearchResults(newAnimeList);
    }
    else {
      setSearchResults(animeList);
    }

  }


  function handleShoppingCart(value, animeId) {

    const localAnimeList = [...animeList];
    const indexAnime = localAnimeList.findIndex(anime => anime.id === animeId);

    if (indexAnime === -1) {
      return;
    }

    const newQuantity = localAnimeList[indexAnime].quantity + value;

    if (newQuantity >= 0) {

      localAnimeList[indexAnime].quantity = newQuantity;

    }

    setAnimeList([...localAnimeList]);



  }


  return (
    <div className="App">
      <Header
        handleSearchAnime={handleSearchAnime}
        searchTerm={searchTerm}
      />
      <div className='container'>
        <div className='cards'>

          <div className='animeList__row'>
            <h1>Top Animes</h1>
            <div className='animes'>
              <Card
                animelist={searchTerm < 1 ? animeTopList : searchResults}
                handleShoppingCart={handleShoppingCart} />
            </div>
          </div>

          <div className='animeList'>
            <h1 className='all__animes__title'>Todos os Animes</h1>
            <div className='all__animes'>
              <Card
                animelist={searchTerm < 1 ? animeList : searchResults}
                handleShoppingCart={handleShoppingCart} />
            </div>
          </div>

        </div>

        <ShoppingCart animeList={animeList} handleShoppingCart={handleShoppingCart} />

      </div>


      <footer>
        <div>Feito por Gabriel Moura</div>
        <div>Informações do site https://jikan.moe/</div>
      </footer>
    </div>
  );
}


export default App;
