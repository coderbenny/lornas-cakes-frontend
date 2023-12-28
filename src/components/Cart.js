import React from "react";

function Cart() {
    return (
        <div className="bg-orange-500 h-[700px] flex-column items-center align-center p-5">
            <h1 className="font-bold text-3xl text-center text-white mb-4">Shopping Cart</h1>

            <div className="mx-auto bg-white w-[700px] p-3 h-[400px] overflow-y-auto flex flex-col justify-between">

                {/* Cart Item */}
                <div className="flex p-2 bg-gray-300 border-4 hover:border-black rounded-md mb-3 shadow-lg items-center">
                    <img src='./delicious-cake.jpg' alt="cake" className="rounded-md mr-2 h-[70px] w-[70px]" />
                    <div className="max-h-full">
                        <h1 className="font-bold text-lg">Chocolate Cake</h1>
                        <p className=""><strong>Price:</strong> $100</p>
                        <p className=""><strong>Quantity: x1</strong></p>
                    </div>
                </div>

                <div className="flex p-2 bg-gray-300 border-4 hover:border-black rounded-md mb-3 shadow-lg items-center">
                    <img src='./delicious-cake.jpg' alt="cake" className="rounded-md mr-2 h-[70px] w-[70px]" />
                    <div className="max-h-full">
                        <h1 className="font-bold text-lg">Chocolate Cake</h1>
                        <p className=""><strong>Price:</strong> $100</p>
                        <p className=""><strong>Quantity: x1</strong></p>
                    </div>
                </div>

                <div className="flex p-2 bg-gray-300 border-4 hover:border-black rounded-md mb-3 shadow-lg  items-center">
                    <img src='./delicious-cake.jpg' alt="cake" className="rounded-md mr-2 h-[70px] w-[70px]" />
                    <div className="max-h-full">
                        <h1 className="font-bold text-lg">Chocolate Cake</h1>
                        <p className=""><strong>Price:</strong> $100</p>
                        <p className=""><strong>Quantity: x1</strong></p>
                    </div>
                </div>

                <div className="flex p-2 bg-gray-300 border-4 hover:border-black rounded-md mb-3 shadow-lg items-center">
                    <img src='./delicious-cake.jpg' alt="cake" className="rounded-md mr-2 h-[70px] w-[70px]" />
                    <div className="max-h-full">
                        <h1 className="font-bold text-lg">Chocolate Cake</h1>
                        <p className=""><strong>Price:</strong> $100</p>
                        <p className=""><strong>Quantity: x1</strong></p>
                    </div>
                </div>

                <div className="flex p-2 bg-gray-300 border-4 hover:border-black rounded-md mb-3 shadow-lg items-center">
                    <img src='./delicious-cake.jpg' alt="cake" className="rounded-md mr-2 h-[70px] w-[70px]" />
                    <div className="max-h-full">
                        <h1 className="font-bold text-lg">Chocolate Cake</h1>
                        <p className=""><strong>Price:</strong> $100</p>
                        <p className=""><strong>Quantity: x1</strong></p>
                    </div>
                </div>

                <div className="flex p-2 bg-gray-300 border-4 hover:border-black rounded-md mb-3 shadow-lg items-center">
                    <img src='./delicious-cake.jpg' alt="cake" className="rounded-md mr-2 h-[70px] w-[70px]" />
                    <div className="max-h-full">
                        <h1 className="font-bold text-lg">Chocolate Cake</h1>
                        <p className=""><strong>Price:</strong> $100</p>
                        <p className=""><strong>Quantity: x1</strong></p>
                    </div>
                </div>

            </div>

            <div className="flex-column w-[700px] items-center justify-between border-4 rounded-md border-white mx-auto bg-black p-2">
                <div className="flex p-3">
                    <h1 className="font-bold text-red-400 text-3xl mr-3">TOTAL:</h1>
                    <p className="font-bold text-white text-2xl">$100.00</p>
                </div>
                <button className="bg-white w-full p-2 px-5 font-bold">Pay</button>
            </div>

        </div>


    )
}

export default Cart;