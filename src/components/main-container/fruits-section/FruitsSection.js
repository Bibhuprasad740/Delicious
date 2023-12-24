import { FoodRow } from "../../index";
import { useSelector } from "react-redux";
import FoodHeader from "../reusables/FoodHeader";

const FruitsSection = () => {
  const foods = useSelector((state) => state.foods.foods);

  return (
    <section className="w-full my-6">
      {/* Heading */}
      <FoodHeader title="Our Fresh and Healthy Fruits" />
      {foods && (
        <FoodRow
          flag={true}
          foods={foods[0].filter((food) => food.category === "fruits")}
        />
      )}
    </section>
  );
};

export default FruitsSection;
