import { useContext } from 'react';
import cart from './assets/carrito.png';
import './CartWidget.css';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img className="carrito" src={cart} alt="carrito" />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget