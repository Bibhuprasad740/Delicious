import React from "react";
import BikeImage from "../../assets/images/delivery.png";

const TextSection = () => {
  return (
    <section
      id="text-section"
      className="py-2 flex-1 flex flex-col items-start justify-start gap-6 md:w-[80%]"
    >
      <div className="flex items-center justify-center gap-2 bg-orange-100 px-4 py-1 rounded-full">
        <p className="text-base text-orange-500 font-semibold">Order Online</p>
        <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
          <img
            src={BikeImage}
            alt="bike_image"
            className="w-full h-full object-contain bg-white"
          />
        </div>
      </div>
      <p className="text-[2.5rem] md:text-[4rem] tracking-wide">
        The <b>Fastest Delivery</b> in{" "}
        <span className="text-orange-500 font-bold">Your City</span>
      </p>

      <p className="text-base text-textColor text-center md:text-left">
        Welcome to Delicious, where global flavors meet doorstep convenience!
        Explore a diverse menu, order effortlessly, and enjoy swift, reliable
        delivery. Benefit from exclusive deals, personalize your orders, and
        track them in real time. With secure payments and top-notch support,
        <b> elevate your dining experience with just a click!</b>
      </p>

      <button
        type="button"
        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        Order Now!
      </button>
    </section>
  );
};

export default TextSection;
