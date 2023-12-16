import React from "react";
import BackgroundImage from "../../assets/images/heroBg.png";

const ImageSection = () => {
  return (
    <div className="py-2 flex-1 flex items-center relative">
      {/* bg image */}
      <img
        src={BackgroundImage}
        alt="hero-bg"
        className="h-[510] lg:h-650 w-full lg:w-auto ml-auto"
      />

      {/* food cards */}
    </div>
  );
};

export default ImageSection;
