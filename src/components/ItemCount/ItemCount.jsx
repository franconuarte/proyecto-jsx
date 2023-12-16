import './ItemCount.css';
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock)
            setQuantity(quantity + 1)
    }


    const decrement = () => {
        if (quantity > 1)
            setQuantity(quantity - 1)
    }


    return (
        <div>
            <div className='boton'>
                <button className='mas-menos' onClick={decrement}>-</button>
                <h4 className='h4' >{quantity}</h4>
                <button className='mas-menos' onClick={increment}>+</button>
            </div>
            <div>

                <button onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div >
    )
}

export default ItemCount