import React from "react";
import data from "../data/data";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Cakes({ cakeType }) {

    const history = useHistory();

    function handleBuyClick(cakeId) {
        history.push(`/cakes/${cakeId}`);
    }

    return (
        <div className="body bg-orange-500 h-[700px] flex flex-col items-center justify-center">
            <h1 className="font-bold text-3xl text-center text-white mb-4">Cakes</h1>

            <div className="grid grid-cols-4 gap-4 p-5 max-h-[580px] overflow-y-auto">
                {data.cakeType.map((cake) => (
                    <div key={cake.id} className="flex flex-col rounded-md items-center bg-white p-3 w-[300px]">
                        <div className="mb-3">
                            <img src={cake.image_url} alt={cake.image_alt} className="h-40 w-full" />
                        </div>
                        <h1 className="font-bold ">{cake.type}</h1>
                        <p className="mb-2">{cake.price} <i>per Kg</i></p>
                        <button onClick={() => handleBuyClick(cake.id)} className="bg-black text-white w-full text-center p-1 rounded-md font-bold" to="/cakes/:id">Place Order</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cakes;
