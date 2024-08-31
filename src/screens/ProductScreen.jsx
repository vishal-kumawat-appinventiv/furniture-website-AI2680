import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";

const images = [
  "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-09-a.jpg",
  "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-09-b.jpg",
];

const ProductScreen = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4">
        <div className="mainGrid grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div className="productImage">
            <img src={images[0]} alt="main-image" />
          </div>
          <div className="productDesc flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Home / Bedroom / Product Name 1</p>
              <div>
                <button className=" border-2 border-gray-400 mr-2">
                  <ChevronLeft />
                </button>
                <button className=" border-2 border-gray-400">
                  <ChevronRight />
                </button>
              </div>
            </div>
            <div className="text-left text-gray-600 mt-3">
              <p>Bedroom, Decor, Office</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
