import { createContext, useContext, useEffect, useState } from 'react';

export const CartOderContext = createContext();

export function useShopingCart() {
    return useContext(CartOderContext);
}

function CartOderProvider({ children }) {
    const [productOder, setProductOder] = useState([]);

    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const setCartItemQuanity = (id, size) => {
        if (cartItems.find((item) => item.id !== id)) {
            setCartItems((prev) => [...prev, { id, quantity: 1, size }]);
        }
    };

    return (
        <CartOderContext.Provider value={{ productOder, setProductOder, setCartItemQuanity }}>
            {children}
        </CartOderContext.Provider>
    );
}

export default CartOderProvider;
