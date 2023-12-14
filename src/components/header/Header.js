import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import ProfileImage from "../../assets/images/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { authActions } from "../../store/authSlice";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../../firebase.config";
import { setUserToLocalStorage } from "../../utilities/localStorageMethods";

const auth = getAuth();
const provider = new GoogleAuthProvider();
const animationScale = 0.6;

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [showDropdown, setShowDropdown] = useState(false);

  const showDropdownHandler = () => {
    setShowDropdown((state) => !state);
  };

  const login = async () => {
    try {
      const authResult = await signInWithPopup(auth, provider);
      GoogleAuthProvider.credentialFromResult(authResult);
      const FirebaseUserData = authResult.user;
      const user = FirebaseUserData.providerData[0]; // this will be used as our global user
      // const refreshToken = FirebaseUserData.refreshToken;

      dispatch(authActions.setUser(user));
      setUserToLocalStorage(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addProductButton = (
    <p className="px-4 py-2 flex justify-center items-center gap-3 cursor-pointer hover:bg-orange-200 transition-all duration-100 ease-in-out text-textColor text-base">
      New Item <MdAdd />
    </p>
  );

  const dropdown = (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      className="flex flex-col w-40 bg-orange-100 shadow-xl rounded-lg absolute top-12 right-0"
    >
      <Link to="/createItem">
        {user &&
          user.email === "sahoo.bibhuprasad740@gmail.com" &&
          addProductButton}
      </Link>
      <hr />
      <p className="px-4 py-2 flex justify-center items-center gap-3 cursor-pointer hover:bg-orange-200 transition-all duration-100 ease-in-out text-textColor text-base">
        Logout <MdLogout />{" "}
      </p>
    </motion.div>
  );

  return (
    <div>
      <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
        {/* desktop and tablet layout*/}
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
            >
              <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">2</p>
              </div>
            </motion.div>

            <div className="relative">
              <motion.img
                whileTap={{ scale: animationScale }}
                src={user ? user.photoURL : ProfileImage}
                className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer drop-shadow-xl rounded-full"
                alt="profile_image"
                onClick={user ? showDropdownHandler : login}
              />
              {showDropdown && dropdown}
            </div>
          </div>
        </div>

        {/* mobile layout */}
        <div className="flex md:hidden items-center justify-between h-full w-full ">
          {/* logo section */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="w-8 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold">Delicious</p>
          </Link>
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

          <div className="relative">
            <motion.img
              whileTap={{ scale: animationScale }}
              src={user ? user.photoURL : ProfileImage}
              className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer drop-shadow-xl rounded-full"
              alt="profile_image"
              onClick={user ? showDropdownHandler : login}
            />
            {showDropdown && dropdown}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
