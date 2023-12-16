import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';


const Cart = () => {
    const { cart, clearCart } = useContext(CartContext);


    if (cart.length === 0) {
        return (
            <div>
                <h1 className='centrar'>No hay productos en el carrito</h1>
                <button className='boton' to="/"> Volver al inicio</button>
            </div>
        );
    }

    return (
        <div>
            {cart.map((item) => <CartItem key={item.item.id} item={item} />)}
            <h3>Total: $ {cart.reduce((acc, curr) => acc + curr.item.price * curr.cantidad, 0)}</h3>
            <div className='centrar'>
                <button onClick={() => clearCart()}>Vaciar carrito</button>
                <Link to='/checkout'>Checkout </Link>
            </div>
        </div >
    );
};

export default Cart;
