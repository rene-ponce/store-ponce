import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const existInCart = (id) => {
        return cart.some(prod => prod.id === id);
    }

    const cartQuantity = () => {
        return cart.reduce((acc,prod) => acc + prod.quantity, 0)
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
    }

    const emptyCart = () => {
        setCart([]);
    }

    const deleteItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            existInCart,
            cartQuantity,
            total,
            emptyCart,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}