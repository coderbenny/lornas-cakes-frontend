import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import data from "../data/data"

function Reviews({ comments }) {

    return (
        <div className="bg-orange-500 h-[700px] items-center align-center p-5">
            <h1 className="font-bold text-3xl text-center text-white mb-4">Reviews</h1>

            <div className="flex p-3 flex-wrap overflow-y-auto ">
                {data.comments.map((comment, index) => (
                    <div key={index} className="flex bg-white p-3 w-92 max-h-[200px] rounded-lg shadow-lg mr-3 mb-3">
                        <img src="/lorna1.jpg" alt="user" className="h-20 w-20 mr-3" />
                        <div className="flex-column items-center">
                            <h1 className="font-bold mb-2">{comment.name}</h1>
                            <hr className="h-1 border-black" />
                            <p>{comment.comment}</p>
                        </div>
                    </div>
                ))}
            </div>

            <NavLink to="/add-review" className="float-right p-3 bg-black rounded-md mr-40 shadow-lg border-2 border-black text-orange-500 font-bold hover:text-white hover:border-white">Leave a Comment</NavLink>


        </div >
    );
}

export default Reviews;
