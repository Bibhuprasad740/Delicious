import { app } from "../../firebase.config";

import { authActions } from "../../store/authSlice";
import { uiActions } from "../../store/uiSlice";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setDataToLocalStorage } from "../../utilities/localStorageMethods";
import PcLayout from "./PcLayout";
import MobileLayout from "./MobileLayout";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const Header = () => {
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const authResult = await signInWithPopup(auth, provider);
      GoogleAuthProvider.credentialFromResult(authResult);
      const FirebaseUserData = authResult.user;
      const user = FirebaseUserData.providerData[0]; // this will be used as our global user
      // const refreshToken = FirebaseUserData.refreshToken;

      dispatch(authActions.setUser(user));
      setDataToLocalStorage("user", user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    dispatch(uiActions.hideMenu());
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
        <PcLayout login={login} logout={logout} />

        {/* mobile layout */}
        <MobileLayout login={login} logout={logout} />
      </header>
    </div>
  );
};

export default Header;
