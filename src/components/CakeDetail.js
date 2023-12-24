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
        <div className="items-center align-center bg-orange-500 h-[700px]">

            <h1 className="font-bold text-3xl text-center text-white">Order Details</h1>

            <div key={cake.id} className="flex flex-col rounded-md items-center bg-white p-3 w-[300px]">
                <div className="mb-3">
                    <img src={cake.image_url} alt={cake.image_alt} className="h-40 w-full" />
                </div>
                <h1 className="font-bold ">{cake.type}</h1>
                <p className="mb-2">{cake.price}</p>
                <NavLink className="bg-black text-white w-full text-center p-1 rounded-md" to={`/buy/${id}`}>Buy</NavLink>
                <NavLink className="text-center bg-red-500 text-white w-full text-center p-1 rounded-md mt-2" to="/cakes">Cancel</NavLink>
            </div>

        </div >
    )
}

export default CakeDetail;
