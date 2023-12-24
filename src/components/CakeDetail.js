import React from "react";
import { useParams, NavLink } from "react-router-dom";
import data from "../data/data";

function CakeDetail() {
    const { id } = useParams();
    const cake = data.cakeType.find((cake) => cake.id === parseInt(id));

    if (!cake) {
        return <div>Cake Not Found</div>
    }

    return (
        <div className="items-center bg-orange-500 h-[700px] justify-center">

            <h1 className="font-bold text-3xl text-center text-white">Order Details</h1>

            <div className="flex justify-center">
                <div key={cake.id} className="flex flex-col mr-10 rounded-md mt-5 items-center bg-white p-3 w-[400px]">
                    <div className="mb-3">
                        <img src={cake.image_url} alt={cake.image_alt} className="h-full w-full" />
                    </div>
                    <h1 className="font-bold text-3xl">{cake.type}</h1>
                    <p className="mb-2 text-lg"><strong>Price:</strong> {cake.price}</p>
                    <p className="mb-2 bg-gray-500 rounded-md text-white p-2">{cake.description}</p>
                    <div className="flex">
                        <h1 className="mr-3 font-bold">Quantity</h1>
                        <input type="number" className="text-black text-center mb-2 border border-1 rounded-md w-[50px] border-black" />
                    </div>
                    <NavLink className="bg-black text-white w-full text-center p-1 rounded-md font-bold" to={`/buy/${id}`}>Add To Cart</NavLink>
                    <NavLink className="text-center bg-red-500 text-white w-full p-1 font-bold rounded-md mt-2" to="/cakes">Cancel</NavLink>
                </div>


                {/* Shopping Cart  */}
                <div className="bg-white mr-10 mt-5 rounded-md w-[400px]">
                    <h1 className="text-center mt-2 mb-2 font-bold text-2xl">Shopping Cart</h1>
                    <div className="mx-auto w-[380px] p-3 h-[380px] overflow-y-auto rounded-md">

                        {/* Cart Item */}
                        <div className="flex p-2 bg-gray-300 rounded-md mb-3 shadow-lg items-center border-2 hover:border-orange-500">
                            <img src={cake.image_url} alt={cake.image_alt} className="rounded-md mr-2 h-[70px] w-[70px]" />
                            <div className="max-h-full w-full">
                                <h1 className="font-bold text-lg">{cake.type}</h1>
                                <p className=""><strong>Price:</strong> {cake.price}</p>
                                <p className=""><strong>Quantity: x1</strong>{ }</p>
                            </div>
                            <button className="text-white font-bold ruonded-md bg-orange-500 p-2 ">X</button>
                        </div>

                        <div className="flex p-2 bg-gray-300 rounded-md mb-3 shadow-lg items-center border-2 hover:border-orange-500">
                            <img src={cake.image_url} alt={cake.image_alt} className="rounded-md mr-2 h-[70px] w-[70px]" />
                            <div className="max-h-full w-full">
                                <h1 className="font-bold text-lg">{cake.type}</h1>
                                <p className=""><strong>Price:</strong> {cake.price}</p>
                                <p className=""><strong>Quantity: x1</strong>{ }</p>
                            </div>
                            <button className="text-white font-bold ruonded-md bg-orange-500 p-2 ">X</button>
                        </div>

                        <div className="flex p-2 bg-gray-300 rounded-md mb-3 shadow-lg items-center border-2 hover:border-orange-500">
                            <img src={cake.image_url} alt={cake.image_alt} className="rounded-md mr-2 h-[70px] w-[70px]" />
                            <div className="max-h-full w-full">
                                <h1 className="font-bold text-lg">{cake.type}</h1>
                                <p className=""><strong>Price:</strong> {cake.price}</p>
                                <p className=""><strong>Quantity: x1</strong>{ }</p>
                            </div>
                            <button className="text-white font-bold ruonded-md bg-orange-500 p-2 ">X</button>
                        </div>

                        <div className="flex p-2 bg-gray-300 rounded-md mb-3 shadow-lg items-center border-2 hover:border-orange-500">
                            <img src={cake.image_url} alt={cake.image_alt} className="rounded-md mr-2 h-[70px] w-[70px]" />
                            <div className="max-h-full w-full">
                                <h1 className="font-bold text-lg">{cake.type}</h1>
                                <p className=""><strong>Price:</strong> {cake.price}</p>
                                <p className=""><strong>Quantity: x1</strong>{ }</p>
                            </div>
                            <button className="text-white font-bold ruonded-md bg-orange-500 p-2 ">X</button>
                        </div>


                    </div>

                    <div className="flex mt-1 ml-2 items-center mx-auto mr-2 bg-black p-2">
                        <h1 className="font-bold text-red-400 text-3xl mr-3">TOTAL:</h1>
                        <p className="font-bold text-white text-2xl">$100.00</p>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default CakeDetail;
