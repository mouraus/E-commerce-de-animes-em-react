import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';



function App() {

  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {

    handlePopulateCards();

  }, []);


  async function handlePopulateCards() {

    const BASE_URL = 'https://api.jikan.moe/v4/';

    const response = await fetch(`${BASE_URL}top/anime`);

    const dataAnime = await response.json();

    let IdNext = 1;

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
    setAnimeList(formattedAnimeList);

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

      <Header />
      <div className='container'>

        <div className='cards'>
          <Card animelist={animeList} handleShoppingCart={handleShoppingCart} />
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
