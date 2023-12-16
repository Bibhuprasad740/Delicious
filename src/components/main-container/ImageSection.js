import React from "react";
import BackgroundImage from "../../assets/images/heroBg.png";
import IcecreamImage from "../../assets/images/i1.png";
import ImageContainer from "../ImageContainer";

const ImageSection = () => {
  return (
    <section id="image-section" className="p-2 flex-1 relative">
      <div className="w-full flex items-center justify-center relative">
        <img src={BackgroundImage} alt="background_image" />
        <div className="absolute w-225">
          <ImageContainer src={IcecreamImage} />
        </div>
        <div className="absolute w-225">
          <ImageContainer src={IcecreamImage} />
        </div>
        {/* <div className="w-full flex absolute top-0 right-0">
        </div> */}
      </div>
    </section>
  );
};

export default ImageSection;
