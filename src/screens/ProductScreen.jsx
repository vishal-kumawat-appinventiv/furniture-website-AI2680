import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import ColorSwitch from "../components/ColorSwitch";
import { useState } from "react";

const images = [
  "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-09-a.jpg",
  "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-09-b.jpg",
];

const ProductScreen = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <div className="mainGrid grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div className="productImage">
            <img src={images[0]} alt="main-image" />
          </div>
          <div className="productDesc flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 text-sm">
                Home / Bedroom / Product Name 1
              </p>
              <div>
                <button className=" border-2 border-gray-400 mr-2">
                  <ChevronLeft />
                </button>
                <button className=" border-2 border-gray-400">
                  <ChevronRight />
                </button>
              </div>
            </div>
            <div className="text-left text-gray-600">
              <p>Bedroom, Decor, Office</p>
            </div>
            <div className="text-left text-2xl font-bold">
              <h3>Product Name 10</h3>
            </div>
            <div className="text-left">
              <p>
                <span className="text-[#c19a83] text-2xl font-bold">
                  $85.00 - $99.00
                </span>{" "}
                <span className="text-gray-600">& Free Shipping</span>
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                vestibulum erat leo, id pulvinar lorem maximus sit amet. Quisque
                mauris sem, sagittis sed blandit eu, varius a tortor. Quisque
                aliquam ligula sed quam pulvinar, vitae ullamcorper metus
                imperdiet. Vivamus id justo dui.
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                Donec faucibus gravida vulputate. Sed quis porttitor libero.
                Aenean posuere imperdiet elit, in aliquet lorem vulputate sed.
                Integer et lacinia tellus.
              </p>
            </div>
            <div className="flex my-3">
              <ColorSwitch />
            </div>
            <div className="border-t-2 border-gray-100 border-b-2">
              <div className="counter flex items-center mt-3 mb-3">
                <button
                  className="px-3 py-1 border-2 border-gray-200"
                  onClick={() => count > 1 && setCount(count - 1)}
                >
                  -
                </button>
                <p className="px-3 py-1 border-t-2 border-b-2 border-l-0 border-r-0 border-gray-200">
                  {count}
                </p>
                <button
                  className="px-3 py-1 border-2 border-gray-200"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
                <button className="ml-2 bg-[#7f7f7f] px-3 py-2 text-sm text-white">
                  ADD TO CART
                </button>
              </div>
            </div>
            <div className="text-sm">
              <span className="mr-2">SKU: N/A </span>Categories:{" "}
              <span className="text-[#e9c09b]">Bedroom, Decor, Office</span>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
