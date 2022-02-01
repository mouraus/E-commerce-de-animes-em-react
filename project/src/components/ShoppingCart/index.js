import './style.css';

function ShoppingCart({ animeList, handleShoppingCart }) {


    return (
        <>
            <div className="container__shopping__cart">

                <div className='empty__shopping__cart'>
                    <h2 className='shopping__cart'>Carrinho de Compras</h2>
                </div>


                {animeList.map((item) => (


                    <>

                        {item.quantity > 0 &&

                            <div key={item.id} className="card__inner__container"  >


                                <h6>{item.title}</h6>

                                <img src={item.image} alt="capa do anime" />

                                <div className='container__cart__features'>

                                    <div className='price'>R${((item.price * item.quantity) / 100).toFixed(2)}</div>

                                    <div className='feature__container'>
                                        <div className='quantity'>x{item.quantity}</div>
                                        <button className='add__button' onClick={() => handleShoppingCart(1, item.id)}>+</button>
                                        <button className='remove__button' onClick={() => handleShoppingCart(-1, item.id)}>-</button>

                                    </div>


                                </div>

                            </div >
                        }

                    </>

                ))}
                <div className="container__finishing__button">
                    <button className='finished' onClick={() => window.location.href = window.location.href}>Finalizar Compra</button>
                </div>
            </div >

        </>


    );
}


export default ShoppingCart;