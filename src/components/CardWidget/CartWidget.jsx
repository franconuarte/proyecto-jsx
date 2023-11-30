import cart from './assets/carrito.png';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div>
            <img className="carrito" src={cart} alt="carrito" />
            0
        </div>
    )
}

export default CartWidget