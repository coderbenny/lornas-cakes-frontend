import React from "react";
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <div className="font-bold shadow-sm" >
            <Link exact to="/" className="mr-3 shadow-lg p-1 hover:text-orange-600">Home</Link>
            <Link to="/cakes" className="mr-3 shadow-lg p-1 hover:text-orange-600">Cakes</Link>
            <Link to="/shop" className="mr-3 shadow-lg p-1 hover:text-orange-600">Shop</Link>
            <Link to="/shoot" className="mr-3 shadow-lg p-1 hover:text-orange-600">Birthday Shoot</Link>
            <Link to="/reviews" className="mr-3 shadow-lg p-1 hover:text-orange-600">Customer Reviews</Link>
        </div>
    )
}

export default Navigation;