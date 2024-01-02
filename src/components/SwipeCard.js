import React, { useEffect } from "react";
import { Swiper } from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// Initialize Swiper
Swiper.use([Navigation, Pagination]);


function SwipeCard({ slides }) {

  // console.log(slides)

  const swiper = new Swiper('.swiper', {

    // Autoplay delay in seconds
    // autoplay: {
    //   delay: 5000,
    // },


    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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
    <div className="swiper h-[600px] w-[900px]">
      {/* Additional required wrapper */}
      <div className="swiper-wrapper ">
        {/* Slides */}
        <div className="swiper-slide h-full"><img src={slides.slide1} alt="birthdayshoot" className="h-full w-full object-cover" /></div>
        <div className="swiper-slide h-full"><img src={slides.slide2} alt="birthdayshoot" className="h-screen w-full" /></div>
        <div className="swiper-slide h-full"><img src={slides.slide3} alt="birthdayshoot" className="h-screen w-full" /></div>
        <div className="swiper-slide h-full"><img src={slides.slide4} alt="birthdayshoot" className="h-screen w-full" /></div>
        <div className="swiper-slide h-full"><img src={slides.slide5} alt="birthdayshoot" className="h-screen w-full" /></div>
        <div className="swiper-slide h-full"><img src={slides.slide6} alt="birthdayshoot" className="h-screen w-full" /></div>
        {/* ... Render slides dynamically if needed */}
      </div>
      {/* If we need pagination */}
      <div className="swiper-pagination"></div>

      {/* If we need navigation buttons */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* If we need scrollbar */}
      <div className="swiper-scrollbar"></div>
    </div>
  );
}

export default SwipeCard;
