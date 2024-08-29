import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="relative h-[60vh] lg:h-[90vh]">
        <img
          src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/hero-01.jpg"
          alt="bg-image"
          className="absolute w-full h-full object-cover"
          style={{ zIndex: "-1" }}
        />
        <div className="relative z-10">
          <Navbar />
        </div>
        <div className="mt-[50vh] lg:mt-[80vh]">
          <h1 className="text-3xl">Vishal Kumawat</h1>
          <h1 className="text-3xl">Vishal Kumawat</h1>
          <h1 className="text-3xl">Vishal Kumawat</h1>
          <h1 className="text-3xl">Vishal Kumawat</h1>
        </div>
      </div>
    </>
  );
};

export default HomePage;
