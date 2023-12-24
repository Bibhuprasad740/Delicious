import { FoodRow } from "../../index";
import { useSelector } from "react-redux";
import FoodHeader from "../reusables/FoodHeader";

const ChickenSection = () => {
  const foods = useSelector((state) => state.foods.foods);

  return (
    <section className="w-full my-6">
      {/* Heading */}
      <FoodHeader title="Mouth Watering Chicken Dishes" />
      {/* Food row */}
      {foods && (
        <FoodRow
          flag={true}
          foods={foods[0].filter((food) => food.category === "chicken")}
        />
      )}
    </section>
  );
};

export default ChickenSection;
