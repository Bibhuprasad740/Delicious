import React from "react";
import BikeImage from "../../assets/images/delivery.png";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const TextSection = () => {
  const dispatch = useDispatch();
  const hideMenu = () => {
    dispatch(uiActions.hideMenu());
  };
  return (
    <div
      className="py-2 flex-1 flex flex-col items-start justify-center gap-6"
      onClick={hideMenu}
    >
      <div className="flex items-center justify-center gap-2 bg-orange-100 px-4 py-1 rounded-full">
        <p className="text-base text-orange-500 font-semibold">Order Online</p>
        {/* image */}
        <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
          <img
            className="w-full h-full object-contain"
            src={BikeImage}
            alt="bike delivery"
          />
        </div>
      </div>
      {/* heading */}
      <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
        The Fastest Delivery in{" "}
        <span className="text-[3rem] lg:text-[5rem] text-orange-600">
          Your City
        </span>
      </p>
      {/* about  */}
      <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Welcome to Delicious, where global flavors meet doorstep convenience!
        Explore a diverse menu, order effortlessly, and enjoy swift, reliable
        delivery. Benefit from exclusive deals, personalize your orders, and
        track them in real time. With secure payments and top-notch support,
        <b> elevate your dining experience with just a click!</b>
      </p>
      {/* order now btn */}
      <button
        type="button"
        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        Order Now!
      </button>
    </div>
  );
};

export default TextSection;
