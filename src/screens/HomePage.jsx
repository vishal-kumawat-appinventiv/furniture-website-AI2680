import React from "react";
import Navbar from "../components/Navbar";
import AboveImg from "../components/AboveImg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Category from "../components/Category";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const CarouselImages = [
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-001.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-002.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-003.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-004.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-005.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-006.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-007.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-001.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-002.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-003.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-004.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-005.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-006.png",
  },
  {
    image:
      "https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-007.png",
  },
];

const HomePage = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="fixed top-0 left-0 h-[50vh] lg:h-[100vh] w-full">
          <img
            src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/hero-01.jpg"
            alt="bg-image"
            className="w-full h-full object-cover"
            style={{ zIndex: "-1" }}
          />
        </div>

        <div className="relative z-10">
          <Navbar />
        </div>

        <div className="absolute top-[20%] left-[7%] lg:top-[40%] lg:left-[15%] z-10">
          <AboveImg />
        </div>

        <div className="relative z-10 bg-white">
          <div className="mt-[42vh] lg:mt-[100vh] mb-5 pt-5">
            <Carousel
              showDots={true}
              arrows={false}
              responsive={responsive}
              draggable={false}
              autoPlay={true}
              itemClass="mx-2"
            >
              {CarouselImages.map((i, idx) => {
                return (
                  <img
                    key={idx}
                    src={i?.image}
                    alt="img"
                    className="border-2 border-gray-300 mb-8"
                  />
                );
              })}
            </Carousel>
          </div>

          <div className="p-4">
            <Category />
          </div>

          <div className="mt-28">
            <Featured />
          </div>

          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
