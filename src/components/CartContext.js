import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext();


function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    // Async function for fetching data
    const fetchCartData = async () => {
        try {
            const response = await fetch('http://localhost:5000/cart');
            if (!response.ok) {
                throw new Error('Network response was not okay');
            }
            const cartItem = await response.json();
            setCart(cartItem)
        } catch (error) {
            console.error('Error fetching from cart!', error)
            return (
                <h1>Error Fetching Cart Data...</h1>
            )
        }
    }

    // Function for deleting item from cart
    function deleteCartItem(id) {
        fetch(`http://localhost:5000/cart/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network connection was not okay', Error);
                }
                return res.json();
            })
            .then(data => {
                console.log(data);

                const remItems = cart.filter((item) => item.id !== id)
                setCart(remItems)
            })
    }


    useEffect(() => {
        fetchCartData();
    }, [])

    const value = { cart, setCart, deleteCartItem };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }