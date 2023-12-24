import React from "react";
import { WelcomeSection, FruitsSection, ChickenSection } from "../index";

const MainContainer = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <WelcomeSection />
      <ChickenSection />
    </div>
  );
};

export default MainContainer;
