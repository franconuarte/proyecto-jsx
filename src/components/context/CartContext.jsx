import { createContext, useState } from 'react';

export const CartContext = createContext({
    cart: [],
    addItem: (item, cantidad) => { },
    removeItem: (itemId) => { },
    clearCart: () => { },
    getTotalItems: () => 0,
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        const existingItemIndex = cart.findIndex((prod) => prod.item.id === item.id);

        if (existingItemIndex !== -1) {
            const newCart = cart.map((prod, index) => {
                if (index === existingItemIndex) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, { item, cantidad }]);
        }
    };

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter((prod) => prod.item.id !== itemId);
        setCart(cartUpdated);
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        let i = 0;
        i = cart.reduce((acc, curr) => acc + curr.cantidad, 0);
        console.log(i);
        return i;
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalItems }}>
            {children}
        </CartContext.Provider>
    );
};


export default CartContext

