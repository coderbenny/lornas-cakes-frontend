import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext();


function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    // Async function for fetching Cart data
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

    // Function for adding item to cart
    function addCartItem(newCake) {
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(newCake)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network connection is not okay', Error);
                }
                return res.json(); // This will throw an error if the response is not valid JSON
            })
            .then(data => {
                console.log(data);
                // const containsObj = cart.includes(data);

                // if (containsObj) {
                //     // Update the quantity and weight of the existing cake
                //     const updatedCart = cart.map(item => {
                //         if (item.type === data.type) {
                //             return {
                //                 ...item,
                //                 quantity: item.quantity + data.quantity,
                //                 weight: item.weight + data.weight
                //             };
                //         }
                //         return item;
                //     });
                //     setCart(updatedCart);
                // } else {
                setCart([...cart, data]);
                // }
            })
            .catch(error => {
                console.error('Error adding cake to cart:', error);
            });
    }



    useEffect(() => {
        fetchCartData();
    }, [])

    const value = { cart, setCart, deleteCartItem, addCartItem };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }