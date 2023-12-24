import React from "react";
import {
  WelcomeSection,
  ChickenSection,
  MenuSection,
  CartSection,
} from "../index";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const cartShowState = useSelector(
    (state) => state.userActivity.cartShowState
  );
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <WelcomeSection />
      <ChickenSection />
      <MenuSection />
      {cartShowState && <CartSection />}
    </div>
  );
};

export default MainContainer;
