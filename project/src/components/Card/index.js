import './style.css';


function Card({ animelist, handleShoppingCart }) {


    return (

        <>
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

        </>
    );

}



export default Card;