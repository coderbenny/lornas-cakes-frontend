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
            <h1 className="font-bold text-3xl text-center mb-3 text-white">Birthday / Wedding Shoot</h1>
            <div className="content flex">
                <SwipeCard slides={slideData} />

                <div className="max-w-[800px] mr-5">
                    <form className="flex flex-col justify-center bg-gray-100 p-3">
                        <h1 className="font-bold text-center bold text-2xl mb-4">Book Service</h1>
                        <label>Name</label>
                        <input type="text" placeholder="enter your name..." name="fname" className="h-7 mb-3 p-1" />
                        <label>Phone Number</label>
                        <input type="text" placeholder="enter your phone number..." name="phone" className="h-7 mb-3 p-1" />
                        <label className="h-7 mb-3 p-1" for="event">Event Type
                            <select className="ml-2" name="event">
                                <option value="birthday">Birthday</option>
                                <option value="wedding">Wedding</option>
                            </select>
                        </label>
                        <label for="date" className="h-7 mb-3 p-1">Date
                            <input type="date" name="date" />
                        </label>
                        <label for="coverage" className="h-7 mb-3 p-1">Method of coverage
                            <select>
                                <option value="photography">Photography</option>
                                <option value="videography">Videography</option>
                                <option value="none">None of the above</option>
                            </select>
                        </label>
                        <label className="h-7 mb-3 p-1">Any more requirements</label>
                        <textarea placeholder="type here..." className="p-2 mb-3 rounded-md h-[100px] w-[300px] resize-none"></textarea>
                        <button className="p-2 bg-black rounded-md text-white font-bold">Book</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default BirthdaySurprise;