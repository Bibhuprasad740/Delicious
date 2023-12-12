import React from "react";
import Logo from "../assets/images/logo.png";
import ProfileImage from "../assets/images/avatar.png";
import { MdShoppingBasket } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <header className="fixed z-50 w-screen p-6 px-16">
        {/* desktop and tablet layout*/}
        <div className="hidden md:flex h-full w-full items-center justify-between">
          {/* logo section */}
          <div className="flex items-center gap-2">
            <img src={Logo} className="w-8 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold">City</p>
          </div>
          <div className="flex items-center gap-8">
            {/* navbar items */}
            <ul className="flex items-center gap-8">
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Home
              </li>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Menu
              </li>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                About Us
              </li>
              <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                Contact
              </li>
            </ul>
            {/* cart icon and badge */}
            <div className="relative flex items-center justify-center">
              <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">2</p>
              </div>
            </div>

            <img
              src={ProfileImage}
              className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer drop-shadow-xl"
              alt="profile_image"
            />
          </div>
        </div>

        {/* mobile layout */}
        <div className="flex md:hidden h-full w-full "></div>
      </header>
    </div>
  );
};

export default Header;
