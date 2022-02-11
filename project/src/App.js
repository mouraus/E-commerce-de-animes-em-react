import './App.css';
import AnimeList from './AnimeList';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';



function App() {


  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [animeTopList, setAnimeTopList] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  useEffect(() => {

    AnimeList(setAnimeList,setAnimeTopList);

  }, []);




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
    setCartItems(localAnimeList);



  }


  return (
    <div className="App">
      <Header
        handleSearchAnime={handleSearchAnime}
        searchTerm={searchTerm}
      />
      {animeList.length > 0 &&
        < div className='container'>

          <div className='products'>
            <Card
              SectionTitle={searchTerm !== "" ? '' : 'Top Animes'}
              searchResults={searchResults}
              animelist={searchTerm < 1 ? animeTopList : []}
              handleShoppingCart={handleShoppingCart} />




            <Card
              SectionTitle='Todos os Animes'
              animelist={searchTerm < 1 ? animeList : searchResults}
              handleShoppingCart={handleShoppingCart} />

          </div>

          <ShoppingCart
            cartItems={cartItems}
            animeList={animeList}
            handleShoppingCart={handleShoppingCart}
          />

        </div>
      }



      <footer>
        <div>Feito por Gabriel Moura</div>
        <div>Informações do site https://jikan.moe/</div>
      </footer>
    </div >
  );
}


export default App;
