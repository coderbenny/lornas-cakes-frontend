import React from "react";

function HeroSection() {
    return (
        <div className="flex items-center justify-center h-[600px]">

            <div className="card p-6 max-w-screen-xl bg-white rounded-lg  w-full flex mt-20 items-center justify-between shadow-2xl">

                <div className="flex-column  w-1/2 h-[400px] pr-20">
                    <h1 className="font-bold text-5xl mb-5 shadow=lg">Celebrate Every Moment with Sweetness</h1>
                    <p className="text-lg mb-6">From classic flavors to innovative creations, discover a symphony of tastes that will tantalize your senses and leave you craving for more</p>
                    <button className="flex px-6 py-3 border bg-orange-500 text-white rounded-md items-center hover:text-black shadow-lg border-orange-500 border-2 hover:border-black"><strong>Order</strong><img src="/shopping-bag-svgrepo-com.svg" alt="cake" className="h-5 w-5 ml-2 shadow-lg " /></button>
                    <div className="flex mr-3 items-center mt-36">
                        <img src="/facebook-svgrepo-com.svg" alt="facebook" className="h-10 w-10 mr-2" />
                        <img src="/tiktok-logo-logo-svgrepo-com.svg" alt="tiktok" className="h-8 w-8 mr-2" />
                        <img src="/youtube-svgrepo-com.svg" alt="youtube" className="h-8 w-8 mr-2" />

                    </div>

                </div>

                <div className="w-57">
                    <img src="./lorna1.jpg" alt="main pic" className="h-[550px] w-[550px] object-cover shadow-lg rounded-lg" />
                </div>


            </div>
        </div >
    );
}

export default HeroSection;
