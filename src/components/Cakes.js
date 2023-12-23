import React from "react";
import data from "../data/data";

function Cakes({ cakeType }) {

    // console.log(cakeType)
    return (
        <div className="body bg-orange-500 h-[700px] items-center justify-center">
            <h1 className="font-bold text-3xl text-center text-white">Cakes</h1>

            <div className="flex flex-wrap max-h-screen w-[600px]">
                {data.cakeType.map((cake) => (

                    <div key={cake.id} className="cake-card flex-column w-full">
                        <div className="mr-3">
                            <img src={cake.image_url} alt={cake.image_alt} className="h-40 w-40" />
                        </div>
                        <h1 className="font-bold text-white">{cake.type}</h1>
                        <p className="text-white">{cake.type}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cakes;