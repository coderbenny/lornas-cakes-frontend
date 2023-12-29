import React from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function ReviewForm() {

    const [showDialog, setShowDialog] = useState(false); // State to manage dialog visibility
    const history = useHistory();

    function confirmNavigate() {
        history.push('/reviews'); // Navigate to cakes page
    }

    // function cancelNavigate() {
    //     setShowDialog(false); // Hide dialog
    // }

    return (
        <div className="flex flex-col items-center p-5 h-[700px] bg-orange-500">
            <h1 className="font-bold text-3xl text-white mb-4">Feedback</h1>

            <form className="w-96 flex flex-col bg-white p-5 rounded-md shadow-lg">
                <p className="mt-2 mb-4 text-black">Feel free to leave some feedback about our services and what you need to be improved on.</p>

                <div className="flex flex-col w-full mb-4">
                    <label htmlFor="name" className="text-white mb-1">Your Name</label>
                    <input type="text" id="name" placeholder="Enter your name" required className="p-2 border-black border-2 rounded-md" />
                </div>

                <div className="flex flex-col w-full mb-4">
                    <label htmlFor="comment" className="text-white mb-1">Your Comment</label>
                    <textarea id="comment" placeholder="Type your comment here..." className="p-2 border-black border-2 rounded-md"></textarea>
                </div>

                <button type="button" className="p-3 border-2 rounded-md bg-black shadow-sm text-orange-500 font-bold mb-3 border-black" onClick={() => setShowDialog(true)}>Add Comment</button>
                <NavLink to="/reviews" className="text-center font-bold shadow-sm">Cancel</NavLink>

                {showDialog && (
                    <div className="fixed inset-0 flex items-center mx-auto justify-center z-50">
                        <div className="bg-white p-4 rounded-md text-center">
                            <p className="mb-4">Your Review has been Published!</p>
                            <div className="justify-center">
                                <button onClick={confirmNavigate} className="bg-green-500 text-white p-2 rounded-md mr-2">OK</button>
                                {/* <button onClick={cancelNavigate} className="bg-red-500 text-white p-2 rounded-md">No</button> */}
                            </div>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}

export default ReviewForm;
