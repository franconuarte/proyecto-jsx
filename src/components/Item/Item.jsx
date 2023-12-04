import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({ id, name, img, price, stock }) => {

    return (
        <article className='CardItem'>
            <header>
                <h3>
                    {name}
                </h3>
            </header>
            <picture>
                <img className="ItemImg" src={img} alt={name} />
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>
                <p>
                    Stock disponible : {stock}
                </p>
            </section>
            <footer>

                <Link to={`/item/${id}`}>Ver detalle</Link>

            </footer>
        </article>

    )
}

export default Item