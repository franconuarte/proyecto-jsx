import "./CartItem.css"
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemoveItem = () => {

        removeItem(item.item.id);
    };

    return (

        <div className="div">
            <img className="m" src={item.img} alt={item.item.name} />
            <h5 className="m">Producto: {item.item.name}</h5>
            <p className="m">Cantidad: {item.cantidad}</p>
            <p className="m">Precio: $ {item.item.price}</p>
            <button className="m" onClick={handleRemoveItem}>Eliminar</button>
        </div>

    );
};

export default CartItem;


