import React from "react";

const categoryImages = [
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-1-300x300.jpg",
    title: "BEDROOM",
    products: "6 PRODUCTS",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-4-300x300.jpg",
    title: "DECOR",
    products: "9 PRODUCTS",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-3-300x300.jpg",
    title: "LIVING ROOM",
    products: "6 PRODUCTS",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/cat-2-300x300.jpg",
    title: "OFFICE",
    products: "11 PRODUCTS",
  },
];

const Category = () => {
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
          <div key={index} className="card relative">
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
