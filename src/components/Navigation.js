import React from "react";
import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <div className="font-bold shadow-sm" >
            <NavLink exact to="/" className="mr-3 shadow-lg p-1 hover:text-orange-600">Home</NavLink>
            <NavLink to="/cakes" className="mr-3 shadow-lg p-1 hover:text-orange-600">Cakes</NavLink>
            <NavLink to="/shop" className="mr-3 shadow-lg p-1 hover:text-orange-600">Shop</NavLink>
            <NavLink to="/shoot" className="mr-3 shadow-lg p-1 hover:text-orange-600">Birthday Shoot</NavLink>
            <NavLink to="/classes" className="mr-3 shadow-lg p-1 hover:text-orange-600">Baking Classes</NavLink>
            <NavLink to="/reviews" className="mr-3 shadow-lg p-1 hover:text-orange-600">Customer Reviews</NavLink>
        </div>
    )
}

export default Navigation;