import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { uiActions } from "../../store/uiSlice";

import Logo from "../../assets/images/logo.png";
import ProfileImage from "../../assets/images/avatar.png";
import { MdAdd, MdLogout, MdShoppingBasket } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const animationScale = 0.6;

const MobileLayout = (props) => {
  const user = useSelector((state) => state.auth.user);
  const showMenu = useSelector((state) => state.ui.showMenu);
  const dispatch = useDispatch();

  const hideMenu = () => {
    dispatch(uiActions.hideMenu());
  };

  const addProductButton = (
    <Link to="/createItem">
      <p className="px-4 py-2 flex justify-center items-center gap-3 cursor-pointer hover:bg-orange-200 transition-all duration-100 ease-in-out text-textColor text-base">
        New Item <MdAdd />
      </p>
    </Link>
  );

  const dropdown = (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      className="flex flex-col w-40 bg-orange-100 shadow-xl rounded-lg absolute top-12 right-0"
      onClick={hideMenu}
    >
      {user &&
        user.email === "sahoo.bibhuprasad740@gmail.com" &&
        addProductButton}

      {/* navbar items */}
      <ul className="flex flex-col items-center">
        <li className="text-base text-textColor w-full text-center hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-orange-200 px-4 py-2">
          Home
        </li>{" "}
        <li className="text-base text-textColor w-full text-center hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-orange-200 px-4 py-2">
          Menu
        </li>
        <li className="text-base text-textColor w-full text-center hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-orange-200 px-4 py-2">
          About Us
        </li>
        <li className="text-base text-textColor w-full text-center hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-orange-200 px-4 py-2">
          Contact
        </li>
      </ul>
      <p
        onClick={props.logout}
        className="m-2 rounded-md shadow-lg px-4 py-2 flex justify-center items-center gap-3 cursor-pointer bg-black transition-all duration-100 ease-in-out text-white text-base"
      >
        Logout <MdLogout />
      </p>
    </motion.div>
  );

  return (
    <div className="flex md:hidden items-center justify-between h-full w-full ">
      {/* logo section */}
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} className="w-8 object-cover" alt="logo" />
        <p className="text-headingColor text-xl font-bold">Delicious</p>
      </Link>
      <div className="flex gap-5 items-end">
        {/* cart icon and badge */}
        <motion.div
          className="relative flex items-center justify-center"
          whileTap={{ scale: animationScale }}
        >
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </motion.div>
        {/* profile picture and dropdown menu */}
        <div className="relative">
          <motion.img
            whileTap={{ scale: animationScale }}
            src={user ? user.photoURL : ProfileImage}
            className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer drop-shadow-xl rounded-full"
            alt="profile_image"
            onClick={
              user
                ? () => {
                    dispatch(uiActions.toggleMenu());
                  }
                : props.login
            }
          />
          {showMenu && dropdown}
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
