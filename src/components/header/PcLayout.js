import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiActions } from "../../store/uiSlice";

import { motion } from "framer-motion";
import { MdAdd, MdLogout, MdShoppingBasket } from "react-icons/md";

import Logo from "../../assets/images/logo.png";
import ProfileImage from "../../assets/images/avatar.png";
import { userActivityActions } from "../../store/userActivitySlice";

const animationScale = 0.6;

const PcLayout = (props) => {
  const user = useSelector((state) => state.auth.user);
  const showMenu = useSelector((state) => state.ui.showMenu);
  const totalQuantity = useSelector(
    (state) => state.userActivity.totalQuantity
  );
  const dispatch = useDispatch();

  const hideMenu = () => {
    dispatch(uiActions.hideMenu());
  };

  const showCartHandler = () => {
    dispatch(userActivityActions.showCart());
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

      <hr />
      <p
        onClick={props.logout}
        className="px-4 py-2 flex justify-center items-center gap-3 cursor-pointer hover:bg-orange-200 transition-all duration-100 ease-in-out text-textColor text-base"
      >
        Logout <MdLogout />
      </p>
    </motion.div>
  );

  return (
    <div className="hidden md:flex h-full w-full items-center justify-between">
      {/* logo section */}
      <Link to="/" className="flex items-center gap-2">
        <img src={Logo} className="w-8 object-cover" alt="logo" />
        <p className="text-headingColor text-xl font-bold">Delicious</p>
      </Link>
      <div className="flex items-center gap-8">
        {/* navbar items */}
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="flex items-center gap-8"
        >
          <motion.li
            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            whileTap={{ scale: animationScale }}
          >
            Home
          </motion.li>
          <motion.li
            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            whileTap={{ scale: animationScale }}
          >
            Menu
          </motion.li>
          <motion.li
            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            whileTap={{ scale: animationScale }}
          >
            About Us
          </motion.li>
          <motion.li
            className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            whileTap={{ scale: animationScale }}
          >
            Contact
          </motion.li>
        </motion.ul>
        {/* cart icon and badge */}
        <motion.div
          className="relative flex items-center justify-center"
          whileTap={{ scale: animationScale }}
          onClick={showCartHandler}
        >
          <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
          {totalQuantity > 0 && (
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {totalQuantity}
              </p>
            </div>
          )}
        </motion.div>

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

export default PcLayout;
