import React from "react";
import data from "../data/data";

function BakingClasses({ bakingClasses }) {
    return (
        <div className=" items-center align-center bg-orange-500 h-[700px]">
            <h1 className="font-bold text-3xl text-center rounded:md text-white mb-2">Baking Classes</h1>

            <div className="flex">
                <img src="./poster-baking.jpg" alt="poster" className="h-[600px] ml-7 mr-5 z-30" />

                <div className="flex-column bg-white h-[600px] rounded:md w-[700px] mr-6 p-3 overflow-y-auto">
                    <h1 className="font-bold  text-lg mb-2 text-center">Choose your package by selecting one of the choices below:</h1>

                    {data.bakingClasses.map((bakingclass) => (

                        <div className="hover:border-black border-white border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-4 rounded-md p-3 text-black h-[200px]">
                            <h1 className="font-bold p-1 text-white">{bakingclass.title}</h1>
                            <p className="font-bold text-teal-200">{bakingclass.description}</p>
                        </div>

                    ))}


                </div>
            </div>
        </div>
    )
}

export default BakingClasses;