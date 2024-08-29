import React from "react";

const featured = [
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-09-a-400x488.jpg",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-05-b-400x488.jpg",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-01-c-400x488.jpg",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-15-b-400x488.jpg",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-04-c-400x488.jpg",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-14-a-400x488.jpg",
  },
];

const Featured = () => {
  return (
    <>
      <div className="w-full text-center">
        <p className="text-gray-600">Shop by category</p>
        <h1 className="text-3xl lg:text-5xl font-bold mt-2 mb-10">
          Featured products
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {featured.map((product, index) => (
          <div key={index} className="card flex flex-col">
            <img
              src={product.image}
              alt={`featured-${index}`}
              className="h-full w-full"
            />
            <div className="text-center bg-[#f1f3f2] pb-3">
              <h3 className="font-bold">PRODUCT NAME</h3>
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
