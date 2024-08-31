import React from "react";
import { useNavigate } from "react-router-dom";
import { categoryImages } from "../Constants";

const Category = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full text-center mt-20">
        <p className="text-gray-600">Shop by category</p>
        <h1 className="text-3xl lg:text-5xl font-bold mt-2 mb-10">
          Shop by category
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {categoryImages.map((category, index) => (
          <div
            key={index}
            className="card relative"
            onClick={() =>
              navigate(
                `/product-category/${category?.title
                  .toLocaleLowerCase()
                  .replace(/\s+/g, "-")}`
              )
            }
          >
            <img
              src={category.image}
              alt={category.title}
              className="h-full w-full"
            />
            <div className="absolute bottom-4 w-full px-3">
              <div className="bg-white w-full text-center p-2">
                <p className="text-sm font-bold">{category.title}</p>
                <p className="text-xs text-gray-600">{category.products}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
