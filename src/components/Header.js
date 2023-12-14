import React from "react";
import Logo from "../assets/images/logo.png";
import ProfileImage from "../assets/images/avatar.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { app } from "../firebase.config";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const auth = getAuth();
const provider = new GoogleAuthProvider();

const Header = () => {
  const animationScale = 0.6;

  const login = async () => {
    try {
      const authResult = await signInWithPopup(auth, provider);
      const userCredential =
        GoogleAuthProvider.credentialFromResult(authResult);
      const token = userCredential.accessToken;
      const user = authResult.user;
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <header className="fixed z-50 w-screen p-6 px-16">
        {/* desktop and tablet layout*/}
        <div className="hidden md:flex h-full w-full items-center justify-between">
          {/* logo section */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="w-8 object-cover" alt="logo" />
            <p className="text-headingColor text-xl font-bold">Delicious</p>
          </Link>
          <div className="flex items-center gap-8">
            {/* navbar items */}
            <ul className="flex items-center gap-8">
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
            </ul>
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
                src={ProfileImage}
                className="w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer drop-shadow-xl"
                alt="profile_image"
                onClick={login}
              />
            </div>
          </div>
        </div>

        {/* mobile layout */}
        <div className="flex md:hidden h-full w-full "></div>
      </header>
    </div>
  );
};

export default Header;
