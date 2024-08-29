import React from "react";
import Navbar from "../components/Navbar";
import AboveImg from "../components/AboveImg";

const HomePage = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute top-0 left-0 h-[50vh] lg:h-[100vh] w-full">
          <img
            src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/hero-01.jpg"
            alt="bg-image"
            className="w-full h-full object-cover"
            style={{ zIndex: "-1" }}
          />

          <div className="absolute top-[40%] left-[15%] z-10">
            <AboveImg />
          </div>
        </div>

        <div className="relative z-10">
          <Navbar />
        </div>

      </div>
    </>
  );
};

export default HomePage;
