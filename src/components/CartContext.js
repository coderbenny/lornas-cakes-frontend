import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();


function CartProvider({ children }) {

    const [cart, setCart] = useState([])
    const value = [cart, setCart]

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }