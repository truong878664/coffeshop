import { createContext, useState } from 'react';

export const CartOderContext = createContext();

function CartOderProvider({ children }) {
    const [productOder, setProductOder] = useState([]);

    return <CartOderContext.Provider value={{ productOder, setProductOder }}>{children}</CartOderContext.Provider>;
}

export default CartOderProvider;
