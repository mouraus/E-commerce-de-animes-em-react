import './style.css';
import { Fragment } from 'react';
function ShoppingCart({ cartItems, animeList, handleShoppingCart }) {

  const itemsTotalPrice = cartItems.reduce((acc, currentValue) => acc + currentValue.price * currentValue.quantity, 0);
  const itemsOrder = cartItems.sort((a, b) => b.quantity * b.price - a.quantity * a.price);




  return (
    <>
      < div className="container__shopping__cart">
        <div className='header__shopping__cart'>
          <h2 className='shopping__cart'>Carrinho de Compras</h2>
          {itemsTotalPrice === 0 && <div className='empty__cart'>Carrinho Vazio</div>}

        </div>

        {itemsOrder &&
          cartItems.map((item) => (


            <Fragment key={item.id}>

              {item.quantity > 0 &&

                <div key={item.id} className="card__inner__container"  >


                  <h3>{item.title}</h3>

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

            </Fragment>

          ))}

        <div className="container__finishing__button">
          {itemsTotalPrice > 0 &&
            <div className='total__price'><strong>Total:R${(itemsTotalPrice / 100).toFixed(2)}</strong></div>}
          
          {itemsTotalPrice > 0 &&

            < button className='finished' onClick={(ev) => {
              if (ev.currentTarget.onclick) {
                window.location.reload();
                alert('Compra Realizada com sucesso!!!');
              }
            }

            }>Finalizar Compra</button>

          }
      
        </div>
      </div >
    </>
  );
}



export default ShoppingCart;