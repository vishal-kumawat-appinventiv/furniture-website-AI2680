import React, { useEffect, useState } from "react";
import { prodPageImages } from "../Constants";

const SelectOptions = () => {
  const [showSelectOptions, setShowSelectOptions] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.32) {
        setShowSelectOptions(true);
      } else {
        setShowSelectOptions(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`selectOptions z-30 w-full bg-white shadow-2xl shadow-black flex items-center justify-between p-3 fixed bottom-0 left-0 right-0 transition-transform duration-300 ${
          showSelectOptions ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-full max-w-7xl flex mx-auto items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={prodPageImages[0]}
              alt="img"
              className="w-8 h-10 object-cover"
            />
            <h3 className="text-gray-600 font-bold">Product Name 10</h3>
          </div>
          <div className="flex items-center gap-3">
            <p className="font-bold">$85.00 - $99.00</p>
            <button className="text-white py-2 px-2 bg-black hover:bg-[#c29b84]">
              SELECT OPTIONS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectOptions;
