import React from "react";
import Navbar from "../components/Navbar";
import AboveImg from "../components/AboveImg";
import Category from "../components/Category";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import MyCarousel from "../components/MyCarousel";

const HomePage = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="fixed top-0 left-0 h-[50vh] lg:h-[100vh] w-full">
          <img
            src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/hero-01.jpg"
            alt="bg-image"
            className="w-full h-full object-cover"
            style={{ zIndex: "-1" }}
          />
        </div>

        <div className="relative z-10">
          <Navbar />
        </div>

        <div className="absolute top-[20%] left-[7%] lg:top-[40%] lg:left-[15%] z-10">
          <AboveImg />
        </div>

        <div className="relative z-10 bg-white">
          <div className="mt-[42vh] lg:mt-[100vh] mb-5 pt-5">
            <MyCarousel />
          </div>

          <div className="p-4">
            <Category />
          </div>

          <div className="mt-28">
            <Featured />
          </div>

          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
