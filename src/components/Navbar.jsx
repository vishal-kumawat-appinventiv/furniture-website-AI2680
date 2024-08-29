import { Menu, Search, ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-5 w-full">
        <div>
          <img
            src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-regular.png"
            alt="main-logo"
            className="md:mr-44"
          />
        </div>
        <div className="hidden lg:flex gap-4">
          <p className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110">
            SHOP ALL
          </p>
          <p className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110">
            DECOR
          </p>
          <p className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110">
            OFFICE
          </p>
          <p className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110">
            LIVING ROOM
          </p>
          <p className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110">
            BEDROOM
          </p>
          <p>
            <Search size={"20"} />
          </p>
        </div>
        <div className="hidden lg:flex gap-4">
          <p className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110">
            STORY
          </p>
          <p className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110">
            CONTACT
          </p>
          <p className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110">
            TRACK ORDER
          </p>
          <p className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110">
            HELP
          </p>
          <p className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110">
            Log In
          </p>
          <p>
            <ShoppingCart size={"20"} />
          </p>
        </div>
        <p className="lg:hidden">
          <Menu />
        </p>
      </div>
    </>
  );
};

export default Navbar;
