import React, { useContext, useState } from "react";
import { useParams, NavLink, useHistory } from "react-router-dom";
import data from "../data/data";
import { CartContext } from "./CartContext";

function CakeDetail({ addOrder }) {
    const [showDialog, setShowDialog] = useState(false); // State to manage dialog visibility
    const history = useHistory();
    const { id } = useParams();
    const cake = data.cakeType.find((cake) => cake.id === parseInt(id));

    const { addCartItem } = useContext(CartContext);

    if (!cake) {
        return <div>Cake Not Found</div>;
    }

    // console.log(cake)

    function handleBuy(e) {
        e.preventDefault();

        const weightInput = e.target.querySelector('input[name=weight]');
        const quantityInput = e.target.querySelector('.quantity');

        if (!weightInput || !quantityInput) {
            console.error('Required input fields not found');
            return;
        }

        const weight = weightInput.value;
        const quantity = quantityInput.value;

        const newCake = { ...cake, weight: parseFloat(weight), quantity: parseInt(quantity, 10) };
        addCartItem(newCake)
        setShowDialog(true);
    }


    function continueShopping() {
        history.push('/cakes'); // Navigate to cakes page
    }

    function goToCart() {
        setShowDialog(false); // Hide the dialog box
        history.push("/cart") // Navigate to Cart
    }

    return (
        <div className="items-center bg-orange-500 h-[700px] justify-center">
            <h1 className="font-bold text-3xl text-center text-white">Order Details</h1>
            <div className="flex justify-center">
                <form onSubmit={handleBuy}>
                    <div key={cake.id} className="flex flex-col mr-10 rounded-md mt-5 items-center bg-white p-3 w-[400px]">
                        <div className="mb-3">
                            <img src={cake.image_url} alt={cake.image_alt} className="image h-full w-full" />
                        </div>
                        <h1 className="type font-bold text-3xl">{cake.type}</h1>
                        <p className="price mb-2 text-lg"><strong>Price:</strong> {cake.price}</p>
                        <p className="description mb-2 bg-teal-300 rounded-md  italic text-gray-900 p-2">{cake.description}</p>
                        <div className="flex">
                            <div className="flex mr-4">
                                <h1 className="mr-3 font-bold">Quantity</h1>
                                <input type="number" name="quantity" defaultValue="1" className="quantity text-black text-center mb-2 border border-1 rounded-md w-[50px] border-black" />
                            </div>
                            <div className="flex">
                                <h1 className="mr-3 font-bold">Weight <i>(in Kg)</i></h1>
                                <input type="number" name="weight" defaultValue="1" className="weight text-black text-center mb-2 border border-1 rounded-md w-[50px] border-black" />
                            </div>
                        </div>
                        <button className="bg-black text-white w-full text-center p-1 rounded-md font-bold" type="submit">Add To Cart</button>
                        <NavLink className="text-center bg-red-500 text-white w-full p-1 font-bold rounded-md mt-2" to="/cakes">Cancel</NavLink>
                    </div>
                </form>
            </div>

            {/* Modal for dialog box */}
            {showDialog && (
                <div className="fixed inset-0 flex items-center shadow-lg justify-center z-50">
                    <div className="bg-white p-4 rounded-md text-center">
                        <p className="mb-4">You have succesfully added the cake to cart</p>
                        <div className="justify-center">
                            <button onClick={continueShopping} className="bg-green-500 text-white p-2 rounded-md mr-2">Continue Shopping</button>
                            <button onClick={goToCart} className="bg-red-500 text-white p-2 rounded-md">Go to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CakeDetail;
