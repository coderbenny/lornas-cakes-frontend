import React from "react";
import Navigation from "./Navigation";

function Header() {
    return (
        <div className="flex bg-white p-2 text-black justify-between items-center z-50">
            <h1 className="shadow-lg font-bold text-2xl tracking-tight cursor-pointer hover:text-orange-500">Lorna's Cakes & Bakes</h1>
            <Navigation />
            <div className="hidden md:inline">
                <input type="text" placeholder="search cake flavors..." className=" bg-gray-200 text-black p-2 mr-2 rounded-md" />
                <button class="shadow-lg border border-blue-100 ronded-md p-2 px-5 font-bold bg-orange-500 text-white hover:border-orange-500 mr-4">Sign Up</button>
            </div>
        </div>
    )
}

export default Header;