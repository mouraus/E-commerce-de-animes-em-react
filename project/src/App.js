import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import animeList from './GetInfo';




function App() {



  
  return (

    <div className="App">
      <Header/>
      <div className='container'>

        <Card list={animeList} />

      </div>

      <footer>
        <div>Feito por Gabriel Moura</div>
        <div>Informações do site https://jikan.moe/</div>
      </footer>
    </div>
  );
}

export default App;
