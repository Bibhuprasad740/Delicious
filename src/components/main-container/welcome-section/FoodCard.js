import React from "react";
import { PiCurrencyInrBold } from "react-icons/pi";

const FoodCard = (props) => {
  return (
    <div className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
      {/* image */}
      <img src={props.src} alt="I1" className="w-20 lg:w-40 -mt-10 lg:-mt-20" />
      {/* name */}
      <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
        {props.name}
      </p>
      {/* description */}
      <p className="text-[10px] text-center lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3 ">
        {props.description}
      </p>
      {/* price */}
      <p className="text-lg font-semibold text-headingColor">
        <PiCurrencyInrBold className="text-lg font-bold inline" />
        {props.price}
      </p>
    </div>
  );
};

export default FoodCard;
