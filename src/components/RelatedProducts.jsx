import React from "react";
import SaleTag from "./SaleTag";
import { relatedProd } from "../Constants";

const RelatedProducts = () => {
  return (
    <>
      <div className="my-10">
        <h1 className="text-4xl font-bold">Related products</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {relatedProd.map((prod, index) => (
            <div key={index} className="card relative flex flex-col">
              <SaleTag />
              <img src={prod?.image} alt="img" />
              <div className="cardBody text-center bg-[#f1f3f2]">
                <h1 className="text-lg font-bold">Product Name</h1>
                <p className="text-sm mb-5">$85.00 - $99.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
