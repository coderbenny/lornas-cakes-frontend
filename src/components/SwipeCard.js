import React, { useEffect } from "react";
import {Swiper} from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Initialize Swiper
Swiper.use([Navigation, Pagination]);

function SwipeCard() {

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Autoplay delay in seconds
        autoplay:{
            delay: 5000,
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });


    useEffect(() => {
        // Initialize Swiper when the component mounts
        new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            // Add other Swiper options here
        });
    }, []); // Empty dependency array ensures that the effect runs once when the component mounts

    return (
        <div className="swiper h-[500px]">
            {/* Additional required wrapper */}
            <div className="swiper-wrapper">
                {/* Slides */}
                <div className="swiper-slide h-full bg-white">My name is Benny</div>
                <div className="swiper-slide h-full bg-white">I am 10 years</div>
                <div className="swiper-slide h-full bg-white">A Jnr Software Engineer</div>
                {/* ... Render slides dynamically if needed */}
            </div>
            {/* If we need pagination */}
            {/* <div className="swiper-pagination"></div> */}

            {/* If we need navigation buttons */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            {/* If we need scrollbar */}
            {/* <div className="swiper-scrollbar"></div> */}
        </div>
    );
}

export default SwipeCard;
