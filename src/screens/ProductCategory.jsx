import React from "react";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

const ProductCategory = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <Featured />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductCategory;
