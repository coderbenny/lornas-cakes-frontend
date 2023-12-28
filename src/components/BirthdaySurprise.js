import React from "react";
import SwipeCard from "./SwipeCard"

function BirthdaySurprise() {
    return (
        <div className=" items-center align-center bg-orange-500 h-[700px]">
            <h1 className="font-bold text-3xl text-center text-white">Birthday Surprise</h1>
            {/* <SwipeCard/> */}

            <form className=" ">
                <h1 className="">Book Service</h1>
                <input type="text" placeholder="enter your name..." />
                <input type="text" placeholder="enter your phone number..." />
                <button>Book</button>
            </form>

        </div>
    )
}

export default BirthdaySurprise;