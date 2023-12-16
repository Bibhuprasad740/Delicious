import React, { useState } from "react";
import { app } from "../../firebase.config";

import { authActions } from "../../store/authSlice";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUserToLocalStorage } from "../../utilities/localStorageMethods";
import PcLayout from "./PcLayout";
import MobileLayout from "./MobileLayout";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const Header = () => {
  const dispatch = useDispatch();

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

  const logout = async () => {
    setShowDropdown(false);
    try {
      await signOut(auth);
      dispatch(authActions.setUser(null));
      localStorage.clear();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
        {/* desktop and tablet layout*/}
        <PcLayout
          showDropdownHandler={showDropdownHandler}
          login={login}
          logout={logout}
          showDropdown={showDropdown}
        />

        {/* mobile layout */}
        <MobileLayout
          showDropdownHandler={showDropdownHandler}
          login={login}
          logout={logout}
          showDropdown={showDropdown}
        />
      </header>
    </div>
  );
};

export default Header;
