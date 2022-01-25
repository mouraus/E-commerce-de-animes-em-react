import './style.css';


function Card({ list }) {


    return (

        <>
            {list.map((item) => (

                <div className='card'>

                    <h2>{item.title}</h2>
                    <img src={item.image} alt='capa do anime`' />
                </div>
            ))}

        </>
    );

}



export default Card;