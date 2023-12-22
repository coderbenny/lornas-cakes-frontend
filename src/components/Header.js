import React from "react";
import Navigation from "./Navigation";

function Header() {
    return (
        <div className="flex bg-white p-2 text-black justify-between items-center ">
            <h1 className="shadow-lg font-bold text-2xl tracking-tight ">Lorna's Cakes & Bakes</h1>
            <Navigation />
            <button class="shadow-lg border border-blue-100 ronded-md p-2 px-5 font-bold bg-orange-500 text-white hover:border-orange-500 mr-4">Sign Up</button>
        </div>
    )
}

export default Header;