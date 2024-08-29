import React from "react";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="relative h-screen">
        <img
          src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/hero-01.jpg"
          alt="bg-image"
          className="absolute w-full h-[50vh] lg:h-[100vh] object-cover"
          style={{ zIndex: "-1" }}
        />
        <div className="z-10">
          <Navbar />
        </div>
        <div className="mt-[40vh] lg:mt-[90vh]">
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
