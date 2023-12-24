import React, { useEffect, useRef } from "react";
import FoodRowItem from "./FoodRowItem";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/uiSlice";

const FoodRow = ({ flag, foods, onScroll }) => {
  const dispatch = useDispatch();
  const xOverflowState = flag
    ? "overflow-x-scroll scrollbar-none"
    : "overflow-x-hidden flex-wrap";
  const foodRowRef = useRef();
  useEffect(() => {
    dispatch(uiActions.setFoodRowRef(foodRowRef));
  }, [dispatch]);

  return (
    <div
      ref={foodRowRef}
      className={`px-4 w-full my-12 flex gap-4 bg-foodRow scroll-smooth rounded-lg ${xOverflowState}`}
    >
      {foods.map((food) => (
        <FoodRowItem
          key={food.id}
          imageSrc={food.imageUrl}
          name={food.title}
          price={food.price}
          calories={food.calories}
        />
      ))}
    </div>
  );
};

export default FoodRow;
