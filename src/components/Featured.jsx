import React from "react";
import { useLocation } from "react-router-dom";
import { featured } from "../Constants";
import { Link } from "react-router-dom";

const Featured = () => {
  const location = useLocation();
  const onCategoryRoute = location?.pathname?.startsWith("/product-category");

  return (
    <>
      {!onCategoryRoute && (
        <div className="w-full text-center">
          <p className="text-gray-600">Shop by category</p>
          <h1 className="text-3xl lg:text-5xl font-bold mt-2 mb-10">
            Featured products
          </h1>
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {featured.map((product, index) => (
          <div
            key={index}
            className="relative card flex flex-col overflow-hidden"
          >
            <Link
              to={`/product/${product?.name
                .toLocaleLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <img
                src={product.image}
                alt={`featured-${index}`}
                className={`h-full w-full transition-transform duration-500 ${
                  onCategoryRoute === true && "hover:scale-105"
                }`}
              />
            </Link>
            <div className="absolute top-3 left-3 p-2 rounded-2xl bg-white text-gray-700 text-sm shadow-lg">
              SALE!
            </div>
            <div className="text-center bg-[#f1f3f2] pb-3">
              <Link
                to={`/product/${product?.name
                  .toLocaleLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <h3 className="font-bold">PRODUCT NAME</h3>
              </Link>
              <p>$85.00 - $99.00</p>
              <div className="flex gap-2 items-center justify-center">
                <p className="bg-black rounded-full p-2 w-2 border-white border-2"></p>
                <p className="bg-[#8f6453] rounded-full p-2 w-2 border-white border-2"></p>
                <p className="bg-[#dabca2] rounded-full p-2 w-2 border-white border-2"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Featured;
