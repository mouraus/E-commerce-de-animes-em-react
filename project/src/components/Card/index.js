import './style.css';


function Card({ animelist, handleShoppingCart, SectionTitle }) {


    return (
        <>
            <div className='section__title'>
                <h1>{SectionTitle}</h1>
            </div>
            
            <div className='animeList__row'>

            {animelist.map((item) => (

                <div key={item.id} className='card'>

                    <h2>{item.title}</h2>
                    <img src={item.image} alt='capa do anime`' />

                    <div className='container__buttons'>

                        <div className='price' >R${((item.price) / 100).toFixed(2)}</div>
                        <button className='add__anime__button' onClick={() => handleShoppingCart(1, item.id)}>Adicionar ao Carrinho</button>


                    </div>
                </div>
            ))}
                </div>

        </>
    );

}



export default Card;