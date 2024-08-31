import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { footerCategories, footerLinks } from "../Constants";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-[#f1f2f2] border-b-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mt-12 mb-32 gap-5 p-2">
          <img
            src="https://websitedemos.net/furniture-shop-04/wp-content/uploads/sites/1116/2022/07/logo-regular.png"
            alt="logo"
          />
          <div className="links flex flex-col gap-2">
            <h4 className="font-bold text-2xl">Links</h4>
            {footerLinks.map((link, index) => (
              <p key={index} className="text-[#c69a83] hover:text-black">
                {link.href}
              </p>
            ))}
          </div>
          <div className="categories flex flex-col gap-2">
            <h4 className="font-bold text-2xl">CATEGORIES</h4>
            {footerCategories.map((category, index) => (
              <p key={index} className="text-[#c69a83] hover:text-black">
                {category.category}
              </p>
            ))}
          </div>
          <div className="Subscribe flex flex-col gap-2">
            <h4 className="font-bold text-2xl">Subscribe</h4>
            <input
              type="email"
              name="email"
              id="email"
              className="p-2 text-xl"
              placeholder="Your Email Addres..."
            />
            <button className="p-3 mt-3 w-32 text-white bg-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f2f2]">
        <div className="max-w-7xl mx-auto flex flex-col gap-5 sm:flex-row items-center justify-between p-10">
          <p>Copyright © 2024 Furniture Shop | Powered by Furniture Shop</p>
          <div className="flex gap-2">
            <Facebook />
            <Youtube />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
