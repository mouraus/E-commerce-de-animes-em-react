import './style.css';
import { useRef } from 'react';

function Header({ handleSearchAnime, searchTerm }) {

    const inputEl = useRef("");
    const getSearchTerm = () => {
        handleSearchAnime(inputEl.current.value);
    }


    return (
        <>
            <header>
                <h1>Lorem Animes</h1>
                <input ref={inputEl}

                    type="text"
                    placeholder='Pesquise Aqui...'
                    value={searchTerm}
                    onChange={getSearchTerm} />

            </header>

        </>
    )
}

export default Header;