import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

import { CartContext } from '../context/CartContext'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)


        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <article className='article'>
            <header className='centrar'>
                <h2>
                    {name}
                </h2>
            </header>
            <picture className='centrar'>
                <img className='img' src={img} alt={name} />
            </picture>
            <section className='section'>
                <h3>
                    Stock: {stock}
                </h3>
                <p >
                    Categoria: {category}
                </p>
                <p >
                    Descripcion: {description}
                </p>
                <p >
                    Precio: ${price}
                </p>
            </section>
            <footer className='centrar'>
                {
                    quantityAdded > 0 ? (
                        <Link to="/cart">Terminar compra</Link>
                    ) : (
                        <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )

}

export default ItemDetail