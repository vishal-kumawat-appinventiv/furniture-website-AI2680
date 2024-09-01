import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ColorSwitch from "../components/ColorSwitch";
import SaleTag from "../components/SaleTag";
import ImageZoomIcon from "../components/ImageZoomIcon";
import RelatedProducts from "../components/RelatedProducts";
import { prodPageImages, shippingDetails } from "../Constants";
import SelectOption from "../components/SelectOptions";
import Counter from "../components/Counter";
import VisaArray from "../components/VisaArray";

const ProductScreen = () => {
  return (
    <>
      <Navbar />
      <SelectOption />
      <div className="max-w-7xl mx-auto p-4">
        <div className="mainGrid grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div className="productImage">
            <div className="relative">
              <img src={prodPageImages[0]} alt="main-image" className="mb-4" />
              <SaleTag />
              <ImageZoomIcon />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={prodPageImages[1]} alt="bottom-img" />
              <img src={prodPageImages[2]} alt="bottom-img" />
            </div>
          </div>
          <div className="relative">
            <div className="sticky top-0 productDesc flex flex-col gap-2">
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
                  vestibulum erat leo, id pulvinar lorem maximus sit amet.
                  Quisque mauris sem, sagittis sed blandit eu, varius a tortor.
                  Quisque aliquam ligula sed quam pulvinar, vitae ullamcorper
                  metus imperdiet. Vivamus id justo dui.
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
                  <Counter />
                  <button className="ml-2 bg-[#7f7f7f] px-3 py-2 text-sm text-white hover:bg-[#c19a83]">
                    ADD TO CART
                  </button>
                </div>
              </div>
              <div className="text-sm">
                <span className="mr-2">SKU: N/A </span>Categories:{" "}
                <span className="text-[#e9c09b]">Bedroom, Decor, Office</span>
              </div>
              <div className="relative mt-2 p-3 border-[0.5px] border-gray-200 rounded">
                <div className="absolute top-[-19%] left-1/2 transform -translate-x-1/2 bg-white px-2 py-1">
                  <h4 className="text-center font-bold text-gray-600 text-sm">
                    Guaranteed Safe Checkout
                  </h4>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <VisaArray />
                </div>
              </div>
              <div>
                <p className="font-bold text-gray-600">
                  Free shipping on orders over $50!
                </p>
              </div>
              {shippingDetails.map((ele, index) => (
                <div className="flex gap-2" key={index}>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  <p className="text-gray-600">{ele?.condition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
      <Footer />
    </>
  );
};

export default ProductScreen;
