import React from "react";

const FoodHeaderTitle = ({ title }) => {
  return (
    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:left-0 before:-bottom-2 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
      {title}
    </p>
  );
};

export default FoodHeaderTitle;
