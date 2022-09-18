import { createContext, useContext, useState } from 'react';

export const CartOderContext = createContext();

export function useShopingCart() {
    return useContext(CartOderContext);
}

function CartOderProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const setCartItemQuantity = (id, size) => {
        if (cartItems.find((item) => item.id === id && item.size === size) === undefined) {
            setCartItems((prev) => [...prev, { id, quantity: 1, size }]);
        } else {
            increseItemQuantity(id, size);
        }
    };

    const increseItemQuantity = (id, size = '') => {
        setCartItems((prev) => {
            return prev.map((item) => {
                if (item.size === size && item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
        });
    };

    const decreseItemQuantity = (id, size) => {
        setCartItems((prev) => {
            return prev.map((item) => {
                if (item.id === id && item.size === size) {
                    const newItem = { ...item, quantity: item.quantity - 1 };
                    if (newItem.quantity <= 0) {
                        return { ...item, quantity: 0 };
                    } else {
                        return newItem;
                    }
                } else {
                    return item;
                }
            });
        });
    };

    const removeItemQuantity = (id, size) => {
        const itemRemove = cartItems.find((item) => {
            return item.id === id && item.size === size;
        });
        const newCartItems = cartItems.filter((item) => item !== itemRemove);
        setCartItems(newCartItems);
    };

    return (
        <CartOderContext.Provider
            value={{
                cartItems,
                setCartItemQuantity,
                increseItemQuantity,
                decreseItemQuantity,
                removeItemQuantity,
                totalQuantity,
            }}
        >
            {children}
        </CartOderContext.Provider>
    );
}

export default CartOderProvider;
