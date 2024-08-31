import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ColorSwitch from "../components/ColorSwitch";
import { useState } from "react";

const images = [
  "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-09-a.jpg",
  "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/product-09-b.jpg",
];

const shippingDetails = [
  {
    condition: "No-Risk Money Back Guarantee!",
  },
  {
    condition: "No Hassle Refunds",
  },
  {
    condition: "Secure Payments",
  },
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
                  className="px-3 py-1 border-2 border-gray-200 hover:bg-[#c19a83]"
                  onClick={() => count > 1 && setCount(count - 1)}
                >
                  -
                </button>
                <p className="px-3 py-1 border-t-2 border-b-2 border-l-0 border-r-0 border-gray-200">
                  {count}
                </p>
                <button
                  className="px-3 py-1 border-2 border-gray-200 hover:bg-[#c19a83]"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
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
                {Array.from({ length: 4 }).map((_, index) => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 750 471"
                    className="w-12 h-12"
                    key={index}
                  >
                    <g>
                      <path
                        d="M750,40c0,-22.077 -17.923,-40 -40,-40l-670,0c-22.077,0 -40,17.923 -40,40l0,391c0,22.077 17.923,40 40,40l670,0c22.077,0 40,-17.923 40,-40l0,-391Z"
                        fill="rgb(14,69,149)"
                      ></path>
                      <path
                        d="M278.197,334.228l33.361,-195.763l53.36,0l-33.385,195.763l-53.336,0Zm246.11,-191.54c-10.572,-3.966 -27.136,-8.222 -47.822,-8.222c-52.725,0 -89.865,26.55 -90.18,64.603c-0.298,28.13 26.513,43.822 46.753,53.186c20.77,9.594 27.752,15.714 27.654,24.283c-0.132,13.121 -16.587,19.116 -31.923,19.116c-21.357,0 -32.703,-2.966 -50.226,-10.276l-6.876,-3.111l-7.49,43.824c12.464,5.464 35.51,10.198 59.438,10.443c56.09,0 92.501,-26.246 92.916,-66.882c0.2,-22.268 -14.016,-39.216 -44.8,-53.188c-18.65,-9.055 -30.072,-15.099 -29.951,-24.268c0,-8.137 9.667,-16.839 30.556,-16.839c17.45,-0.27 30.089,3.535 39.937,7.5l4.781,2.26l7.234,-42.43m137.307,-4.222l-41.231,0c-12.774,0 -22.332,3.487 -27.942,16.234l-79.245,179.404l56.032,0c0,0 9.161,-24.123 11.233,-29.418c6.124,0 60.554,0.084 68.337,0.084c1.596,6.853 6.491,29.334 6.491,29.334l49.513,0l-43.188,-195.638Zm-65.418,126.407c4.413,-11.279 21.26,-54.723 21.26,-54.723c-0.316,0.522 4.38,-11.334 7.075,-18.684l3.606,16.879c0,0 10.217,46.728 12.352,56.528l-44.293,0Zm-363.293,-126.406l-52.24,133.496l-5.567,-27.13c-9.725,-31.273 -40.025,-65.155 -73.898,-82.118l47.766,171.203l56.456,-0.065l84.004,-195.386l-56.521,0Z"
                        fill="white"
                      ></path>
                      <path
                        d="M131.92,138.465l-86.041,0l-0.681,4.073c66.938,16.204 111.231,55.363 129.618,102.414l-18.71,-89.96c-3.23,-12.395 -12.597,-16.094 -24.186,-16.526"
                        fill="rgb(242,174,20)"
                      ></path>
                    </g>
                  </svg>
                ))}
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
      <Footer />
    </>
  );
};

export default ProductScreen;
