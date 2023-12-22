import React from "react";

function HeroSection() {
    return (
        <div className="flex items-center justify-center h-[600px] opacity-90">
            <div className="card p-6 max-w-screen-xl bg-white rounded-lg  w-full flex mt-20 items-center justify-between shadow-2xl">
                <div className="w-1/2 pr-20">
                    <h1 className="font-bold text-5xl mb-4">Celebrate Every Moment with Sweetness</h1>
                    <p className="text-lg mb-6">From classic flavors to innovative creations, discover a symphony of tastes that will tantalize your senses and leave you craving for more</p>
                    <button className="px-6 py-3 border bg-black text-white rounded-md">Sign Up for Alerts</button>
                </div>
                <div className="w-57">
                    <img src="./lorna1.jpg" alt="main pic" className="h-[550px] w-[550px] object-cover" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
