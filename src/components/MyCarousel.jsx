import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const MyCarousel = () => {
  return (
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
  );
};

export default MyCarousel;
