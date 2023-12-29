import React from "react";
import SwipeCard from "./SwipeCard";

const slideData = {
    slide1: "/bday1.jpg",
    slide2: "/bday2.jpg",
    slide3: "/bday3.jpg",
    slide4: "/bday4.jpg",
    slide5: "/bday5.jpg",
    slide6: "/bday6.jpg",
};


function BirthdaySurprise() {
    // console.log(slideData)

    return (
        <div className="items-center align-center justify-center bg-orange-500 h-[700px]">
            <h1 className="font-bold text-3xl text-center text-white">Birthday / Wedding Shoot</h1>
            <div className="content flex">
                <SwipeCard slides={slideData} />

                <div className="">
                    <form >
                        <h1 className="">Book Service</h1>
                        <input type="text" placeholder="enter your name..." />
                        <input type="text" placeholder="enter your phone number..." />
                        <button>Book</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default BirthdaySurprise;