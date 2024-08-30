import React from "react";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const ProductCategory = () => {
  const location = useLocation();
  const categoryName = location.pathname.split("/").pop();
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl">
        <p className="p-2 mt-10 text-gray-700">Home / Decor</p>
        <h1 className="text-6xl font-bold p-2 mb-10 ">{categoryName}</h1>
        <div className="mb-20">
          <Featured />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductCategory;
