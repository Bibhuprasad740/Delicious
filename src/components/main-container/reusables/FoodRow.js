import React from "react";
import FoodRowItem from "./FoodRowItem";

const FoodRow = ({ flag, foods }) => {
  const xOverflowState = flag
    ? "overflow-x-scroll scrollbar-none"
    : "overflow-x-hidden flex-wrap";
  return (
    <div
      className={`px-4 w-full my-12 flex gap-4 bg-foodRow rounded-lg ${xOverflowState}`}
    >
      {foods.map((food) => (
        <FoodRowItem
          key={food.id}
          imageSrc={food.imageUrl}
          name={food.title}
          price={food.price}
        />
      ))}
    </div>
  );
};

export default FoodRow;
