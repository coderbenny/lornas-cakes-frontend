import React, { useState, useEffect } from "react";

function Cart({ shoppingCart, deleteItem }) {

    // State for the cart items
    const [cart, setCart] = useState();

    // UseEffect for fetching the cart items
    useEffect(() => {
        fetch(' http://localhost:5000/cart')
            .then(res => res.json())
            .then((itemCart) => setCart(itemCart))
    }, [])


    console.log(cart)

    function handleDeleteItem(id) {
        const filterData = shoppingCart.filter((item) => item.id !== id);
        deleteItem(filterData);
    }


    return (
        <div className="bg-orange-500 h-[700px] flex-column items-center align-center p-5">
            <h1 className="font-bold text-3xl text-center text-white mb-4">Shopping Cart</h1>



            <div className="cakeItem mx-auto bg-white w-[700px] p-3 h-[400px] overflow-y-auto flex flex-col">

                {/* Cart Item */}
                {cart && cart.map((item) => {
                    return (
                        <div key={item.id} className="flex text-gray-100 p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-4 hover:border-blue-500 rounded-md mb-3 shadow-lg items-center">
                            <img src={item.img_url} alt="cake" className="rounded-md mr-2 h-[70px] w-[70px]" />
                            <div className="max-h-full flex-grow">
                                <h1 className="font-bold text-lg">{item.type}</h1>
                                <p className=""><strong>Price:</strong> {item.price}</p>
                                <p className=""><strong>Quantity: {item.quantity}</strong></p>
                            </div>

                            <button onClick={() => handleDeleteItem(item.id)} className="font-bold bg-white text-black p-2 rounded-md ml-auto hover:shadow-lg-700" >
                                <img src="/delete-1487-svgrepo-com.svg" alt="delete" className="h-5 w-5" />
                            </button> {/* Added ml-auto */}
                        </div>
                    )
                })}


            </div>

            <div className="flex-column w-[700px] items-center justify-between border-4 rounded-md border-white mx-auto bg-black p-1">
                <div className="flex-column text-center p-2">
                    <h1 className="font-bold text-red-400 text-2xl">TOTAL</h1>
                    <p className="font-bold text-white text-3xl">$100.00</p>
                </div>
                <button className="text-black bg-white w-full p-2 px-5 font-bold">Pay</button>
            </div>

        </div>


    )
}

export default Cart;