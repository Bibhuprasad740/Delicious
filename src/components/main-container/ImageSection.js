import React from "react";
import BackgroundImage from "../../assets/images/heroBg.png";
import FoodCard from "./FoodCard";

import Icecream from "../../assets/images/i1.png";
import Strawberry from "../../assets/images/f1.png";
import Chicken from "../../assets/images/c1.png";
import Fish from "../../assets/images/fi1.png";

const DUMMY_FOOD_DATA = [
  {
    id: 1,
    name: "Icecream",
    description: "Chocolate & Vanilla",
    price: 200,
    imageSrc: Icecream,
  },
  {
    id: 2,
    name: "Strawberries",
    description: "Fresh Strawberries",
    price: 80,
    imageSrc: Strawberry,
  },
  {
    id: 3,
    name: "Chicken",
    description: "Mixed Chicken Kabab",
    price: 100,
    imageSrc: Chicken,
  },
  {
    id: 4,
    name: "Fish",
    description: "Fish Kabab",
    price: 120,
    imageSrc: Fish,
  },
];

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
      <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 lg:px-32 flex-wrap gap-4">
        {DUMMY_FOOD_DATA.map((food) => (
          <FoodCard
            id={food.id}
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
