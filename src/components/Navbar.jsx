import { Menu, Search, ShoppingCart } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navLink = location?.pathname.split("/").pop();

  return (
    <>
      <div
        className={`flex items-center justify-between p-5 w-full ${
          navLink && "border-b-2 border-gray-200"
        }`}
      >
        <div>
          <img
            src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-regular.png"
            alt="main-logo"
            className="md:mr-44 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="hidden lg:flex gap-4">
          <p
            onClick={() => toast("Yet to Build !")}
            className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110"
          >
            SHOP ALL
          </p>
          <p
            onClick={() => navigate("/product-category/decor")}
            className={`${
              navLink === "decor" && "text-amber-900"
            } text-sm cursor-pointer hover:text-amber-900 hover:scale-110`}
          >
            DECOR
          </p>
          <p
            onClick={() => navigate("/product-category/office")}
            className={`${
              navLink === "office" && "text-amber-900"
            } text-sm cursor-pointer hover:text-amber-900 hover:scale-110`}
          >
            OFFICE
          </p>
          <p
            onClick={() => navigate("/product-category/living-room")}
            className={`${
              navLink === "living-room" && "text-amber-900"
            } text-sm cursor-pointer hover:text-amber-900 hover:scale-110`}
          >
            LIVING ROOM
          </p>
          <p
            onClick={() => navigate("/product-category/bedroom")}
            className={`${
              navLink === "bedroom" && "text-amber-900"
            } text-sm cursor-pointer hover:text-amber-900 hover:scale-110`}
          >
            BEDROOM
          </p>
          <p onClick={() => toast("Yet to Build !")}>
            <Search size={"20"} />
          </p>
        </div>
        <div className="hidden lg:flex gap-4">
          <p
            onClick={() => toast("Yet to Build !")}
            className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110"
          >
            STORY
          </p>
          <p
            onClick={() => toast("Yet to Build !")}
            className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110"
          >
            CONTACT
          </p>
          <Link to={"/orders"}>
            <p className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110">
              TRACK ORDER
            </p>
          </Link>
          <p
            onClick={() => toast("Yet to Build !")}
            className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110"
          >
            HELP
          </p>
          <p
            onClick={() => toast("Yet to Build !")}
            className="text-sm cursor-pointer hover:text-amber-900 hover:scale-110"
          >
            Log In
          </p>
          <p onClick={() => toast("Yet to Build !")}>
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
