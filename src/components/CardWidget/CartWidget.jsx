import cart from './assets/carrito.png';
import estilos from './CartWidget.css';

const CartWidget = () => {
    return (
        <div>
            <img class="carrito" src={cart} alt="carrito" />
            0
        </div>
    )
}

export default CartWidget