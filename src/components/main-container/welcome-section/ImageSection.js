import React from "react";
import BackgroundImage from "../../../assets/images/heroBg.png";
import FoodCard from "./FoodCard";

import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/uiSlice";

import { DUMMY_FOOD_DATA } from "../../../DummyData";
import { userActivityActions } from "../../../store/userActivitySlice";

const ImageSection = () => {
  const dispatch = useDispatch();
  const hideMenu = () => {
    dispatch(uiActions.hideMenu());
    dispatch(userActivityActions.hideCart());
  };
  return (
    <div className="py-2 flex-1 flex items-center relative" onClick={hideMenu}>
      {/* bg image */}
      <img
        src={BackgroundImage}
        alt="backgroundImage"
        className="h-[400px] lg:h-650 w-full lg:w-auto ml-auto"
      />

      {/* food cards */}
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 lg:px-32 flex-wrap gap-4">
        {DUMMY_FOOD_DATA.map((food) => (
          <FoodCard
            key={food.id}
            src={food.imageSrc}
            name={food.name}
            description={food.description}
            price={food.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSection;
