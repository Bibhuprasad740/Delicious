import React from "react";
import {
  WelcomeSection,
  FruitsSection,
  ChickenSection,
  MenuSection,
} from "../index";

const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <WelcomeSection />
      <ChickenSection />
      <MenuSection />
    </div>
  );
};

export default MainContainer;
